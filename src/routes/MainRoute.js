import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import MainLayout from "../components/layout/MainLayout";
import Student from "../pages/Student/Student";
import { AuthProvider } from "./AuthProvider";
import QueryTest from "../pages/QueryTest/QueryTest";

const MainRoute = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/test" element={<QueryTest />} />

          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <Navigate to="/login" replace />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <MainLayout />
              </PrivateRoute>
            }
          >
            <Route path="student" element={<Student />} />
          </Route>

          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default MainRoute;
