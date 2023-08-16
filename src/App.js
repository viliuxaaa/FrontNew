import { Route, Routes } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import Login from "./Screens/Login";
import NotFound from "./Screens/NotFound";
import Register from "./Screens/Register";
import Posters from "./Screens/Posters";
import UploadPoster from "./Screens/UploadPoster";
import Demo from "./Screens/DeadPages/Demo";
import Dashboard from "./Screens/Dashboard/Admin/Dashboard";
import SkelbimuList from "./Screens/Dashboard/Admin/SkelbimuList";
import Favorites from "./Screens/Dashboard/Favorites";
import Password from "./Screens/Dashboard/Password";
import SinglePoster from "./Screens/SinglePoster";
import RequireAuth from './Components/RequireAuth';
import AOS from 'aos';
import Faq from "./Screens/DeadPages/Faq";
import Rules from "./Screens/DeadPages/Rules";
import Privacy from "./Screens/DeadPages/Privacy";
import Contacts from "./Screens/DeadPages/Contacts";
import Users from "./Screens/Dashboard/Admin/Users";

function App() {
  AOS.init();
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
      
      <Route path="/duk" element={<Faq />} />
      <Route path="/taisykles" element={<Rules />} />
      <Route path="/politika" element={<Privacy />} />
      <Route path="/kontaktai" element={<Contacts />} />
      
      <Route element={<RequireAuth allowedRoles={['ADMIN', 'MANAGER', 'USER']} />}>
        <Route path="/upload" element={<UploadPoster />} />
        <Route path="/edit/:id" element={<UploadPoster />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/password" element={<Password />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/manoskelbimai/:id" element={<SkelbimuList />} />
      </Route>
      <Route element={<RequireAuth allowedRoles={['ADMIN', 'MANAGER']} />}>
        <Route path="/skelbimulist" element={<SkelbimuList />} />
      </Route>
      <Route element={<RequireAuth allowedRoles={['ADMIN']} />}>
        <Route path="/userslist" element={<Users />} />
      </Route>

      <Route path="/demo" element={<Demo />} /> 
    </Routes>
  );
}

export default App;
