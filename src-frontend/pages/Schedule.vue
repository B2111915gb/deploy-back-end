<template>
  <div class="container mt-5">
    <h2 class="mb-4">Tìm tuyến xe</h2>

    <!-- Bộ lọc tìm kiếm -->
    <div class="row mb-4">
      <div class="col-md-3">
        <select v-model="search.departure_id" class="form-control">
          <option value="">Chọn điểm đi</option>
          <option v-for="point in departurePoints" :key="point.id" :value="point.id">
            {{ point.name }}
          </option>
        </select>
      </div>
      <div class="col-md-3">
        <select v-model="search.destination_id" class="form-control">
          <option value="">Chọn điểm đến</option>
          <option v-for="point in destinationPoints" :key="point.id" :value="point.id">
            {{ point.name }}
          </option>
        </select>
      </div>
      <div class="col-md-3">
        <input
          v-model="search.departure_date"
          type="date"
          class="form-control"
          placeholder="Ngày khởi hành"
        />
      </div>
      <div class="col-md-3">
        <button class="btn btn-primary w-100" @click="searchRoutes">
          <i class="fas fa-search"></i> Tìm kiếm
        </button>
      </div>
    </div>

    <!-- Loading state -->
    <div v-if="loading" class="text-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Đang tải...</span>
      </div>
    </div>

    <!-- Bảng kết quả -->
    <div v-else>
      <div class="mb-3">
        <small class="text-muted"> Tìm thấy {{ filteredRoutes.length }} tuyến xe </small>
      </div>

      <table class="table table-striped table-hover">
        <thead class="table-dark">
          <tr>
            <th>Điểm đi</th>
            <th>Điểm đến</th>
            <th>Thời gian khởi hành</th>
            <th>Thời gian di chuyển</th>
            <th>Giá vé</th>
            <th>Ghế trống</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="route in filteredRoutes" :key="route.id">
            <td>{{ getDeparturePointName(route.departure_id) }}</td>
            <td>{{ getDestinationPointName(route.destination_id) }}</td>
            <td>{{ formatDateTime(route.departure_time) }}</td>
            <td>{{ route.duration_hours }} giờ</td>
            <td>{{ formatPrice(route.price) }}</td>
            <td>
              <span
                class="badge"
                :class="
                  route.available_seats > 10
                    ? 'bg-success'
                    : route.available_seats > 5
                      ? 'bg-warning'
                      : 'bg-danger'
                "
              >
                {{ route.available_seats }} ghế
              </span>
            </td>
            <td>
              <button
                class="btn btn-success btn-sm"
                :disabled="route.available_seats === 0"
                @click="bookTicket(route)"
              >
                {{ route.available_seats === 0 ? 'Hết ghế' : 'Đặt vé' }}
              </button>
            </td>
          </tr>
          <tr v-if="filteredRoutes.length === 0">
            <td colspan="7" class="text-center text-muted">
              {{
                hasSearched
                  ? 'Không tìm thấy tuyến xe phù hợp'
                  : 'Nhập thông tin tìm kiếm để xem kết quả'
              }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

<div v-if="departureLoading" class="text-muted small">Đang tải điểm đi...</div>
<div v-if="departureError" class="text-danger small">Lỗi tải điểm đi</div>

  <!-- Footer -->
  <footer class="footer mt-5">
    <div class="container">
      <div class="row">
        <!-- Company Info -->
        <div class="col-lg-3 col-md-6 mb-4">
          <div class="footer-logo">
            <h3 class="text-orange fw-bold">BẢO BÌNH Bus</h3>
            <p class="text-muted">Chất lượng là danh dự</p>
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
          <p class="text-muted mb-3">Đặt vé nhanh chóng, tiện lợi</p>
          <div class="download-apps">
            <img
              src="https://via.placeholder.com/140x40/333/fff?text=App+Store"
              alt="Download on App Store"
              class="img-fluid"
            />
            <img
              src="https://via.placeholder.com/140x40/333/fff?text=Google+Play"
              alt="Get it on Google Play"
              class="img-fluid"
            />
          </div>

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
            <p>© 2024 BẢO BÌNH Bus Lines. Tất cả quyền được bảo lưu.</p>
          </div>
          <div class="col-md-6 text-md-end">
            <p>GPKD số: 0123456789 - Ngày cấp: 01/01/2000</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useQuery } from '@tanstack/vue-query'
import { useRouter } from 'vue-router'
import api from '../utils/api'

const router = useRouter()

const routes = ref([])
const loading = ref(false)
const hasSearched = ref(false)

const search = ref({
  departure_id: '',
  destination_id: '',
  departure_date: '',
})

// Fetch departure points
const {
  data: departurePointsData,
  isLoading: departureLoading,
  error: departureError,
} = useQuery({
  queryKey: ['departure-points'],
  queryFn: async () => {
    const res = await api.get('/departure-points')
    return res.data.data || []
  },
})

const departurePoints = computed(() => departurePointsData.value || [])

// Fetch destination points (có thể tương tự departure points hoặc API khác)
const {
  data: destinationPointsData,
} = useQuery({
  queryKey: ['destination-points'],
  queryFn: async () => {
    try {
      const res = await api.get('/destination-points')
      return res.data.data || []
    } catch {
      return departurePoints.value
    }
  },
})

const destinationPoints = computed(() => destinationPointsData.value || [])

// Search routes using API
const searchRoutes = async () => {
  if (!search.value.departure_id || !search.value.destination_id) {
    alert('Vui lòng chọn điểm đi và điểm đến')
    return
  }

  loading.value = true
  hasSearched.value = true

  try {
    const params = {}

if (search.value.departure_id) {
  params.departure_id = search.value.departure_id
}

if (search.value.destination_id) {
  params.destination_id = search.value.destination_id
}

if (search.value.departure_date) {
  params.departure_date = search.value.departure_date
}

    const res = await api.get('/routes/search', { params })
    routes.value = res.data.data?.routes || res.data.data || []
  } catch (error) {
    console.error('Error searching routes:', error)
    routes.value = []
  } finally {
    loading.value = false
  }
}

// Computed để filter routes (nếu cần filter thêm ở client-side)
const filteredRoutes = computed(() => {
  return routes.value
})

// Helper functions
const getDeparturePointName = (id) => {
  const point = departurePoints.value.find((p) => p.id == id)
  return point ? point.name : 'N/A'
}

const getDestinationPointName = (id) => {
  const point = destinationPoints.value.find((p) => p.id == id)
  return point ? point.name : 'N/A'
}

const formatPrice = (price) => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(price)
}

const formatDateTime = (dateTime) => {
  return new Date(dateTime).toLocaleString('vi-VN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  })
}

const bookTicket = (route) => {
  // Navigate to booking page with route data
  router.push({
    name: 'booking', // Tên route của trang đặt vé
    params: { routeId: route.id },
    query: {
      departure: getDeparturePointName(route.departure_id),
      destination: getDestinationPointName(route.destination_id),
      price: route.price,
      departure_time: route.departure_time,
    },
  })
}

// ===== 👇 PHẦN MỚI: Real-time cập nhật số ghế qua SSE =====
let eventSource = null

const connectSSE = () => {
  const baseURL = api.defaults.baseURL || 'http://localhost:3000/api'
  eventSource = new EventSource(`${baseURL}/routes/stream`)

  eventSource.addEventListener('seat-update', (e) => {
    const payload = JSON.parse(e.data)
    const route = routes.value.find((r) => r.id === payload.route_id)
    if (route) {
      route.available_seats = payload.available_seats
    }
  })

  eventSource.onerror = () => {
    console.warn('Mất kết nối SSE, trình duyệt sẽ tự động thử kết nối lại...')
  }
}

onMounted(() => {
  loadRoutes()
  connectSSE()
})

onBeforeUnmount(() => {
  eventSource?.close()
})

const loadRoutes = async () => {
  loading.value = true

  try {
    const res = await api.get('/routes')
    routes.value = res.data.data || []
  } catch (err) {
    console.error(err)
  } finally {
    loading.value = false
  }
}
// ===== hết phần mới =====

search.value.departure_date = ''
</script>

<style scoped>
.text-orange {
  color: #ff6b35;
}

.footer {
  background-color: #2c3e50;
  color: white;
  padding: 40px 0 20px;
}

.footer h5 {
  color: #ff6b35;
  margin-bottom: 20px;
}

.footer ul li {
  margin-bottom: 8px;
}

.footer ul li a {
  color: #bdc3c7;
  text-decoration: none;
  transition: color 0.3s;
}

.footer ul li a:hover {
  color: #ff6b35;
}

.contact-info i {
  color: #ff6b35;
  margin-right: 8px;
  width: 20px;
}

.download-apps img {
  margin-right: 10px;
  margin-bottom: 10px;
}

.social-icons a {
  color: #bdc3c7;
  font-size: 24px;
  margin-right: 15px;
  transition: color 0.3s;
}

.social-icons a:hover {
  color: #ff6b35;
}

.footer-bottom {
  border-top: 1px solid #34495e;
  margin-top: 30px;
  padding-top: 20px;
}

.badge {
  font-size: 0.8em;
}

.spinner-border {
  color: #ff6b35;
}
</style>
