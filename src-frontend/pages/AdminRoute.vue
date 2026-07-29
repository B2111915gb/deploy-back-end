<template>
  <div>
    <h2>Quản lý tuyến xe</h2>

    <form @submit.prevent="submitRoute">
      <input v-model="form.departure_id" placeholder="Điểm đi ID" />
      <input v-model="form.destination_id" placeholder="Điểm đến ID" />
      <input v-model="form.bus_type_id" placeholder="Loại xe ID" />
      <input v-model="form.departure_time" type="datetime-local" />
      <input v-model="form.duration_hours" type="number" step="0.1" placeholder="Thời gian (giờ)" />
      <input v-model="form.price" type="number" placeholder="Giá vé" />
      <input v-model="form.available_seats" type="number" placeholder="Số ghế trống" />
      <button type="submit">{{ editingId ? 'Cập nhật' : 'Thêm mới' }}</button>
      <button @click="resetForm" type="button" v-if="editingId">Hủy</button>
    </form>

    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Điểm đi</th>
          <th>Điểm đến</th>
          <th>Thời gian</th>
          <th>Hành động</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="r in routes" :key="r.id">
          <td>{{ r.id }}</td>
          <td>{{ r.departure_id }}</td>
          <td>{{ r.destination_id }}</td>
          <td>{{ r.departure_time }}</td>
          <td>
            <button @click="editRoute(r)">Sửa</button>
            <button @click="deleteRoute(r.id)">Xóa</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import api from '../utils/api';

const routes = ref([]);
const editingId = ref(null);
const form = ref({
  departure_id: '',
  destination_id: '',
  bus_type_id: '',
  departure_time: '',
  duration_hours: '',
  price: '',
  available_seats: ''
});

const loadRoutes = async () => {
  const res = await api.get('/routes/search');
  routes.value = res.data.data.routes;
};

const submitRoute = async () => {
  if (editingId.value) {
    await api.put(`/routes/${editingId.value}`, form.value);
    alert('Cập nhật thành công!');
  } else {
    await api.post('/routes', form.value);
    alert('Thêm tuyến mới thành công!');
  }
  resetForm();
  loadRoutes();
};

const editRoute = (r) => {
  editingId.value = r.id;
  form.value = { ...r };
};

const deleteRoute = async (id) => {
  if (confirm('Bạn chắc chắn muốn xóa?')) {
    await api.delete(`/routes/${id}`);
    alert('Đã xóa');
    loadRoutes();
  }
};

const resetForm = () => {
  editingId.value = null;
  form.value = {
    departure_id: '',
    destination_id: '',
    bus_type_id: '',
    departure_time: '',
    duration_hours: '',
    price: '',
    available_seats: ''
  };
};

onMounted(loadRoutes);
</script>
