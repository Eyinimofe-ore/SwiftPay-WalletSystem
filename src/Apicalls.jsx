import  axios from "axios";
import { config } from "./Services";
var {baseurl} = config

export var user = async () =>{
  try{
    var response = await axios.get("https://jsonplaceholder.typicode.com/users");
    return response.data;

  }
  catch(error){
    return {error:true, message:error.response.data.message}

  }
}

export var signin = async (username, password) => {
  try {
    
    var response = await axios.post(`${baseurl}/login/`,  {
      username_or_email: username,
      password: password,
    })
    return response.data;
  } catch (error) {
    return {error:true, message:error.response.data.message}

    //console.log("message",error.response.data.message)
}
};
export var signups = async (emailinput) =>{
  console.log("emailinput",emailinput);
  try{
    var response = await axios.post(`${baseurl}/signup/`,  {
      email:emailinput,  
      user_type:"user"
    })
    console.log("response", response);
    
return response.data;
}
  catch(error){
    console.log("error", error);
    return {error:true, message:error.response.data.message}

  }
}
export var completeSignup = async (emailinput,token,fullname,username,password) =>{
  console.log("emailinput",emailinput);
  try{
    var response = await axios.post(`${baseurl}/verify-token/`,  {
      email:emailinput,  
      token:token,
      full_name:fullname,
      username:username,
      password:password
    })
    console.log("response", response);
    
return response.data;
}
catch(error){
  console.log("error", error);
  return {error:true, message:error.response.data.message}

}
}

//get username
export var username = async (user_id) => {
  try {
    
    var response = await axios.post(`${baseurl}/get-username/`,  {
      
      user_id: user_id,
    })
    return response.data;
  
  } catch (error) {
    return {error:true, message:error.response.data.message}

   
    
  }}
  //Function to get ProfileInfo
export var getProfileInfo = async (user_id) => {
  try {
    var response = await axios.post(`${baseurl}/get-username-email-fullname/`, {
      user_id: user_id,
    });
    return response.data;
  } catch (error) {
    return { error: true, message: error.response.data.message };
  }
};

//Function to change ProfileInfo
export var changeProfileInfo = async (user_id) => {
  try {
    var response = await axios.post(`${baseurl}/change-username-email-fullname/`, {
      user_id: user_id,
    });
    return response.data;
  } catch (error) {
    return { error: true, message: error.response.data.message };
  }
};

//Function to change Password
export var changePassword = async (user_id) => {
  try {
    var response = await axios.post(`${baseurl}/change-password-logged-in/`, {
      user_id: user_id,
    });
    return response.data;
  } catch (error) {
    return { error: true, message: error.response.data.message };
  }
};

//Function to get user image
export var getUserImg = async (user_id) => {
  try {
    var response = await axios.post(`${baseurl}/get-user-profile-pic/`, {
      user_id: user_id,
    });
    return response.data;
  } catch (error) {
    return { error: true, message: error.response.data.message };
  }
};

export const createPin = async (user_id, wallet_pin) => {
  try {
    const response = await axios.post(`${baseurl}/create-wallet-pin/`, {
      user_id,
      wallet_pin,
    });
    return response.data; // Return the API response
  } catch (error) {
    // Return a standardized error message
    return {
      error: true,
      message: error.response ? error.response.data.message : 'An unexpected error occurred',
    };
  }
};
export const checkPinAvailability = async (user_id) => {
  try {
    const response = await axios.post(`${baseurl}/check-pin-availability/`, {
      user_id: user_id,
    });
    // Check the response message to determine if PIN is set
    return response.data.message === "Pin not set" ? { hasPin: false } : { hasPin: true };
  } catch (error) {
    return {
      error: true,
      message: error.response ? error.response.data.message : 'An unexpected error occurred',
    };
  }
};
const header = {
  headers: {
    'Content-Type': 'application/json',
  },
};

// Define endpoints
const endpoints = {
  getWalletBalance: `${config.baseurl}/get-wallet-balance/`,
  sendMoney: `${config.baseurl}/send-money/`,
  depositMoney: `${config.baseurl}/topup-wallet/`,
  getAllUserTransactions: `${config.baseurl}/get-all-transactions/`,
};

// Function to get wallet balance
export const getWalletBalance = async (user_id) => {
  try {
    const response = await axios.post(endpoints.getWalletBalance, { user_id }, header);
    return response.data; // Return the API response
  } catch (error) {
    return {
      error: true,
      message: error.response ? error.response.data.message : 'An unexpected error occurred',
    };
  }
};

// Function to send money
export const sendMoney = async (sender_id, receiver_username, amount, wallet_pin) => {
  try {
    const response = await axios.post(endpoints.sendMoney, {
      sender_id,
      receiver_username,
      amount,
      wallet_pin,
    }, header);
    return response.data; // Return the API response
  } catch (error) {
    return {
      error: true,
      message: error.response ? error.response.data.message : 'An unexpected error occurred',
    };
  }
};

// Function to deposit money
export const depositMoney = async (amount, user_id) => {
  try {
    const response = await axios.post(endpoints.depositMoney, {
      amount,
      user_id,
    }, header);
    return response.data; // Return the API response
  } catch (error) {
    return {
      error: true,
      message: error.response ? error.response.data.message : 'An unexpected error occurred',
    };
  }
};

// Function to get all user transactions
export const getAllUserTransactions = async (user_id) => {
  try {
    const response = await axios.post(endpoints.getAllUserTransactions, { user_id }, header);
    return response.data; // Return the API response
  } catch (error) {
    return {
      error: true,
      message: error.response ? error.response.data.message : 'An unexpected error occurred',
    };
  }
};
  //get wallet balance
  export var walletbalance = async (user_id) => {
    try {
      var response = await axios.post(`${baseurl}/get-wallet-balance/`, {
        user_id: user_id,
      })
      return response.data;
    } catch (error) {
      return {error:true, message:error.response.data.message}
      
    }
  };
  // Function to get all transactions
export var getAllTransactions = async (user_id) => {
  try {
    var response = await axios.post(`${baseurl}/get-all-transactions/`, {
      user_id: user_id,
    });
    return response.data;
  } catch (error) {
    return { error: true, message: error.response.data.message };
  }
};

