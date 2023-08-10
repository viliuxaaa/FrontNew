import { Route, Routes } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import Login from "./Screens/Login";
import NotFound from "./Screens/NotFound";
import Register from "./Screens/Register";
import Posters from "./Screens/Posters";
import UploadPoster from "./Screens/UploadPoster";
import Demo from "./Screens/Demo";
import Dashboard from "./Screens/Dashboard/Admin/Dashboard";
import SkelbimuList from "./Screens/Dashboard/Admin/SkelbimuList";
import Profile from "./Screens/Dashboard/Profile";
import Favorites from "./Screens/Dashboard/Favorites";
import Password from "./Screens/Dashboard/Password";
import SinglePoster from "./Screens/SinglePoster";
import RequireAuth from './Components/RequireAuth';
import Aos from 'aos';

function App() {
  Aos.init();
  return (
    <Routes>
      <Route path="/posters/search/" element={<Posters />} />
      <Route path="/posters/search/:searchType" element={<Posters />} />
      {/*  PUBLIC ROUTES */}
      <Route path="/posters" element={<Posters />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path='/' element={<HomeScreen />} />
      <Route path='*' element={<NotFound />} />
      <Route path="/skelbimas/:id" element={<SinglePoster />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/skelbimulist" element={<SkelbimuList />} />
      
      <Route element={<RequireAuth allowedRoles={['ADMIN', 'MANAGER', 'USER']} />}>
        <Route path="/upload" element={<UploadPoster />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/password" element={<Password />} />
        <Route path="/profile" element={<Profile />} />
        
        
      </Route>

      <Route path="/demo" element={<Demo />} /> 
    </Routes>
  );
}

export default App;
