import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";


const RequireAuth = ({ allowedRoles }) => {
  const { auth } = useAuth();
  const location = useLocation();
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
        const timeoutId = setTimeout(() => {
          setShouldRender(true);
        }, 1);
        console.log("require auth works")
        return () => {
          clearTimeout(timeoutId);
        };
      }, []);

  const returnObject = () => {
    
    return (isRoleAllowed ? ( 
      <Outlet />
    ) : auth?.user ? (
      <Navigate to="/unauthorized" state={{ from: location }} replace />
    ) : (
      <Navigate to="/login" state={{ from: location }} replace />
    ))
  }
  const isRoleAllowed = allowedRoles?.includes(auth?.roles);

  return ( shouldRender && returnObject() );
};

export default RequireAuth;
