<template>
  <div>
    <header class="main-header">
      <div class="header-container">
        <div class="logo-section">
          <div class="logo-icon">🚌</div>
          <div class="logo-text">
            <span class="brand-name">Bao Binh</span>
            <span class="brand-type">Bus Lines</span>
          </div>
        </div>

        <nav class="main-navigation">
          <router-link to="/home" class="nav-item" active-class="active"> TRANG CHỦ </router-link>
          <router-link to="/schedule" class="nav-item" active-class="active">
            LỊCH TRÌNH
          </router-link>
          <router-link to="/history" class="nav-item" active-class="active">
            LỊCH SỬ ĐẶT VÉ
          </router-link>
          <router-link to="/contact" class="nav-item" active-class="active"> LIÊN HỆ </router-link>
          <router-link to="/about" class="nav-item" active-class="active">
            VỀ CHÚNG TÔI
          </router-link>
        </nav>

        <div class="user-actions">
          <span v-if="token" class="user-info">
            <button @click="logout" class="logout-btn">
              <i class="fas fa-sign-out-alt"></i>
              Đăng xuất
            </button>
          </span>
          <span v-else class="auth-links">
            <router-link to="/login" class="login-btn">
              <i class="fas fa-user"></i>
              Đăng nhập/Đăng ký
            </router-link>
          </span>
        </div>
      </div>
    </header>

    <router-view />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { getToken, removeToken, TOKEN_CHANGE_EVENT_NAME } from './utils/auth'
import { useRouter } from 'vue-router'

const router = useRouter()
const token = ref(null)

onMounted(() => {
  token.value = getToken()
})


const handleTokenChange = (e) => {
  token.value = e.detail
}

onMounted(() => {
  window.addEventListener(TOKEN_CHANGE_EVENT_NAME, handleTokenChange)
})

onBeforeUnmount(() => {
  window.removeEventListener(TOKEN_CHANGE_EVENT_NAME, handleTokenChange)
})

const logout = () => {
  removeToken()
  router.push('/login')
}
</script>

<style scoped>
/* Font Import */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');

/* Main Header */
.main-header {
  background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  font-family: 'Roboto', sans-serif;
  animation: slideDown 0.5s ease-out;
  padding: 12px 0;
}

@keyframes slideDown {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: transform 0.3s ease;
  flex-shrink: 0;
}

.logo-section:hover {
  transform: scale(1.05);
}

.logo-icon {
  font-size: 2.5rem;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3));
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-5px);
  }
  60% {
    transform: translateY(-3px);
  }
}

.logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.brand-name {
  font-size: 1.8rem;
  font-weight: 700;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.brand-type {
  font-size: 0.9rem;
  font-weight: 500;
  color: #fff3e0;
  letter-spacing: 1px;
}

/* Navigation (Center) */
.main-navigation {
  display: flex;
  align-items: center;
  gap: 25px;
  padding: 0 15px;
  flex-grow: 1;
  justify-content: center;
}

.nav-item {
  color: white;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  padding: 8px 14px;
  border-radius: 25px;
  transition: all 0.3s ease;
  position: relative;
  letter-spacing: 0.5px;
  white-space: nowrap;
}

.nav-item:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.nav-item.active {
  background: rgba(255, 255, 255, 0.3);
  font-weight: 700;
}

.nav-item::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 50%;
  width: 0;
  height: 2px;
  background: white;
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-item:hover::after,
.nav-item.active::after {
  width: 80%;
}

/* User Actions (Right) */
.user-actions {
  display: flex;
  align-items: center;
  gap: 15px;
  flex-shrink: 0;
}

.logout-btn,
.login-btn {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  padding: 8px 20px;
  border-radius: 25px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  white-space: nowrap;
}

.logout-btn:hover,
.login-btn:hover {
  background: white;
  color: #ff6b35;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .main-navigation {
    gap: 15px;
  }

  .nav-item {
    font-size: 0.9rem;
    padding: 6px 10px;
  }
}

@media (max-width: 768px) {
  .header-container {
    flex-direction: column;
    gap: 15px;
    padding: 10px 20px;
  }

  .main-navigation {
    order: 3;
    width: 100%;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    padding: 10px 0 0;
  }

  .logo-section {
    align-self: flex-start;
  }

  .user-actions {
    position: absolute;
    right: 20px;
    top: 15px;
  }

  .brand-name {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .main-navigation {
    gap: 8px;
  }

  .nav-item {
    font-size: 0.8rem;
    padding: 5px 8px;
  }

  .logout-btn,
  .login-btn {
    padding: 6px 12px;
    font-size: 0.8rem;
  }
}
</style>
