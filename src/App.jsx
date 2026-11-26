import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import VideoSlider from "./components/VideoSlider";
import PhotoSlider from "./components/PhotoSlider";
import Footer from "./components/Footer";

import ProfilePage from "./pages/ProfilePage";
import { siteContent } from "./data/siteContent";

import "./App.css";

function Home() {
  return (
    <>
      <VideoSlider />
      <PhotoSlider />
    </>
  );
}

function App() {
  return (
    <div className="app">

      <Navbar />

      <main>
        <Routes>

          <Route path="/" element={<Home />} />

          <Route
            path="/:page"
            element={<ProfilePage />}
          />

          <Route
            path="*"
            element={
              <div className="not-found">
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <p>The page you are looking for does not exist.</p>
                <a href="/">Return Home</a>
              </div>
            }
          />

        </Routes>
      </main>

      <Footer />

    </div>
  );
}

export default App;
