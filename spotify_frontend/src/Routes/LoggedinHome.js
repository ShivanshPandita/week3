import spotify_logo from "../assets/images/spotify_logo.svg";
import IconText from "../components/shared/IconText";
import Hovertext from "../components/shared/HoverText";
import { useCookies } from "react-cookie";
import { useState } from "react";
import { Howl, Howler } from "howler";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import LoggedinHomeContainer from "../components/shared/containers/LoggedninContainer";

const focuscardsData = [
  {
    title: "Piano",
    desc: "Piano Sounds to keep calm and study",
    imgUrl:
      "https://images.unsplash.com/photo-1522249210728-7cd95094022a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGlhbm98ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Deep Focus",
    desc: "Keep focused and focus with this music",
    imgUrl:
      "https://images.unsplash.com/photo-1463134836706-8bcc60f7d78b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Instrumental",
    desc: "Instrumental sounds to keep you focused",
    imgUrl:
      "https://images.unsplash.com/photo-1678218343945-7dd4b2bb8574?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5zdHJ1bWVudGFsfGVufDB8fDB8fHww",
  },
  {
    title: "Focus Flow",
    desc: "Up tempo instrumental hip hop",
    imgUrl:
      "https://images.unsplash.com/photo-1538248814128-02e1bd877c01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNhbG0lMjBpbnN0dHJ1bWVudGFsfGVufDB8fDB8fHww",
  },
  {
    title: "Beats",
    desc: "Beats to think to",
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1709311418063-35661a7e3343?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FsbSUyMGluc3R0cnVtZW50YWwlMjBiZWF0c3xlbnwwfHwwfHx8MA%3D%3D",
  },
];
const spotifycardsData = [
  {
    title: "Piano",
    desc: "Piano Sounds to keep calm and study",
    imgUrl:
      "https://images.unsplash.com/photo-1522249210728-7cd95094022a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGlhbm98ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Deep Focus",
    desc: "Keep focused and focus with this music",
    imgUrl:
      "https://images.unsplash.com/photo-1463134836706-8bcc60f7d78b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Instrumental",
    desc: "Instrumental sounds to keep you focused",
    imgUrl:
      "https://images.unsplash.com/photo-1678218343945-7dd4b2bb8574?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5zdHJ1bWVudGFsfGVufDB8fDB8fHww",
  },
  {
    title: "Focus Flow",
    desc: "Up tempo instrumental hip hop",
    imgUrl:
      "https://images.unsplash.com/photo-1538248814128-02e1bd877c01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNhbG0lMjBpbnN0dHJ1bWVudGFsfGVufDB8fDB8fHww",
  },
  {
    title: "Beats",
    desc: "Beats to think to",
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1709311418063-35661a7e3343?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FsbSUyMGluc3R0cnVtZW50YWwlMjBiZWF0c3xlbnwwfHwwfHx8MA%3D%3D",
  },
];
const mycardsData = [
  {
    title: "Piano",
    desc: "Piano Sounds to keep calm and study",
    imgUrl:
      "https://images.unsplash.com/photo-1522249210728-7cd95094022a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGlhbm98ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Deep Focus",
    desc: "Keep focused and focus with this music",
    imgUrl:
      "https://images.unsplash.com/photo-1463134836706-8bcc60f7d78b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Instrumental",
    desc: "Instrumental sounds to keep you focused",
    imgUrl:
      "https://images.unsplash.com/photo-1678218343945-7dd4b2bb8574?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5zdHJ1bWVudGFsfGVufDB8fDB8fHww",
  },
  {
    title: "Focus Flow",
    desc: "Up tempo instrumental hip hop",
    imgUrl:
      "https://images.unsplash.com/photo-1538248814128-02e1bd877c01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNhbG0lMjBpbnN0dHJ1bWVudGFsfGVufDB8fDB8fHww",
  },
  {
    title: "Beats",
    desc: "Beats to think to",
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1709311418063-35661a7e3343?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FsbSUyMGluc3R0cnVtZW50YWwlMjBiZWF0c3xlbnwwfHwwfHx8MA%3D%3D",
  },
];

const LoggedinHomeComponent=()=>{
  return(<LoggedinHomeContainer ActiveScreen="home">
    <PlaylistView
              titleText={"Focus"}
              cardsData={focuscardsData}
            ></PlaylistView>
            <PlaylistView
              titleText={"Spotify"}
              cardsData={spotifycardsData}
            ></PlaylistView>
            <PlaylistView
              titleText={"Music"}
              cardsData={mycardsData}
            ></PlaylistView>
  </LoggedinHomeContainer>
  )
}


// const LoggedinHomeComponent = () => {
//   const [, , removeCookie] = useCookies(["token"]);
//   const navigate = useNavigate();
//   const [soundPlayed, setSoundPlayed] = useState(null);
//   const [isPaused, setIsPaused] = useState(true);

//   const playSound = (songsrc) => {
//     if (soundPlayed) {
//       soundPlayed.stop();
//     }
//     let sound = new Howl({
//       src: [songsrc],
//       html5: true,
//     });
//     setSoundPlayed(sound);
//     sound.play();
//     console.log(sound);
//   };

//   const pauseSound = () => {
//     soundPlayed.pause();
//   };

//   const togglePlayPause = () => {
//     if (isPaused) {
//       playSound("https://res.cloudinary.com/dw6mlhrmd/video/upload/v1736707944/cv9pffwvyl0jc6j9rh0h.mp3");
//       setIsPaused(false);
//     }else{
//       pauseSound();
//       setIsPaused(true);
//     }
//   };

//   const logout = () => {
//     removeCookie("token", { path: "/" }); // Delete the token
//     alert("Logged out successfully!");
//     navigate("/home"); // Redirect to login page
//   };

//   return (
//     <div className="h-full w-full flex-col bg-app-black">
//       <div className="h-9/10 w-full flex">
//         {/* Sidebar Section */}
//         <div className="h-full bg-black w-1/5 p-5 ">
//           <div className="ml-3 mt-3">
//             <img src={spotify_logo} alt="Spotify" width={125} />
//           </div>
//           <div className="mt-10">
//             <button>
//               <Link to="/signup">
//                 <IconText
//                   iconName={"material-symbols:home-outline"}
//                   label={"Home"}
//                   active={true}
//                 />
//               </Link>
//             </button>
//             <IconText iconName={"material-symbols:search"} label={"Search"} />
//             <IconText
//               iconName={"fluent:library-28-regular"}
//               label={"My Library"}
//             />
//           </div>

//           <div className="mt-10">
//             <Link to="/MyMusic">
//               <IconText
//                 iconName={"ic:round-library-music"}
//                 label={"My Songs"}
//               />
//             </Link>
//             <IconText
//               iconName={"material-symbols:add-box"}
//               label={"Create Playlist"}
//             />
//             <IconText iconName={"mdi:heart-box"} label={"Liked Songs"} />
//           </div>
//         </div>

//         {/* Main Content Section */}
//         <div className=" w-4/5 h-full bg-app-black">
//           <div className="navbar w-full h-1/10 bg-black bg-opacity-40 flex items-center justify-end  ">
//             <div className="w-1/2 flex h-full">
//               <div className="w-4/5 flex justify-around items-center">
//                 <Hovertext label={"Premium"} />
//                 <Hovertext label={"Support"} />
//                 <Hovertext label={"Download"} />
//                 <div className="h-1/2 border border-white border-r"></div>
//                 <button>
//                   <Link to="/uploadSongs">
//                     <Hovertext label={"Upload Song"} />
//                   </Link>
//                 </button>
//               </div>
//               <div className="w-1/5 flex justify-around h-full items-center">
//                 <button
//                   onClick={logout}
//                   className="border border-solid bg-white h-2/3 px-8 font-semibold  rounded-full flex items-center justify-center cursor pointer"
//                 >
//                   Log out
//                 </button>
//               </div>
//             </div>
//           </div>

//           <div className="content p-8 h-9/10 bg-app-black overflow-auto ">
//             <PlaylistView
//               titleText={"Focus"}
//               cardsData={focuscardsData}
//             ></PlaylistView>
//             <PlaylistView
//               titleText={"Spotify"}
//               cardsData={spotifycardsData}
//             ></PlaylistView>
//             <PlaylistView
//               titleText={"Music"}
//               cardsData={mycardsData}
//             ></PlaylistView>
//           </div>
//         </div>
//       </div>

//       <div className=" songplaying h-1/10 w-full  flex justify-end items-center bg-black bg-opacity-40">
//         <div className="flex items-center p-4 w-1/4">
//           <img
//             className="w-14 h-14 mr-3"
//             src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"
//           />
//           <div className="px-4">
//             <div className="text-white hover:underline">SongName</div>
//             <div className="text-xs text-gray-500 hover:underline">artist</div>
//           </div>
//         </div>
//         <div className="w-1/2 flex flex-col text-white justify-center items-center h-full">
//           <div className="flex justify-between w-1/5 items-center">
//             <Icon
//               icon="lucide:shuffle"
//               className="cursor-pointer text-gray-500 hover:text-white"
//               fontSize={18}
//             />
//             <Icon
//               icon="ic:round-skip-previous"
//               className="cursor-pointer text-gray-300 hover:text-white"
//               fontSize={32}
//             />
//             <Icon
//               icon={isPaused?"gridicons:play":"gridicons:pause"}
//               className="cursor-pointer text-gray-200 hover:text-white"
//               fontSize={48}
//               onClick={togglePlayPause}
//             />
//             <Icon
//               icon="ic:round-skip-next"
//               className="cursor-pointer text-gray-300 hover:text-white"
//               fontSize={32}
//             />
//             <Icon
//               icon="lucide:repeat"
//               className="cursor-pointer text-gray-500 hover:text-white"
//               fontSize={18}
//             />
//           </div>
//           <div>{/* progressbar */}</div>
//         </div>
//         <div className="w-1/4 text-white flex justify-end">hello</div>
//       </div>
//     </div>
//   );
// };

const PlaylistView = ({ titleText, cardsData }) => {
  return (
    <div>
      <div className="text-white text-3xl font-semibold ml-3 mt-8 mb-8">
        {titleText}
      </div>
      <div className="w-full flex justify-between space-x-3">
        {cardsData.map((item) => {
          return (
            <Card title={item.title} desc={item.desc} imgUrl={item.imgUrl} />
          );
        })}
      </div>
    </div>
  );
};

const Card = ({ title, desc, imgUrl }) => {
  return (
    <div className="bg-black bg-opacity-60 w-72 h-96 p-4 rounded-lg">
      <div className="w-full h-2/3">
        <img
          className="w-full h-full object-cover rounded-md"
          src={imgUrl}
          alt={`${title} image`}
        />
      </div>
      <div className="text-white font-semibold mt-4">{title}</div>
      <div className="text-gray-500 text-sm mt-2">{desc}</div>
    </div>
  );
};

export default LoggedinHomeComponent;
