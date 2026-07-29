// frontend-spa/src/pages/Home.vue
<template>
  <!-- Welcome Section -->
  <div class="welcome-section">
    <div class="container">
      <div class="welcome-content text-center">
        <h1 class="display-4 fw-bold mb-4">
          <i class="fas fa-bus me-3"></i>
          Chào mừng đến với BAO BINH Bus
        </h1>
        <p class="lead mb-4">
          Đặt vé xe nhanh chóng, an toàn và tiện lợi cùng hệ thống xe khách hàng đầu Việt Nam
        </p>
        <div class="row justify-content-center">
          <div class="col-md-8">
            <div class="bg-white p-4 rounded-3 shadow">
              <div class="row g-3">
                <div class="col-md-3">
                  <label class="form-label text-dark fw-bold">Điểm đi</label>
                  <select class="form-select">
                    <option>Chọn điểm đi</option>
                    <option>TP. Hồ Chí Minh</option>
                    <option>Cần Thơ</option>
                    <option>Long Xuyên</option>
                  </select>
                </div>
                <div class="col-md-3">
                  <label class="form-label text-dark fw-bold">Điểm đến</label>
                  <select class="form-select">
                    <option>Chọn điểm đến</option>
                    <option>Đà Lạt</option>
                    <option>Đà Nẵng</option>
                    <option>Nha Trang</option>
                  </select>
                </div>
                <div class="col-md-3">
                  <label class="form-label text-dark fw-bold">Ngày đi</label>
                  <input type="date" class="form-control" value="2025-07-23" />
                </div>
                <div class="col-md-3 d-flex align-items-end">
                  <button class="btn btn-orange w-100 py-2">
                    <i class="fas fa-search me-2"></i>Tìm chuyến xe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="home-page">
    <!-- Banner -->
    <div class="banner text-center py-5" style="background-color: #f8e1e1">
      <h1 class="text-orange">BAO BINH Bus Lines</h1>
      <p class="text-muted">Chất lượng Là Danh Dự</p>
      <div class="banner-content position-relative">
        <h2 class="text-green mb-4">24 NĂM VỮNG TIN & PHÁT TRIỂN</h2>
        <!-- Custom SVG Banner -->
        <div class="custom-banner">
          <svg width="100%" height="300" viewBox="0 0 1200 300" class="banner-svg">
            <!-- Background gradient -->
            <defs>
              <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color: #fff8dc; stop-opacity: 1" />
                <stop offset="50%" style="stop-color: #f5deb3; stop-opacity: 1" />
                <stop offset="100%" style="stop-color: #deb887; stop-opacity: 1" />
              </linearGradient>
              <linearGradient id="roadGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style="stop-color: #228b22; stop-opacity: 1" />
                <stop offset="100%" style="stop-color: #32cd32; stop-opacity: 1" />
              </linearGradient>
            </defs>

            <!-- Background -->
            <rect width="100%" height="100%" fill="url(#bgGradient)" />

            <!-- City skyline background -->
            <g opacity="0.3">
              <rect x="50" y="80" width="40" height="120" fill="#D3D3D3" />
              <rect x="100" y="60" width="35" height="140" fill="#C0C0C0" />
              <rect x="150" y="90" width="30" height="110" fill="#D3D3D3" />
              <rect x="200" y="70" width="45" height="130" fill="#C0C0C0" />
              <rect x="1000" y="75" width="40" height="125" fill="#D3D3D3" />
              <rect x="1050" y="55" width="35" height="145" fill="#C0C0C0" />
              <rect x="1100" y="85" width="30" height="115" fill="#D3D3D3" />
            </g>

            <!-- Decorative flowers -->
            <g>
              <!-- Left flower -->
              <circle cx="100" cy="50" r="8" fill="#DDA0DD" />
              <circle cx="95" cy="45" r="6" fill="#DA70D6" />
              <circle cx="105" cy="45" r="6" fill="#DA70D6" />
              <circle cx="90" cy="55" r="6" fill="#DA70D6" />
              <circle cx="110" cy="55" r="6" fill="#DA70D6" />

              <!-- Right flower -->
              <circle cx="1100" cy="60" r="10" fill="#FFD700" />
              <circle cx="1092" cy="52" r="7" fill="#FFA500" />
              <circle cx="1108" cy="52" r="7" fill="#FFA500" />
              <circle cx="1092" cy="68" r="7" fill="#FFA500" />
              <circle cx="1108" cy="68" r="7" fill="#FFA500" />
            </g>
            <!-- Road -->
            <ellipse cx="600" cy="250" rx="500" ry="30" fill="url(#roadGradient)" />

            <!-- Buses -->
            <!-- Bus 1 -->
            <g transform="translate(300,180)">
              <rect x="0" y="20" width="80" height="40" rx="5" fill="#DC143C" />
              <rect x="5" y="25" width="20" height="15" fill="#87CEEB" />
              <rect x="30" y="25" width="20" height="15" fill="#87CEEB" />
              <rect x="55" y="25" width="20" height="15" fill="#87CEEB" />
              <circle cx="15" cy="65" r="8" fill="#2F4F4F" />
              <circle cx="65" cy="65" r="8" fill="#2F4F4F" />
              <rect x="10" y="0" width="60" height="20" rx="10" fill="#DC143C" />
            </g>

            <!-- Bus 2 (Main center bus) -->
            <g transform="translate(450,160)">
              <rect x="0" y="20" width="100" height="50" rx="5" fill="#DC143C" />
              <rect x="5" y="25" width="25" height="20" fill="#87CEEB" />
              <rect x="35" y="25" width="30" height="20" fill="#87CEEB" />
              <rect x="70" y="25" width="25" height="20" fill="#87CEEB" />
              <circle cx="20" cy="75" r="10" fill="#2F4F4F" />
              <circle cx="80" cy="75" r="10" fill="#2F4F4F" />
              <rect x="10" y="0" width="80" height="20" rx="10" fill="#DC143C" />
              <!-- Door -->
              <rect x="85" y="35" width="15" height="35" fill="#8B0000" />
            </g>

            <!-- Bus 3 -->
            <g transform="translate(600,175)">
              <rect x="0" y="20" width="85" height="42" rx="5" fill="#DC143C" />
              <rect x="5" y="25" width="22" height="18" fill="#87CEEB" />
              <rect x="32" y="25" width="22" height="18" fill="#87CEEB" />
              <rect x="58" y="25" width="22" height="18" fill="#87CEEB" />
              <circle cx="18" cy="67" r="9" fill="#2F4F4F" />
              <circle cx="67" cy="67" r="9" fill="#2F4F4F" />
              <rect x="12" y="0" width="60" height="20" rx="10" fill="#DC143C" />
            </g>

            <!-- Bus 4 -->
            <g transform="translate(750,185)">
              <rect x="0" y="20" width="75" height="38" rx="5" fill="#DC143C" />
              <rect x="5" y="25" width="18" height="15" fill="#87CEEB" />
              <rect x="28" y="25" width="18" height="15" fill="#87CEEB" />
              <rect x="51" y="25" width="18" height="15" fill="#87CEEB" />
              <circle cx="15" cy="63" r="8" fill="#2F4F4F" />
              <circle cx="60" cy="63" r="8" fill="#2F4F4F" />
              <rect x="10" y="0" width="55" height="18" rx="9" fill="#DC143C" />
            </g>

            <!-- Company logo text -->
            <text
              x="600"
              y="120"
              text-anchor="middle"
              fill="#228B22"
              font-size="24"
              font-weight="bold"
            >
              BAO BINH Group
            </text>
            <text x="600" y="140" text-anchor="middle" fill="#228B22" font-size="14">
              CHẤT LƯỢNG LÀ DANH DỰ
            </text>
          </svg>
        </div>
      </div>
    </div>

    <!-- Thông tin nổi bật -->
    <div class="container my-5">
      <h2 class="text-center text-green mb-4">THÔNG TIN NỔI BẬT</h2>
      <div class="row text-center">
        <div class="col-md-4 mb-3">
          <div class="card h-100">
            <div class="card-body">
              <i class="fas fa-bus fa-3x text-orange mb-3"></i>
              <h4>Hơn 40 Triệu Lượt Khách</h4>
              <p class="text-muted">
                Phục vụ hơn 40 triệu lượt khách trong hơn 1 năm trên toàn quốc.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="card h-100">
            <div class="card-body">
              <i class="fas fa-map-marker-alt fa-3x text-orange mb-3"></i>
              <h4>Hơn 350 Tuyến & Bến Cảng</h4>
              <p class="text-muted">Xuyên suốt trên hơn 350 tuyến đường, bến cảng, bến xe.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="card h-100">
            <div class="card-body">
              <i class="fas fa-truck fa-3x text-orange mb-3"></i>
              <h4>Hơn 6,500 Chuyến Xe</h4>
              <p class="text-muted">
                Phục vụ hơn 6,500 chuyến xe mỗi ngày với đội ngũ tài xế chuyên nghiệp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- tuyen duong pho bien -->
    <div class="container my-5">
      <h2 class="text-center text-green mb-4">TUYẾN ĐƯỜNG PHỔ BIẾN</h2>
      <div class="row" id="popular-routes">
        <div class="col-md-4 mb-4">
          <a href="#" class="text-decoration-none">
            <div class="card route-card h-100 shadow-sm">
              <img
                src="/img/bus-image-1.png"
                alt="Hình ảnh 1"
                class="card-img-top"
                style="height: 200px; object-fit: cover"
              />
              <div class="card-body text-center">
                <h5 class="card-title text-orange">TP. Hồ Chí Minh - Đà Lạt</h5>
                <p class="card-text text-muted">Thời gian: 7h30 - 8h</p>
                <p class="card-text text-muted">Giá vé: từ 250,000 VNĐ</p>
                <p class="card-text text-muted">Loại xe: Giường nằm 40 chỗ</p>
                <button class="btn btn-orange">Đặt vé</button>
              </div>
            </div>
          </a>
        </div>
        <div class="col-md-4 mb-4">
          <a href="#" class="text-decoration-none">
            <div class="card route-card h-100 shadow-sm">
              <img
                src="/img/bus-image-2.png"
                alt="Hình ảnh 1"
                class="card-img-top"
                style="height: 200px; object-fit: cover"
              />
              <div class="card-body text-center">
                <h5 class="card-title text-orange">TP. Hồ Chí Minh - Nha Trang</h5>
                <p class="card-text text-muted">Thời gian: 8h - 9h</p>
                <p class="card-text text-muted">Giá vé: từ 280,000 VNĐ</p>
                <p class="card-text text-muted">Loại xe: Limousine 22 chỗ</p>
                <button class="btn btn-orange">Đặt vé</button>
              </div>
            </div>
          </a>
        </div>
        <div class="col-md-4 mb-4">
          <a href="#" class="text-decoration-none">
            <div class="card route-card h-100 shadow-sm">
              <img
                src="/img/bus-image-3.png"
                alt="Hình ảnh 1"
                class="card-img-top"
                style="height: 200px; object-fit: cover"
              />
              <div class="card-body text-center">
                <h5 class="card-title text-orange">TP. Hồ Chí Minh - Đà Nẵng</h5>
                <p class="card-text text-muted">Thời gian: 18h - 20h</p>
                <p class="card-text text-muted">Giá vé: từ 650,000 VNĐ</p>
                <p class="card-text text-muted">Loại xe: Giường nằm 34 chỗ</p>
                <button class="btn btn-orange">Đặt vé</button>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <!-- Chat luong la danh du -->
    <div class="container my-5">
      <div class="text-center">
        <div class="logo-container mb-4">
          <div class="logo-circle">
            <span class="logo-text">BAO BINH</span>
          </div>
        </div>
        <h2 class="text-green mb-4">BAO BINH BUS LINES - CHẤT LƯỢNG LÀ DANH DỰ</h2>
        <p class="text-muted mb-5">Được thành lập với tiêu chí vì lựa chọn</p>
      </div>
      <div class="row text-center justify-content-center">
        <div class="col-md-4 mb-4">
          <div class="card h-100 p-4 shadow-sm">
            <img src="/img/12.jpg" alt="Hình ảnh 1" class="custom-image" />
            <h4 class="text-dark fw-bold">Hơn 40 Triệu Lượt Khách</h4>
            <p class="text-muted">Phục vụ hơn 40 triệu lượt khách trên toàn quốc trong hơn 1 năm</p>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card h-100 p-4 shadow-sm">
            <img src="/img/13.jpg" alt="Hình ảnh 1" class="custom-image" />
            <h4 class="text-dark fw-bold">Hơn 350 Phường Về - Bến Cảng</h4>
            <p class="text-muted">
              Xuyên suốt trên hơn 350 phường vé, trạm trung chuyển, bến xe...
            </p>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card h-100 p-4 shadow-sm">
            <img src="/img/11.jpg" alt="Hình ảnh 1" class="custom-image" />
            <h4 class="text-dark fw-bold">Hơn 6,500 Chuyến Xe</h4>
            <p class="text-muted">
              Phục vụ hơn 6,500 chuyến xe mỗi ngày với đội ngũ tài xế chuyên nghiệp
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="row">
          <!-- Company Info -->
          <div class="col-lg-3 col-md-6 mb-4">
            <div class="footer-logo">
              <h3 class="text-orange fw-bold">BAO BINH Bus Lines</h3>
              <p class="text-white">Chất lượng là danh dự</p>
            </div>
            <div class="contact-info">
              <div class="mb-2">
                <i class="fas fa-phone"></i>
                <strong>Tổng đài:</strong> 1900 6067
              </div>
              <div class="mb-2">
                <i class="fas fa-envelope"></i>
                <strong>Email:</strong> hotro@baobinhbus.vn
              </div>
              <div class="mb-2">
                <i class="fas fa-map-marker-alt"></i>
                <strong>Trụ sở:</strong> 272 Võ Thị Sáu, P.7, Q.3, TP.HCM
              </div>
            </div>
          </div>

          <!-- Services -->
          <div class="col-lg-2 col-md-6 mb-4">
            <h5>Dịch vụ</h5>
            <ul class="list-unstyled">
              <li><a href="#">Xe khách</a></li>
              <li><a href="#">Xe limousine</a></li>
              <li><a href="#">Xe giường nằm</a></li>
              <li><a href="#">Thuê xe</a></li>
              <li><a href="#">Giao hàng</a></li>
              <li><a href="#">Bảo hiểm</a></li>
            </ul>
          </div>

          <!-- Support -->
          <div class="col-lg-2 col-md-6 mb-4">
            <h5>Hỗ trợ</h5>
            <ul class="list-unstyled">
              <li><a href="#">Hướng dẫn đặt vé</a></li>
              <li><a href="#">Chính sách hoàn vé</a></li>
              <li><a href="#">Điều khoản sử dụng</a></li>
              <li><a href="#">Chính sách bảo mật</a></li>
              <li><a href="#">Câu hỏi thường gặp</a></li>
              <li><a href="#">Liên hệ</a></li>
            </ul>
          </div>

          <!-- Destinations -->
          <div class="col-lg-2 col-md-6 mb-4">
            <h5>Tuyến phổ biến</h5>
            <ul class="list-unstyled">
              <li><a href="#">HCM - Đà Lạt</a></li>
              <li><a href="#">HCM - Nha Trang</a></li>
              <li><a href="#">HCM - Đà Nẵng</a></li>
              <li><a href="#">Cần Thơ - HCM</a></li>
              <li><a href="#">Long Xuyên - HCM</a></li>
              <li><a href="#">Xem tất cả</a></li>
            </ul>
          </div>

          <!-- Download App -->
          <div class="col-lg-3 col-md-6 mb-4">
            <h5>Tải ứng dụng</h5>
            <p class="text-white mb-3">Đặt vé nhanh chóng, tiện lợi</p>
            <div class="download-apps"></div>

            <div class="social-icons mt-4">
              <a href="#"><i class="fab fa-facebook"></i></a>
              <a href="#"><i class="fab fa-youtube"></i></a>
              <a href="#"><i class="fab fa-zalo"></i></a>
              <a href="#"><i class="fab fa-tiktok"></i></a>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="row">
            <div class="col-md-6">
              <p>© 2024 BAO BINH Bus Lines. Tất cả quyền được bảo lưu.</p>
            </div>
            <div class="col-md-6 text-md-end">
              <p>GPKD số: 0123456789 - Ngày cấp: 01/01/2000</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/*  Nút ở tuyen duong dat ve*/
.btn-orange {
  background-color: #ff6200; /* Màu cam */
  color: white; /* Chữ trắng */
  border: none;
  padding: 10px 20px; /* Kích thước padding */
  border-radius: 20px; /* Bo góc */
  font-weight: bold; /* Chữ đậm */
  width: 50%; /* Chiều rộng để căn giữa */
  margin: 10px auto 0; /* Cách lề trên và căn giữa */
  display: block; /* Đảm bảo căn giữa */
}

.btn-orange:hover {
  background-color: #e65c00; /* Màu khi hover */
  color: white;
}

.card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%; /* Đảm bảo card-body chiếm toàn bộ chiều cao */
}

.card-body p:last-child {
  margin-bottom: auto; /* Đẩy phần "Loại xe" lên trên */
}

.card-img-top {
  height: 200px;
  object-fit: cover;
}

.route-card {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.route-card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.route-card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
</style>
<style>
/* Cua phan chat luong la danh du */
.logo-container {
  display: flex;
  justify-content: center;
}

.logo-circle {
  width: 120px;
  height: 120px;
  background-color: #ffcccc;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.logo-text {
  color: #ff6600;
  font-weight: bold;
  font-size: 1.2rem;
}

.icon-circle {
  width: 60px;
  height: 60px;
  background-color: #fff3e6;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
}

.card {
  border: none;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}
/* Het cua phan chat luong la danh du */
.text-orange {
  color: #ff6200;
}

.text-green {
  color: #28a745;
}

.btn-orange {
  background-color: #ff6200;
  color: white;
  border: none;
}

.btn-orange:hover {
  background-color: #e65c00;
  color: white;
}

.welcome-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 60px 0;
  position: relative;
  overflow: hidden;
}

.welcome-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 300"><path d="M0,100 C150,200 350,0 500,100 C650,200 850,0 1000,100 L1000,300 L0,300 Z" fill="rgba(255,255,255,0.1)"/></svg>')
    no-repeat center bottom;
  background-size: cover;
}

.welcome-content {
  position: relative;
  z-index: 2;
}

.banner {
  background-color: #f8e1e1;
  padding: 20px 0;
}

.custom-banner {
  max-width: 1200px;
  margin: 0 auto;
}

.banner-svg {
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.route-image {
  height: 200px;
  overflow: hidden;
}

.route-image svg {
  border-radius: 8px 8px 0 0;
}

.card {
  border: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

.card-img-top {
  object-fit: cover;
  height: 200px;
}

.card-title {
  font-size: 1.1rem;
  font-weight: bold;
}

.card-text {
  font-size: 0.9rem;
}

.card-footer {
  background-color: #f8f9fa;
  border-top: none;
}

/* Footer Styles */
.footer {
  background-color: #1a1a1a;
  color: #ffffff;
  padding: 50px 0 20px;
  margin-top: 50px;
}

.footer h5 {
  color: #ff6200;
  font-weight: bold;
  margin-bottom: 20px;
  font-size: 1.1rem;
}

.footer a {
  color: #cccccc;
  text-decoration: none;
  transition: color 0.3s ease;
  display: block;
  padding: 5px 0;
}

.footer a:hover {
  color: #ff6200;
}

.footer-logo {
  max-width: 150px;
  margin-bottom: 20px;
}

.footer-bottom {
  border-top: 1px solid #333;
  padding-top: 20px;
  margin-top: 30px;
  text-align: center;
  color: #888;
}

.social-icons a {
  color: #cccccc;
  font-size: 1.5rem;
  margin-right: 15px;
  transition: color 0.3s ease;
}

.social-icons a:hover {
  color: #ff6200;
}

.contact-info {
  background-color: #2a2a2a;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.contact-info i {
  color: #ff6200;
  margin-right: 10px;
  width: 20px;
}

.download-apps img {
  max-width: 140px;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.download-apps img:hover {
  transform: scale(1.05);
}
</style>
<script setup>
import { useAuthStore } from "@/stores/auth.store";

const authStore = useAuthStore();

console.log(authStore.token);
console.log(authStore.isLoggedIn);
</script>
