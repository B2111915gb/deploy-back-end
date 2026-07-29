<template>
  <div class="contact-page">
    <!-- Header Section -->
    <div class="contact-header">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <i class="fas fa-chevron-right"></i>
                  BAO BINH BUS LINES
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="container mt-4">
      <div class="row">
        <div class="col-12">
          <h1 class="contact-title text-orange mb-4">LIÊN HỆ VỚI CHÚNG TÔI</h1>

          <!-- Company Info Card -->
          <div class="company-info-card mb-5">
            <h2 class="company-name text-orange mb-4">
              CÔNG TY CỔ PHẦN XE KHÁCH BẢO BÌNH - BAO BINH BUS LINES
            </h2>

            <div class="contact-details">
              <div class="contact-item mb-3">
                <strong>Địa chỉ:</strong>
                <span class="text-muted"
                  >123-125 Đường Nguyễn Văn Linh, Phường An Hòa, Quận Ninh Kiều, TP Cần Thơ, Việt
                  Nam.</span
                >
              </div>

              <div class="contact-item mb-3">
                <strong>Website:</strong>
                <a href="#" class="text-primary">https://baobinhbus.vn/</a>
              </div>

              <div class="contact-item mb-3">
                <strong>Điện thoại:</strong>
                <span class="text-muted">02923456789</span>
              </div>

              <div class="contact-item mb-3">
                <strong>Fax:</strong>
                <span class="text-muted">02923456790</span>
              </div>

              <div class="contact-item mb-3">
                <strong>Email:</strong>
                <a href="mailto:hotro@baobinh.vn" class="text-primary">hotro@baobinh.vn</a>
              </div>

              <div class="contact-item mb-3">
                <strong>Hotline:</strong>
                <span class="hotline-number">1900 6789</span>
              </div>
            </div>
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

    <!-- Social Media Section -->
  </div>
</template>

<script setup>
// No special functionality needed for contact page
</script>

<style scoped>
.contact-page {
  background-color: #f8f9fa;
  min-height: 100vh;
}

.contact-header {
  background-color: #ff6200;
  color: white;
  padding: 15px 0;
}

.breadcrumb {
  background: none;
  padding: 0;
  margin: 0;
}

.breadcrumb-item {
  color: white;
  font-size: 14px;
}

.breadcrumb-item i {
  margin-right: 8px;
}

.text-orange {
  color: #ff6200 !important;
}

.contact-title {
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
}

.company-info-card {
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.company-name {
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
}

.contact-details {
  max-width: 600px;
  margin: 0 auto;
}

.contact-item {
  font-size: 1.1rem;
  line-height: 1.6;
}

.contact-item strong {
  color: #333;
  min-width: 100px;
  display: inline-block;
}

.hotline-number {
  color: #ff6200;
  font-weight: bold;
  font-size: 1.2rem;
}

.contact-info-section {
  background: white;
}

.contact-card {
  padding: 30px 20px;
  height: 100%;
}

.contact-icon {
  margin-bottom: 20px;
}

.contact-card-title {
  color: #333;
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.hotline-large {
  font-size: 2.5rem;
  font-weight: bold;
  color: #ff6200;
  margin-bottom: 20px;
}

.company-footer-info {
  font-size: 0.9rem;
  line-height: 1.6;
  text-align: left;
}

.company-footer-info strong {
  color: #333;
}

.download-section h5 {
  color: #333;
  font-size: 1rem;
  margin-bottom: 15px;
}

.app-buttons .btn {
  font-size: 0.8rem;
  padding: 8px 15px;
}

.service-list li {
  margin-bottom: 10px;
}

.service-list a {
  color: #666;
  text-decoration: none;
  font-size: 0.9rem;
}

.service-list a:hover {
  color: #ff6200;
}

.service-list i {
  margin-right: 8px;
  font-size: 0.8rem;
  color: #ff6200;
}

.social-section {
  background-color: #f8f9fa;
  border-top: 1px solid #e9ecef;
}

.social-icons .social-icon {
  text-decoration: none;
  transition: transform 0.3s ease;
}

.social-icons .social-icon:hover {
  transform: scale(1.1);
}

@media (max-width: 768px) {
  .contact-title {
    font-size: 2rem;
  }

  .company-info-card {
    padding: 20px;
  }

  .hotline-large {
    font-size: 2rem;
  }

  .company-footer-info {
    text-align: center;
  }
}
</style>
