import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';

const RequireAuth = ({ allowedRoles }) => {
  const { auth, setAuth } = useAuth();
  const location = useLocation();
  const [shouldRender, setShouldRender] = useState(false);
  const expiresAt = Cookies.get('expire');

  useEffect(() => {

    if( Date.now() > +expiresAt ){
      setAuth({});
    }
    const timeoutId = setTimeout(() => {
      setShouldRender(true);
    }, 1);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [location]);

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
