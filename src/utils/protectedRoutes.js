import React from "react";

import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const user = localStorage.getItem("dataUser");
  if (user) {
    return true;
  } else {
    return false;
  }
};

const ProtectedRoutes = () => {
  const auth = useAuth();

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;

// metode ini menggunakan library NAVIGATE dan OUTLET dari react router dom
// localStorage.getItem adalah fungsi yang tertera pada navigate atau library react router dom
// ('dataUser') adalah nama database atau data yang di simpan sementara pada local storage web atau browser
