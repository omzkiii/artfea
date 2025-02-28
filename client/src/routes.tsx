import { Routes, Route } from "react-router";
import App from "./App.tsx";
import Gallery from "./pages/Gallery.tsx";
import About from "./pages/About.tsx";
import Nav from "./components/nav.tsx";
import Art from "./components/art.tsx";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<App />} />
        <Route path="gallery">
          <Route index element={<Gallery />} />
          <Route path=":id" element={<Art />} />
        </Route>
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
