import { useState } from "react"
import { Xmark } from "../Icons/icons"
import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    const [showNav, setShowNav] = useState(false);

    function handleActiveLink({ isActive }){
        return {
            color: isActive ? "#D434FE" : "",
            fontWeight: isActive ? "bold" : "",
        }
    }

    function handleFaqInView(e){
        e.preventDefault();
        let faq = document.getElementById("faqs");
        faq && faq.scrollIntoView();
        setShowNav(false);
      }

  return (
    <header className="fixed top-0 left-0 w-full px-12 md:px-20 lg:px-32 flex justify-between items-center py-4 md:py-[30px] pb-[20px] border-b bg-[#150E28] z-40">
        <Link 
        to="/"
        onClick={() => setShowNav(false)}
        > 
          <h3 className="text-[#FFFFFF] font-logo text-[24px] sm:text-3xl lowercase font-bold cursor-pointer">get<span className=" text-[#D434FE]">linked</span></h3>
        </Link>
        {
            showNav ? <div 
            onClick={() => setShowNav(false)}
            className="md:hidden border rounded-full border-[#D434FE] cursor-pointer"><Xmark /></div> : <div
             onClick={() => setShowNav(true)}
             className="md:hidden w-[19px] h-[13px] flex flex-col justify-between cursor-pointer">{/** Custom Hamburger Menu Bar */}
            <div className=" w-2/5 h-[3px] bg-[#FFFFFF] rounded-full"></div>
            <div className=" w-full h-[3px] bg-[#FFFFFF] rounded-full"></div>
            <div className=" w-2/5 h-[3px] bg-[#FFFFFF] rounded-full self-end"></div>
        </div>
        }

        <nav className={`absolute left-0 top-[71px] md:top-0 md:relative flex flex-col md:flex-row w-full md:w-auto justify-between md:items-center p-12 gap-6 md:gap-0 md:p-0 bg-[#150E28] md:bg-transparent md:translate-x-0 ${showNav ? "" : "translate-x-full"} transition-all`}>
            <ul className="flex flex-col md:flex-row text-lg md:text-base lg:text-lg font-medium gap-3 md:gap-6 text-white">
                <li><a href="/">Timeline</a></li>
                <li><a href="/">Overview</a></li>
                <li><NavLink
                onClick={handleFaqInView}
                to="/">FAQs</NavLink></li>
                <li><NavLink 
                onClick={() => setShowNav(false)}
                style={handleActiveLink}
                to="/contact">Contact</NavLink></li>
            </ul>
            <NavLink 
            onClick={() => setShowNav(false)}
            to="/register"
            style={({isActive}) => ({
                background: isActive ? "transparent" : "",
                borderStyle: "solid",
                borderColor: "transparent",
                borderWidth: isActive ? "2px" : "",
                borderImage: isActive ? "linear-gradient(#9A39FF, #D434FE) 1" : ""
            })} 
            className="flex justify-center items-center md:hidden text-[#FFFFFF] bg-gradient-to-r from-[#FE34B9] via-[#D434FE] via-45% to-[#903AFF]  w-[172px] h-[53px] font-btn rounded-[4px]">Register</NavLink>
        </nav>
        <NavLink
        style={({isActive}) => ({
            background: isActive ? "transparent" : "",
            borderStyle: "solid",
            borderColor: "transparent",
            borderWidth: isActive ? "2px" : "",
            borderImage: isActive ? "linear-gradient(#9A39FF, #D434FE) 1" : ""
        })} 
        to="/register"
        className="hidden md:flex justify-center items-center text-[#FFFFFF] bg-gradient-to-r from-[#FE34B9] via-[#D434FE] via-45% to-[#903AFF]  w-[172px] h-[53px] font-btn rounded-[4px]">Register</NavLink>
    </header>
  )
}
export default Navbar