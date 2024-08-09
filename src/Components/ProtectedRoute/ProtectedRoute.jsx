import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  if (localStorage.getItem("tKn") == null) {
    return (
      <>
      <Navigate to="/ecommerce-route/Login"/>
       </>    
    );
  }
  return <>{children}</>;
}
