import spotify_logo from "../../../assets/images/spotify_logo.svg";
import IconText from "../IconText";
import Hovertext from "../HoverText";
import { useCookies } from "react-cookie";
import {
  Children,
  useState,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
} from "react";
import { Howl, Howler } from "howler";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import songContext from "../../../contexts/songContext";

const LoggedinHomeContainer = ({ children, ActiveScreen }) => {
  const [, , removeCookie] = useCookies(["token"]);
  const navigate = useNavigate();

  const {
    currentSong,
    setCurrentSong,
    soundPlayed,
    setSoundPlayed,
    isPaused,
    setIsPaused,
  } = useContext(songContext);
  console.log(currentSong);

  const changeSong = (songsrc) => {
    if (soundPlayed) {
      soundPlayed.stop();
    }
    let sound = new Howl({
      src: [songsrc],
      html5: true,
    });
    setSoundPlayed(sound);
    sound.play();
    setIsPaused(false);
  };

  const firstUpdate = useRef(true);

  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    if (!currentSong) {
      return;
    }
    changeSong(currentSong.track);
  }, [currentSong && currentSong.track]);

  const playSound = () => {
    if (!soundPlayed) {
      return;
    }
    soundPlayed.play();
  };

  const pauseSound = () => {
    soundPlayed.pause();
  };

  const togglePlayPause = () => {
    if (isPaused) {
      playSound();
      setIsPaused(false);
    } else {
      pauseSound();
      setIsPaused(true);
    }
  };

  const logout = () => {
    removeCookie("token", { path: "/" }); // Delete the token
    alert("Logged out successfully!");
    navigate("/home"); // Redirect to login page
  };

  return (
    <div className="h-full w-full flex-col bg-app-black">
      <div className={`${currentSong ? "h-9/10" : "h-full"} w-full flex`}>
        {/* Sidebar Section */}
        <div className="h-full bg-black w-1/5 p-5 ">
          <div className="ml-3 mt-3">
            <img src={spotify_logo} alt="Spotify" width={125} />
          </div>
          <div className="mt-10">
            <IconText
              iconName={"material-symbols:home-outline"}
              label={"Home"}
              active={ActiveScreen === "home"}
              targetLink={"/home"}
            />

            <IconText
              iconName={"material-symbols:search"}
              label={"Search"}
              targetLink={"/Search"}
              active={ActiveScreen === "Search"}
            />
            <IconText
              iconName={"fluent:library-28-regular"}
              label={"My Library"}
              active={ActiveScreen === "library"}
            />
          </div>

          <div className="mt-10">
            <IconText
              iconName={"ic:round-library-music"}
              label={"My Songs"}
              targetLink={"/myMusic"}
              active={ActiveScreen === "myMusic"}
            />

            <IconText
              iconName={"material-symbols:add-box"}
              label={"Create Playlist"}
              active={ActiveScreen === "createplaylist"}
            />
            <IconText
              iconName={"mdi:heart-box"}
              label={"Liked Songs"}
              active={ActiveScreen === "likedSongs"}
            />
          </div>
        </div>

        {/* Main Content Section */}
        <div className=" w-4/5 h-full bg-app-black">
          <div className="navbar w-full h-1/10 bg-black bg-opacity-40 flex items-center justify-end  ">
            <div className="w-1/2 flex h-full">
              <div className="w-4/5 flex justify-around items-center">
                <Hovertext label={"Premium"} />
                <Hovertext label={"Support"} />
                <Hovertext label={"Download"} />
                <div className="h-1/2 border border-white border-r"></div>
                <button>
                  <Link to="/uploadSongs">
                    <Hovertext
                      label={"Upload Song"}
                      active={ActiveScreen === "uploadSong"}
                    />
                  </Link>
                </button>
              </div>
              <div className="w-1/5 flex justify-around h-full items-center">
                <button
                  onClick={logout}
                  className="border border-solid bg-white h-2/3 px-8 font-semibold  rounded-full flex items-center justify-center cursor pointer"
                >
                  Log out
                </button>
              </div>
            </div>
          </div>

          <div className="content p-8 h-9/10 bg-app-black overflow-auto ">
            {children}
          </div>
        </div>
      </div>
      {currentSong && (
        <div className=" songplaying h-1/10 w-full  flex justify-end items-center bg-black bg-opacity-40">
          <div className="flex items-center p-4 w-1/4">
            <img className="w-14 h-14 mr-3" src={currentSong.thumbnail} />
            <div className="px-4">
              <div className="text-white hover:underline">
                {currentSong.name}
              </div>
              <div className="text-xs text-gray-500 hover:underline">
                {currentSong.artist.firstName +
                  " " +
                  currentSong.artist.lastName}
              </div>
            </div>
          </div>
          <div className="w-1/2 flex flex-col text-white justify-center items-center h-full">
            <div className="flex justify-between w-1/5 items-center">
              <Icon
                icon="lucide:shuffle"
                className="cursor-pointer text-gray-500 hover:text-white"
                fontSize={18}
              />
              <Icon
                icon="ic:round-skip-previous"
                className="cursor-pointer text-gray-300 hover:text-white"
                fontSize={32}
              />
              <Icon
                icon={isPaused ? "gridicons:play" : "gridicons:pause"}
                className="cursor-pointer text-gray-200 hover:text-white"
                fontSize={48}
                onClick={togglePlayPause}
              />
              <Icon
                icon="ic:round-skip-next"
                className="cursor-pointer text-gray-300 hover:text-white"
                fontSize={32}
              />
              <Icon
                icon="lucide:repeat"
                className="cursor-pointer text-gray-500 hover:text-white"
                fontSize={18}
              />
            </div>
            <div>{/* progressbar */}</div>
          </div>
          <div className="w-1/4 text-white flex justify-end"></div>
        </div>
      )}
    </div>
  );
};

export default LoggedinHomeContainer;
