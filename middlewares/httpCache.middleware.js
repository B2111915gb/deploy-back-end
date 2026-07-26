const crypto = require("crypto");

/**
 * Middleware thêm HTTP caching (ETag + Cache-Control + 304 Not Modified)
 * cho các route GET có dữ liệu ít thay đổi.
 *
 * @param {Object} options
 * @param {number} [options.maxAge=30]   - Số giây client được phép dùng cache mà KHÔNG cần hỏi lại server
 * @param {boolean} [options.noCache=false] - true = luôn phải revalidate với server (dùng cho data hay đổi, ví dụ số ghế trống)
 */
function httpCache({ maxAge = 30, noCache = false } = {}) {
  return function (req, res, next) {
    // Chỉ áp dụng cho GET/HEAD (theo đúng nguyên tắc: chỉ cache request an toàn, không side-effect)
    if (req.method !== "GET" && req.method !== "HEAD") {
      return next();
    }

    const originalJson = res.json.bind(res);

    res.json = (body) => {
      // Không cache response lỗi
      if (res.statusCode >= 400) {
        return originalJson(body);
      }

      // Tạo ETag dựa trên hash nội dung response
      const payload = JSON.stringify(body);
      const hash = crypto.createHash("md5").update(payload).digest("hex");
      const etag = `"${hash}"`;

      res.set("ETag", etag);
      res.set(
        "Cache-Control",
        noCache ? "no-cache" : `public, max-age=${maxAge}`,
      );

      // So sánh với ETag mà client gửi lên (nếu có)
      const clientETag = req.headers["if-none-match"];
      if (clientETag && clientETag === etag) {
        return res.status(304).end(); // Không gửi body -> tiết kiệm băng thông
      }

      return originalJson(body);
    };

    next();
  };
}

module.exports = httpCache;
