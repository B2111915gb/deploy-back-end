<template>
  <div>
    <h2>Toàn bộ đơn đặt vé</h2>
    <table>
      <thead>
        <tr>
          <th>Hành khách</th>
          <th>Điện thoại</th>
          <th>Ngày đặt</th>
          <th>Tuyến xe</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="b in bookings" :key="b.id">
          <td>{{ b.passenger_name }}</td>
          <td>{{ b.passenger_phone }}</td>
          <td>{{ b.booking_date }}</td>
          <td>{{ b.route_id }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import api from '../utils/api';

const bookings = ref([]);

onMounted(async () => {
  try {
    const res = await api.get('/bookings/all'); // route dành cho admin
    bookings.value = res.data.data;
  } catch (err) {
    alert('Bạn không có quyền hoặc chưa đăng nhập!');
  }
});
</script>
