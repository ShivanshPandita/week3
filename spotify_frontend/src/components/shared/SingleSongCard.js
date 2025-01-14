import { useContext } from "react";
import songContext from "../../contexts/songContext";

const SingleSongCard = ({ info, playSound }) => {
  const { currentSong, setCurrentSong } = useContext(songContext);
  

  return (
    <div
      className="flex hover:bg-gray-400 hover:bg-opacity-20 p-2"
      onClick={() => {
        setCurrentSong(info);
      }}
    >
      <div
        className="w-12 h-12 bg-cover bg-center"
        style={{
          backgroundImage: `url("${info.thumbnail}")`,
        }}
      ></div>
      <div className="flex w-full">
        <div className="text-white flex justify-center flex-col w-5/6 pl-4">
          <div className="hover:underline cursor-pointer">{info.name}</div>
          <div className=" text-xs text-gray-400 hover:underline cursor-pointer">
            {info.artist.firstName + " " + info.artist.lastName}
          </div>
        </div>

        <div className="flex justify-center items-center w-1/6 text-gray-400 text-sm">
          3:44
        </div>
      </div>
    </div>
  );
};

export default SingleSongCard;
