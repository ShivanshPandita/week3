import spotify_logo from "../assets/images/spotify_logo.svg";
import IconText from "../components/shared/IconText";
import Hovertext from "../components/shared/HoverText";
import { Link } from "react-router-dom";

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

const HomeComponent = () => {
  return (
    <div className="h-full w-full flex">
      {/* Sidebar Section */}
      <div className="h-full bg-black w-1/5 p-5 ">
        <div className="ml-3 mt-3">
          <img src={spotify_logo} alt="Spotify" width={125} />
        </div>
        <div className="mt-10">
          <button>
            <Link to="/signup">
            <IconText
            iconName={"material-symbols:home-outline"}
            label={"Home"}
            active={true}

            />
            </Link>
          </button>
          
          <IconText iconName={"material-symbols:search"} label={"Search"} />
          <IconText
            iconName={"fluent:library-28-regular"}
            label={"My Library"}
          />
        </div>

        <div className="mt-10">
          <IconText
            iconName={"material-symbols:add-box"}
            label={"Create Playlist"}
          />
          <IconText iconName={"mdi:heart-box"} label={"Liked Songs"} />
        </div>
      </div>

      {/* Main Content Section */}
      <div className=" w-4/5 h-full bg-app-black ">
        <div className="navbar w-full h-1/10 bg-black bg-opacity-40 flex items-center justify-end">
          <div className="w-1/2 flex h-full">
            <div className="w-4/5 flex justify-around items-center">
              <Hovertext label={"Premium"} />
              <Hovertext label={"Support"} />
              <Hovertext label={"Download"} />
              <div className="h-1/2 border border-white border-r"></div>
              <button>
                <Link to="/signup">
                  <Hovertext label={"Sign up"} />
                </Link>
              </button>
            </div>
            <div className="w-1/5 flex justify-around h-full items-center">
              <button className="border border-solid bg-white h-2/3 px-8 font-semibold  rounded-full flex items-center justify-center cursor pointer">
                <Link to="/login">Log in</Link>
              </button>
            </div>
          </div>
        </div>

        <div className="content p-8 h-9/10 bg-app-black overflow-auto ">
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
        </div>
      </div>
    </div>
  );
};

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

export default HomeComponent;
