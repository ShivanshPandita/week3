import { Icon } from "@iconify/react";
import { useState } from "react";
import {useHistory, useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";
import TextInput from "../components/shared/Textinput";
import { Link } from "react-router-dom";
import { makeUnauthenticatedPOSTRequest } from "../Utils/serverHelper";

const SignupComponent = () => {
  const [email, setEmail] = useState("");
  const [confirmEmail, setconfirmEmail] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [cookie, setCookie] = useCookies(["token"]);
  const navigate = useNavigate();


  const signup=async ()=>{
    if(email!=confirmEmail)
    {
      alert("Emails do not match");
      return;
    }
    const data={email,password,username,firstName,lastName}
    const response= await makeUnauthenticatedPOSTRequest("/auth/register",data)
    if(response && !response.err)
    {
    
      const token = response.token;
      const date = new Date();
      date.setDate(date.getDate()+30);
      setCookie("token",token,{path:"/",expires:date});

      alert("Sucess");
      navigate("/login");
    }else{
      alert("Failure");
    }
  }


  return (
    <div className="w-full h-full flex flex-col items-center">
      {/* Logo Section */}
      <div className="logo p-3 border-b w-full border-solid border-gray-300 flex flex-col items-center">
        <Icon icon="logos:spotify" width="170" height="100" />
      </div>

      {/* Input Region */}
      <div className="inputRegion w-full md:w-1/3 py-10 flex items-center justify-center flex-col px-4">
        <div className="font-bold mb-8 text-center text-xl">
          Sign up for Spotify
        </div>

        {/* First Name and Last Name in a Row */}
        <div className="w-full flex space-x-4 mb-5">
          <TextInput
            label="First Name"
            placeholder="First Name"
            className="w-1/2"
            value={firstName}
            setValue={setfirstName}
          />
          <TextInput
            label="Last Name"
            placeholder="Last Name"
            className="w-1/2"
            value={lastName}
            setValue={setlastName}
          />
        </div>

        {/* Username */}
        <TextInput
          label="Username"
          placeholder="Username"
          className="mb-5"
          value={username}
          setValue={setusername}
        />

        {/* Email */}
        <TextInput
          label="Email Address"
          placeholder="Email Address"
          type="email"
          className="mb-5"
          value={email}
          setValue={setEmail}
        />
        <TextInput
          label="Confirm Email Address"
          placeholder="Enter your Email again"
          type="email"
          className="mb-5"
          value={confirmEmail}
          setValue={setconfirmEmail}
        />

        {/* Password */}
        <TextInput
          label="Password"
          placeholder="Password"
          type="password"
          className="mb-5"
          value={password}
          setValue={setpassword}
        />

        <button
          className=" w-full  bg-green-500 text-black hover:bg-black hover:text-white font-semibold py-2 px-10 rounded-full mb-6"
          aria-label="Sign up for Spotify"
          onClick={(e)=>{
            e.preventDefault();
            signup();
          }}
        >
          SIGN UP
        </button>

        <div className="w-full border border-solid border-gray-300 my-4"></div>

        <div className="my-6 font-semibold text-xl text-center">
          Already have an account?
        </div>

        <button
          className="w-full border-4 border-solid border-black hover:bg-black bg-white hover:text-white font-semibold py-2 px-10 rounded-full text-black"
          aria-label="Log in to Spotify"
        >
          <Link to="/login">LOG IN INSTEAD</Link>
        </button>
      </div>
    </div>
  );
};

export default SignupComponent;
