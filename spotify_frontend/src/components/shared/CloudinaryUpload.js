import { openUploadWidget } from "../../Utils/CloudinaryServices"
import { cloudinary_upload_preset } from "../../config";

const CloudinaryUpload = ({ setUrl , setName }) => {
  const uploadWidget = () => {
    let myUploadWidget = openUploadWidget(
      {
        // cloudName:"clouds name",
        // uploadPreset: upload_preset of cloudinary cloud,
        sources: ["local"]
      },
      function (error, result) {
        if (!error && result.event === "success") {
          setUrl(result.info.secure_url);
          setName(result.info.original_filename);
        }else{
            if(error){
            console.log(error);
            }
        }
      }
    );
    myUploadWidget.open();
  };

  return (
    <button className=" font font-semibold text-black bg-white p-4 rounded-full" onClick={uploadWidget}>
      Upload file
    </button>
  );
};

export default CloudinaryUpload;
