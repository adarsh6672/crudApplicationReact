import { UseDispatch , useSelector } from "react-redux";
import AuthSlice from "../Redux/Slice/AuthSlice";
import { Navigate, Route } from "react-router-dom";

export const PrivateRoute = ({children}) => {
    const isAuthenticated = useSelector(state=>state.auth.isLogin);
    console.log('authentication : ',isAuthenticated)
    
        if(!isAuthenticated) {
            return <Navigate to='/'/>;
        }else {
            return children
        }
    
      return (
        <div>ProtectedRout</div>
      )
}
