<template>
  <div>
    <h2>Lịch sử đặt vé</h2>
    <ul>
      <li v-for="booking in bookings" :key="booking.id">
        {{ booking.passenger_name }} | {{ booking.departure }} → {{ booking.destination }} | Ghế:
        {{ booking.seat_number }}
      </li>
    </ul>
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
</template>

<script>
import axios from 'axios'

export default {
  name: 'History',
  data() {
    return {
      bookings: [],
    }
  },
  mounted() {
    axios
      .get('http://localhost:3000/api/bookings')
      .then((res) => {
        this.bookings = res.data
      })
      .catch((err) => {
        console.error('Lỗi khi tải bookings:', err)
      })
  },
}
</script>
