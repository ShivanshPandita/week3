import "./output.css";
import LoginComponent from "./Routes/Login";
import SignupComponent from "./Routes/Signup";
import HomeComponent from "./Routes/Home";
import LoggedinHomeComponent from "./Routes/LoggedinHome";
import MyMusicComponent from "./Routes/MyMusic";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import UploadSongComponent from "./Routes/UploadSong";
import songContext from "./contexts/songContext";
import { useState } from "react";
import SearchComponent from "./Routes/Search";

function App() {
  const [cookie, setCookie] = useCookies(["token"]);
  const [currentSong, setCurrentSong] = useState(null);
  const [soundPlayed, setSoundPlayed] = useState(null);
  const [isPaused, setIsPaused] = useState(true);
  console.log(cookie.token);
  return (
    <div className="w-screen h-screen font-poppins">
      <BrowserRouter>
        {cookie.token ? (
          //login routes
          <songContext.Provider
            value={{
              currentSong,
              setCurrentSong,
              soundPlayed,
              setSoundPlayed,
              isPaused,
              setIsPaused,
            }}
          >
            <Routes>
              <Route path="/" element={<Hellocomp />} />
              <Route path="/home" element={<LoggedinHomeComponent />} />
              <Route path="/uploadSongs" element={<UploadSongComponent />} />
              <Route path="/MyMusic" element={<MyMusicComponent />} />
              <Route path="/Search" element={<SearchComponent />} />
              <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
          </songContext.Provider>
        ) : (
          //logout routes
          <Routes>
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/home" element={<HomeComponent />} />
            <Route path="/signup" element={<SignupComponent />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}
const Hellocomp = () => {
  return <div>hello from comp</div>;
};

export default App;
