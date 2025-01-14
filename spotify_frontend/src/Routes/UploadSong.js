import spotify_logo from "../assets/images/spotify_logo.svg";
import IconText from "../components/shared/IconText";
import { useState } from "react";
import Hovertext from "../components/shared/HoverText";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import TextInput from "../components/shared/Textinput";
import CloudinaryUpload from "../components/shared/CloudinaryUpload";
import {makeAuthenticatedPOSTRequest} from "../Utils/serverHelper"
import LoggedinHomeContainer from "../components/shared/containers/LoggedninContainer";


const UploadSongComponent = () => {
  const [name, setName] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [SongUrl,setSongUrl]= useState("");
  const [UploadedSongName,setUploadedSongName]= useState("");

  const submitSong= async ()=>
  {
    const data = {name,thumbnail,track:SongUrl}
    const response= await makeAuthenticatedPOSTRequest("/song/create",data);
    if(!response.err)
    {
      alert("Created Sucessfully")
    }else{
      alert("Could not Create Song")
    }
  
  }

  const [, , removeCookie] = useCookies(["token"]);
  const navigate = useNavigate();

  const logout = () => {
    removeCookie("token", { path: "/" }); // Delete the token
    alert("Logged out successfully!");
    navigate("/home"); // Redirect to login page
  };

  return (
    <LoggedinHomeContainer ActiveScreen="uploadSong">
      <div className="text-white text-3xl font-semibold ml-3 mt-8 mb-8">
            Upload your Songs
          </div>
          <div className="w-2/3 flex space-x-3 mb-3">
            <div className="w-1/2">
              <TextInput
                labelColor={"text-white"}
                label={"Name"}
                placeholder={"Song Name"}
                value={name}
                setValue={setName}
                />
            </div>
            <div className="w-1/2">
              <TextInput
                labelColor={"text-white"}
                label={"Thumbnail"}
                placeholder={"Song Thumbnail"}
                value={thumbnail}
                setValue={setThumbnail}
              />
            </div>
          </div>
          <div className=" py-5">
            {
            UploadedSongName?(
              <div className="font text-black bg-white p-4 w-1/4 rounded-full">{UploadedSongName.substring(0,25)}...</div>
            ):(

            <CloudinaryUpload setUrl={setSongUrl} setName={setUploadedSongName}/>
          )
          }
          </div>
          <div onClick={submitSong}className="font font-semibold text-black bg-white p-4 w-1/6 rounded-full flex items-center cursor-pointer justify-center">
            Submit Song
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
    //       <Link to="/MyMusic">
    //       <IconText iconName={"ic:round-library-music"} label={"My Songs"} />
    //       </Link>
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
    //               <div className={"text-white font-semibold text-lg"}>
    //                 Upload Song
    //               </div>
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

    //     <div className="content  p-8 h-9/10 bg-app-black overflow-auto ">
    //       <div className="text-white text-3xl font-semibold ml-3 mt-8 mb-8">
    //         Upload your Songs
    //       </div>
    //       <div className="w-2/3 flex space-x-3 mb-3">
    //         <div className="w-1/2">
    //           <TextInput
    //             labelColor={"text-white"}
    //             label={"Name"}
    //             placeholder={"Song Name"}
    //             value={name}
    //             setValue={setName}
    //             />
    //         </div>
    //         <div className="w-1/2">
    //           <TextInput
    //             labelColor={"text-white"}
    //             label={"Thumbnail"}
    //             placeholder={"Song Thumbnail"}
    //             value={thumbnail}
    //             setValue={setThumbnail}
    //           />
    //         </div>
    //       </div>
    //       <div className=" py-5">
    //         {
    //         UploadedSongName?(
    //           <div className="font text-black bg-white p-4 w-1/4 rounded-full">{UploadedSongName.substring(0,25)}...</div>
    //         ):(

    //         <CloudinaryUpload setUrl={setSongUrl} setName={setUploadedSongName}/>
    //       )
    //       }
    //       </div>
    //       <div onClick={submitSong}className="font font-semibold text-black bg-white p-4 w-1/6 rounded-full flex items-center cursor-pointer justify-center">
    //         Submit Song
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default UploadSongComponent;
