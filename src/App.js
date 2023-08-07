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
import SinglePoster from "./Components/PosterMinDetail";

function App() {
  return (
    <Routes>
      <Route path="/posters" element={<Posters />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path='/' element={<HomeScreen />} />
      <Route path='*' element={<NotFound />} />
      <Route path="/upload" element={<UploadPoster />} />
      <Route path="/skelbimas/:id" element={<SinglePoster />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/skelbimulist" element={<SkelbimuList />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/password" element={<Password />} />
      <Route path="/demo" element={<Demo />} />
    </Routes>
  );
}

export default App;
