// src/services/api.js

//RushiStackTech.in

import axios from "axios";

const api = axios.create({
  //Envornment File Integration DB Secure
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 15000,
});

// ============================================================
// PRODUCTS.........
// ============================================================

export const productsAPI = {
  getAll: (params) => api.get("/products", { params }),

  getOne: (id) => api.get(`/products/${id}`),
};

// ============================================================
// CATEGORIES//
// ============================================================

export const categoriesAPI = {
  getAll: () => api.get("/categories"),
};

// ============================================================
// MAINTENANCE//
// ============================================================

export const maintenanceAPI = {
  get: () => api.get("/maintenance"),

  validatePreview: (token) =>
    api.post("/maintenance/preview/validate", {
      token,
    }),
};

export default api;
