import axios from 'axios';


const apiClient = axios.create({
    baseURL: 'http://localhost:5000',
    // Other configurations, if needed
  });

  export default {
    getUser(id) {
      return apiClient.get(`/users/${id}`);
    },
    getOrder(id) {
        return apiClient.get(`/orders/${id}`);
    },
    getOrders() {
        return apiClient.get(`/orders/get_orders`);
    },
    // Other API methods
  };
  