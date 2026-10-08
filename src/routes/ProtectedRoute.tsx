import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

export default function ProtectedRoute(){
    const isAuthenticated = useSelector((state:any) => state.authMemory.isAuthenticated);
    if(!isAuthenticated){
        return <Navigate to="/login" replace />;
    }
    return <Outlet />;
}