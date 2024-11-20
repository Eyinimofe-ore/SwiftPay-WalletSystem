import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';  // Import useNavigate
import { CiUser } from "react-icons/ci";  // Import user icon
import { MdEmail } from "react-icons/md"; // Import email icon
import { MdOutlineDriveFileRenameOutline } from "react-icons/md"; // Import name icon
import InputContent from "../Components/InputContent/InputContent"; // Import custom input component
import { RiLockPasswordFill } from "react-icons/ri"; // Import password icon
import Button from "../Components/Button/Button.jsx"; // Import custom button component
import { config } from "../Services.jsx"; // Import configuration
import { signin, signups, completeSignup } from "../Apicalls.jsx"; // Import API call functions
import ReactModal from "react-modal"; // Import modal component
import pic from '.././Assets/Images/istockphoto-1281150061-612x612-removebg-preview.png'; // Import image

export default function LoginSignup() {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize useNavigate

  const [action, setAction] = useState("signup");

  useEffect(() => {
    // Check if there's an action passed through location state
    if (location.state?.action) {
      setAction(location.state.action);
    }
  }, [location.state]);

  const [value, setValue] = useState({
    email: "",
    password: "",
    token: "",
    full_name: "",
    username: "",
    error: "",
  });

  const [controlmodal, setControlmodal] = useState(false);

  const { email, password, error, token, full_name, username } = value;

  const customStyles = {
    content: {
      top: '5%',
      left: '20%',
      right: '20%',
      bottom: 'auto',
      boxShadow: '0 0 10px 0 rgba(0,0,97,0.5)',
      overflow: 'auto',
      borderRadius: '4px',
      outline: 'none',
    },
    innerHeight: "50%",
    overlay: {
      backgroundColor: "rgba(0,0,0,0.75)",
    }
  };

  const handlechange = (name, namevalue) => {
    setValue((previous) => {
      return { ...previous, error: "", [name]: namevalue }; // Reset error and update state
    });
  };

  let changeAction = async (actionname) => {
    try {
      if (actionname === "signup") {
        setAction("signup");
        setValue({
          email: "",
          password: "",
          token: "",
          full_name: "",
          username: "",
          error: "",
        });

        const signupResponse = await signups(email);
        if (signupResponse.error) {
          setValue((previous) => {
            return { ...previous, error: signupResponse.message };
          });
        } else {
          setControlmodal(true);
        }
      } else if (actionname === "login") {
        setAction("login");

        const loginResponse = await signin(email, password);
        if (loginResponse.error) {
          setValue((previous) => {
            return { ...previous, error: loginResponse.message };
          });
        } else {
          localStorage.setItem("userid", loginResponse.user_id);
          window.location.replace(config.routeconfig.dashboard);
        }
      } else if (actionname === "completeSignup") {
        const completeSignupResponse = await completeSignup(email, token, full_name, username, password);
        if (completeSignupResponse.error) {
          setValue((previous) => {
            return { ...previous, error: completeSignupResponse.message };
          });
        } else {
          setControlmodal(false);
          setAction("login");
        }
      }
    } catch (error) {
      console.log(error);
      setValue({
        email: "",
        password: "",
        token: "",
        full_name: "",
        username: "",
        error: "Something went wrong. Please try again.",
      });
    }
  };

  let signup = () => {
    return (
      <>
        <InputContent
          changetext={(event) => handlechange("email", event.target.value)}
          value={email}
          type="email"
          placeholder="Enter Email Address"
          icon={<MdEmail className="icon" />}
        />
      </>
    );
  };

  let login = () => {
    return (
      <>
        <InputContent
          changetext={(event) => handlechange("email", event.target.value)}
          value={email}
          type="text"
          placeholder="Enter your Email"
          icon={<CiUser className="icon" />}
        />
        <InputContent
          changetext={(event) => handlechange("password", event.target.value)}
          value={password}
          type="password"
          placeholder="Enter your Password"
          icon={<RiLockPasswordFill className="icon" />}
        />
      </>
    );
  };

  return (
    <div className="logincontainer">
      <div className="button-back">
      <button className="back_button" id="back" onClick={() => navigate('/')} style={{margin: 0,marginRight:1250,padding:10,backgroundColor:"transparent",
}}>
        &#8592; 
      </button>
      </div>

      <div className="overlay">
        <div className="body">
          <div className="img">
            <img src={pic} alt="Signup/Login" />
          </div>
          <div className="logininputcontainer">
            <div className="signup">
              <h1>{action === "signup" ? "Signup" : "Login"}</h1>
            </div>
            {action === "signup" ? signup() : login()}
            <div className="buttoncontainer">
              <Button
                changeAction={() => changeAction("signup")}
                buttonlabel="Signup"
              />
              <Button
                changeAction={() => changeAction("login")}
                buttonlabel="Login"
              />
            </div>
            <div style={{ color: "#ff0000" }} className="error">
              {typeof error === 'string' ? error : "An error occurred."}
            </div>
          </div>
        </div>
        <ReactModal
          isOpen={controlmodal}
          style={customStyles}
        >
          <h1>Complete Signup</h1>
          <InputContent
            changetext={(event) => handlechange("email", event.target.value)}
            value={email}
            type="text"
            placeholder="Enter your Email"
            icon={<MdEmail className="icon" />}
          />
          <InputContent
            changetext={(event) => handlechange("token", event.target.value)}
            value={token}
            type="text"
            placeholder="Enter your Token here"
            icon={<RiLockPasswordFill className="icon" />}
          />
          <InputContent
            changetext={(event) => handlechange("full_name", event.target.value)}
            value={full_name}
            type="text"
            placeholder="Enter your Full Name here"
            icon={<MdOutlineDriveFileRenameOutline className="icon" />}
          />
          <InputContent
            changetext={(event) => handlechange("username", event.target.value)}
            value={username}
            type="text"
            placeholder="Enter your Username here"
            icon={<CiUser className="icon" />}
          />
          <InputContent
            changetext={(event) => handlechange("password", event.target.value)}
            value={password}
            type="password"
            placeholder="Enter your Password here"
            icon={<RiLockPasswordFill className="icon" />}
          />
          <div className="buttoncontainer">
            <Button
              changeAction={() => changeAction("completeSignup")}
              buttonlabel="Complete Signup"
            />
            <Button
              changeAction={() => setControlmodal(false)}
              buttonlabel="Cancel"
            />
          </div>
        </ReactModal>
      
      </div>
    </div>
  );
}
