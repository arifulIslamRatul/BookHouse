
import Banner from "../assets/components/Banner"
import Navbar from "../assets/components/Navbar"
import BookData from "../assets/components/BookData";
import  {useNavigation, Outlet } from "react-router-dom";

const Homepage=()=>{
  const navigation = useNavigation();
  return(
    <div>
        <Navbar></Navbar>
        <Banner></Banner>
        <BookData></BookData>
        {navigation.state === "loading" ? <p>Loading...</p> : <Outlet></Outlet>}
    </div>
  );
};

export default Homepage;