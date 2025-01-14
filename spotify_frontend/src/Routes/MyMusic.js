import spotify_logo from "../assets/images/spotify_logo.svg";
import IconText from "../components/shared/IconText";
import Hovertext from "../components/shared/HoverText";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import SingleSongCard from "../components/shared/SingleSongCard";
import { makeAuthenticatedGETRequest } from "../Utils/serverHelper";
import { useEffect, useState } from "react";
import { Howl, Howler } from "howler";
import LoggedinHomeContainer from "../components/shared/containers/LoggedninContainer";

const songData = [
  {
    thumbnail: "",

    name: "Song name",
    artist: "Artist",
  },
];

const MyMusicComponent = () => {
  const [, , removeCookie] = useCookies(["token"]);
  const navigate = useNavigate();
  const logout = () => {
    removeCookie("token", { path: "/" }); // Delete the token
    alert("Logged out successfully!");
    navigate("/home"); // Redirect to login page
  };

  const [songData, setSongData] = useState([]);
  const [soundPlayed, setSoundPlayed] = useState(null);

  //howler stuff
  const playSound = (songsrc) => {
    if(soundPlayed)
    {
        soundPlayed.stop()
    }
    let sound = new Howl({
      src: [songsrc],
      html5: true,
    });
    setSoundPlayed(sound);
    sound.play();
    console.log(sound)
  };

  useEffect(() => {
    const getData = async () => {
      const response = await makeAuthenticatedGETRequest("/song/get/mysongs");
      setSongData(response.data);
    };

    getData();
  }, []);

  return (
    <LoggedinHomeContainer ActiveScreen="myMusic"> 
      <div className="text-white text-3xl font-semibold ml-3 mt-8 mb-8">
            {" "}
            My Songs
          </div>
          <div className="songlist space-y-2">
            {songData.map((item) => {
              return <SingleSongCard info={item} playSound={playSound}/>;
            })}
          </div>
    </LoggedinHomeContainer>
    // <div className="h-full w-full flex">
    //   {/* Sidebar Section */}
    //   <div className="h-full bg-black w-1/5 p-5 ">
    //     <div className="ml-3 mt-3">
    //       <img src={spotify_logo} alt="Spotify" width={125} />
    //     </div>
    //     <div className="mt-10">
    //       <button>
    //         <Link to="/signup">
    //           <IconText
    //             iconName={"material-symbols:home-outline"}
    //             label={"Home"}
    //           />
    //         </Link>
    //       </button>
    //       <IconText iconName={"material-symbols:search"} label={"Search"} />
    //       <IconText
    //         iconName={"fluent:library-28-regular"}
    //         label={"My Library"}
    //       />
    //     </div>

    //     <div className="mt-10">
    //       <IconText
    //         iconName={"ic:round-library-music"}
    //         label={"My Songs"}
    //         active={true}
    //       />
    //       <IconText
    //         iconName={"material-symbols:add-box"}
    //         label={"Create Playlist"}
    //       />
    //       <IconText iconName={"mdi:heart-box"} label={"Liked Songs"} />
    //     </div>
    //   </div>

    //   {/* Main Content Section */}
    //   <div className=" w-4/5 h-full bg-app-black ">
    //     <div className="navbar w-full h-1/10 bg-black bg-opacity-40 flex items-center justify-end">
    //       <div className="w-1/2 flex h-full">
    //         <div className="w-4/5 flex justify-around items-center">
    //           <Hovertext label={"Premium"} />
    //           <Hovertext label={"Support"} />
    //           <Hovertext label={"Download"} />
    //           <div className="h-1/2 border border-white border-r"></div>
    //           <button>
    //             <div className="flex items-center justify-start p-2  cursor-pointer ">
    //               <Link to="/uploadSongs">
    //                 <Hovertext label={"Upload Song"} />
    //               </Link>
    //             </div>
    //           </button>
    //         </div>
    //         <div className="w-1/5 flex justify-around h-full items-center">
    //           <button
    //             onClick={logout}
    //             className="border border-solid bg-white h-2/3 px-8 font-semibold  rounded-full flex items-center justify-center cursor pointer"
    //           >
    //             Log out
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="content p-8 h-9/10 bg-app-black overflow-auto ">
    //       <div className="text-white text-3xl font-semibold ml-3 mt-8 mb-8">
    //         {" "}
    //         My Songs
    //       </div>
    //       <div className="songlist space-y-2">
    //         {songData.map((item) => {
    //           return <SingleSongCard info={item} playSound={playSound}/>;
    //         })}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default MyMusicComponent;
