// Function to check if the current route is active
export function isauthenticated(){
  var authenticated =localStorage.getItem("userid")?true:false;
  return authenticated;
}
export function isActive(myroute) {
    return window.location.pathname === myroute? true: false;
  }
  // Config for route paths
  export const config = {
    baseurl:"https://radar2.pythonanywhere.com",
    routeconfig: {
      dashboard: "/dashboard",
      overview: "/overview",
      wallet: "/wallet",
      history: "/history",
      account: "/account",
      support: "/support",
      sendMoney:"/send-money",
      deposit:"/deposit" ,
      pay:"/pay" ,
      walletLogin:"/walletLogin",
      contact:"/contact" 
    },
    loginstate:["signup", "login"]
  };
  export const navigateToLoginSignup = () => {
    window.location.replace("/walletLogin")
  };
  
  // Function to toggle sidebar visibility
  export const toggleSidebar = (sidebarRef, setSidebarActive) => {
    const isCurrentlyActive = sidebarRef.current.classList.contains('active');
    setSidebarActive(!isCurrentlyActive);
    sidebarRef.current.classList.toggle('active', !isCurrentlyActive);
  };
  
  // Function to hide the toggle button on wide screens
  export const handleResize = (setSidebarActive) => {
    const windowWidth = window.innerWidth;
    if (windowWidth > 768) {
      setSidebarActive(true); // Show sidebar on wide screens
    } else {
      setSidebarActive(false); // Hide sidebar on smaller screens by default
    }
  };
  
// Toggles the visibility of a password input field.
export const toggleVisibility = (isVisible, setIsVisible) => {
  setIsVisible(!isVisible);
};
/* End of Account*/