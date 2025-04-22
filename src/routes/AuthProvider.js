// src/contexts/AuthContext.js
import { createContext, useState, useContext, useEffect } from "react";
import { yoloExecAPI } from "../services/yoloExecApi";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyUser = async () => {
      const token = Cookies.get("token");

      if (token) {
        const [error, data] = await yoloExecAPI({
          url: "api/auth/profile",
        });
        console.log(error, data);
        if (data) {
          setUser(data.description);
        } else {
          logout();
          alert("Phiên đăng nhập đã hết hạn, vui lòng đăng nhập lại.");
        }
      }

      setLoading(false);
    };

    verifyUser();
  }, []);

  const login = async (user) => {
    try {
      const [error, data] = await yoloExecAPI({
        method: "POST",
        url: "api/auth/login",
        data: user,
      });

      if (error) {
        const err =
          error.status === 401
            ? "Phiên đăng nhập hết hạn, vui lòng đăng nhập lại."
            : error?.data?.description;

        return { success: false, message: err };
      }

      Cookies.set("token", data.description.token, { expires: 1 });
      Cookies.set("refreshToken", data.description.refreshToken, {
        expires: 7,
      });
      setUser(data.description);

      return { success: true, message: "Đăng nhập thành công." };
    } catch (error) {
      return { success: false, message: "Lỗi hệ thống khi đăng nhập." };
    }
  };

  const logout = () => {
    Cookies.remove("token");
    Cookies.remove("refreshToken");
    setUser(null);
    navigate("/login", { replace: true });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
