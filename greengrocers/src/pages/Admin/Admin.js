import { React, useEffect } from "react";
import { useNavigate, useResolvedPath, redirect } from "react-router-dom";

const Admin = () => {
  useEffect(() => {
    window.location.href = "http://localhost:3001/admin";
  }, []);
  return <div>Admin</div>;
};

export default Admin;
