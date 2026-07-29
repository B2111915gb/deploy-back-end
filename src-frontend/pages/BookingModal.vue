<template>
  <div class="modal">
    <h3>Đặt vé</h3>
    <input v-model="name" placeholder="Tên hành khách" />
    <input v-model="phone" placeholder="SĐT" />
    <button @click="book">Xác nhận</button>
    <button @click="$emit('close')">Hủy</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useAuthStore } from '@/stores/auth.store';

const props = defineProps(['route']);
const name = ref('');
const phone = ref('');
const authStore = useAuthStore();

// Giải mã payload JWT (chỉ đọc, không xác thực chữ ký ở client -
// server vẫn tự verify token riêng khi cần)
const parseJwt = (token) => {
  try {
    const payload = token.split('.')[1];
    return JSON.parse(atob(payload));
  } catch {
    return null;
  }
};

const book = async () => {
  if (!authStore.isLoggedIn) {
    alert('Vui lòng đăng nhập trước khi đặt vé');
    return;
  }

  const decoded = parseJwt(authStore.token);
  const user_id = decoded?.userId;

  if (!user_id) {
    alert('Phiên đăng nhập không hợp lệ, vui lòng đăng nhập lại');
    return;
  }

  try {
    await axios.post('http://localhost:3000/api/bookings', {
      user_id,
      route_id: props.route.id,
      seat_number: 1,
      booking_date: new Date().toISOString().slice(0, 10),
      passenger_name: name.value,
      passenger_phone: phone.value,
    });
    alert('Đặt vé thành công');
    window.location.reload();
  } catch (err) {
    const message = err.response?.data?.message || 'Đặt vé thất bại';
    alert(message);
  }
};
</script>