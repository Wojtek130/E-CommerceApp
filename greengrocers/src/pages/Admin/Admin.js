import React from 'react';
import { useNavigate } from "react-router-dom";

const Admin = () => {
    const navigate = useNavigate();
    navigate("localhost:3001/admin");
    return (
        <div>
            Admin
        </div>
    );
};

export default Admin;