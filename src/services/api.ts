import axios from 'axios';
import { toast } from 'react-hot-toast';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.message || 'An error occurred';
    toast.error(message);
    return Promise.reject(error);
  }
);

export const shipmentService = {
  track: async (trackingNumber: string) => {
    const response = await api.get(`/shipments/track/${trackingNumber}`);
    return response.data;
  },
  
  requestQuote: async (quoteData: QuoteRequest) => {
    const response = await api.post('/quotes', quoteData);
    return response.data;
  }
};

export const contactService = {
  submit: async (contactData: ContactForm) => {
    const response = await api.post('/contact', contactData);
    return response.data;
  }
}; 