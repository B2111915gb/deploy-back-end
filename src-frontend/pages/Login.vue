<template>
  <div class="login-page">
    <!-- Header -->
    <div class="header">
      <div class="container">
        <div class="logo-section">
          <div class="logo"></div>
        </div>
      </div>
    </div>

    <!-- Main Login Form -->
    <div class="main-content">
      <div class="login-container">
        <div class="login-card">
          <h2 class="login-title">Đăng nhập tài khoản</h2>

          <!-- Tab Navigation -->
          <div class="tab-navigation">
            <button class="tab-btn active">
              <i class="fas fa-sign-in-alt"></i>
              ĐĂNG NHẬP
            </button>
            <button class="tab-btn" @click="goToRegister">ĐĂNG KÝ</button>
          </div>

          <!-- Login Form -->
          <div class="form-content">
            <div class="input-group">
              <i class="fas fa-envelope input-icon"></i>
              <input v-model="email" type="email" placeholder="Nhập email" class="form-input" />
            </div>

            <div class="input-group">
              <i class="fas fa-lock input-icon"></i>
              <input
                v-model="password"
                type="password"
                placeholder="Nhập mật khẩu"
                class="form-input"
              />
              <i class="fas fa-eye-slash password-toggle"></i>
            </div>

            <button @click="login" class="login-btn">Đăng nhập</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="footer">
      <h3 class="footer-title">Kết nối BẢO BÌNH Group</h3>
      <p class="footer-text">
        Đa dạng hệ sinh thái BẢO BÌNH Group qua App BẢO BÌNH: mua vé xe BẢO BÌNH, Xe Hợp Đồng, Xe
        Buýt, Giao hàng...
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import api from '../utils/api'
import { useRouter } from 'vue-router'
import { useAuthStore } from "@/stores/auth.store";


const email = ref('')
const password = ref('')
const router = useRouter()
const authStore = useAuthStore();
const login = async () => {
  try {
    const res = await api.post('/auth/login', {
      email: email.value,
      password: password.value,
    })
authStore.login(res.data.token);
    alert('Đăng nhập thành công!')
    router.push('/home')
  } catch (err) {
    alert('Sai email hoặc mật khẩu!')
  }
}

const goToRegister = () => {
  router.push('/register')
}
</script>

<style scoped>
/* Toàn bộ phần CSS bạn đã viết ở trang 2 vẫn giữ nguyên */
.login-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #ff6200 0%, #ff8533 100%);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* ... giữ nguyên phần style như bạn đã có (header, container, login-card, tab-btn...) */

.header {
  background-color: #ff6200;
  padding: 15px 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.logo {
  display: flex;
  align-items: center;
  color: white;
}

.logo i {
  font-size: 2rem;
  margin-right: 10px;
}

.brand-name {
  font-size: 1.5rem;
  font-weight: bold;
}

.brand-slogan {
  color: white;
  font-size: 0.9rem;
  margin: 5px 0 0 0;
  opacity: 0.9;
}

.btn-auth {
  background: white;
  color: #ff6200;
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
}

.btn-auth:hover {
  background: #f8f9fa;
  transform: translateY(-2px);
}

.main-content {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 200px);
  padding: 40px 20px;
}

.login-container {
  width: 100%;
  max-width: 450px;
}

.login-card {
  background: white;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.login-title {
  text-align: center;
  color: #333;
  margin-bottom: 30px;
  font-size: 1.8rem;
  font-weight: 600;
}

.tab-navigation {
  display: flex;
  margin-bottom: 30px;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #e9ecef;
}

.tab-btn {
  flex: 1;
  padding: 15px;
  border: none;
  background: #f8f9fa;
  color: #666;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.tab-btn.active {
  background: #ff6200;
  color: white;
}

.tab-btn:hover:not(.active) {
  background: #e9ecef;
}

.form-content {
  space-y: 20px;
}

.input-group {
  position: relative;
  margin-bottom: 20px;
}

.input-icon {
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #999;
  font-size: 1.1rem;
}

.form-input {
  width: 100%;
  padding: 15px 15px 15px 45px;
  border: 2px solid #e9ecef;
  border-radius: 10px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  box-sizing: border-box;
}

.form-input:focus {
  outline: none;
  border-color: #ff6200;
}

.form-input::placeholder {
  color: #999;
}

.password-toggle {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #999;
  cursor: pointer;
  font-size: 1.1rem;
}

.login-btn {
  width: 100%;
  padding: 15px;
  background: #ff6200;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;
}

.login-btn:hover {
  background: #e55a00;
  transform: translateY(-2px);
}

.footer {
  background: rgba(255, 255, 255, 0.1);
  text-align: center;
  padding: 30px 20px;
  color: white;
}

.footer-title {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #28a745;
  font-weight: bold;
}

.footer-text {
  font-size: 1rem;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
  opacity: 0.9;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    gap: 15px;
  }

  .login-card {
    padding: 30px 20px;
    margin: 0 10px;
  }

  .login-title {
    font-size: 1.5rem;
  }

  .tab-btn {
    padding: 12px;
    font-size: 0.9rem;
  }
}
</style>
