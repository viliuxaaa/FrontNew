import { Route, Routes } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import Login from "./Screens/Login";
import NotFound from "./Screens/NotFound";
import Register from "./Screens/Register";
import Posters from "./Screens/Posters";
import UploadPoster from "./Screens/UploadPoster";
import ViewPoster from "./Screens/ViewPoster";
import Demo from "./Screens/Demo";

function App() {
  return (
    <Routes>
      <Route path="/posters" element={<Posters />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path='/' element={<HomeScreen />} />
      <Route path='*' element={<NotFound />} />
      <Route path="/upload" element={<UploadPoster />} />
      <Route path="/view" element={<ViewPoster />} />
      <Route path="/demo" element={<Demo />} />
    </Routes>
  );
}

export default App;
