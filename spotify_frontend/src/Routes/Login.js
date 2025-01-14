import { Icon } from "@iconify/react";
import { useState } from "react";
import TextInput from "../components/shared/Textinput";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import { makeUnauthenticatedPOSTRequest } from "../Utils/serverHelper";


const LoginComponent = () => {

  const[email,setEmail]= useState("");
  const[password,setPassword]= useState("");
  const [cookie,setCookie] = useCookies(["token"]);
  const navigate=useNavigate(); 




  const login = async () => {
    try {
      if (!email || !password) {
        alert("Email and password are required.");
        return;
      }
  
      const data = { email, password };
      const response = await makeUnauthenticatedPOSTRequest("/auth/login", data);
  
      if (response && !response.err) {
        const token = response.token;
        const date = new Date();
        date.setDate(date.getDate() + 30);
        setCookie("token", token, { path: "/", expires: date });
  
        alert("Login successful!");
        navigate("/home");
      } else {
        alert("Login failed: " + response.err);
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };



  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="logo p-3 border-b w-full border-solid border-gray-300 flex flex-col items-center">
        <Icon icon="logos:spotify" width="170" height="100" />
      </div>
      <div className="inputRegion w-1/3 py-10 flex items-center justify-center flex-col">
        <div className="font-bold mb-12">To Continue, log in to Spotify</div>
        <TextInput
          label="Email ID or Username"
          placeholder="Email ID or Username"
          className="mb-5"
          value={email}
          setValue={setEmail}
        />
        <div className="space-y-2" />
        <TextInput
          label="Password"
          placeholder="Password"
          type="password"
          className="mb-5"
          value={password}
          setValue={setPassword}
        />
        <button onClick={(e)=>
          {e.preventDefault();
            login();
          }
        }
          className=" w-full  bg-green-500 text-black hover:bg-black hover:text-white font-semibold py-2 px-10 rounded-full mb-6"
        >
          LOG IN
        </button>
      <div className="w-full border border-solid border-grey-300"></div>
      <div className="my-6 font-semibold text-xl"> Don't have an account?</div>
      
      <button
          className="w-full border-4 border-solid border-black  hover:bg-black bg-white hover:text-white font-semibold py-2 px-10 rounded-full 
          text-black "
        >
          <Link to="/signup">
          SIGN UP
          </Link>
        </button></div>
    </div>
  );
};
export default LoginComponent;
