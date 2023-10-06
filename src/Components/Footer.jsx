import { faFacebookF, faInstagram, faLinkedinIn, faXTwitter } from "@fortawesome/free-brands-svg-icons"
import { faLocationDot, faPhone, faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import SataGra from "../Assets/Images/satagra.png"
import StarPu from "../Assets/Images/starpu.png"
import Star from "../Assets/Images/staro.png"

const Footer = () => {
  return (
    <footer className="relative text-[#FFFFFF] bg-[#100B20] px-12 md:px-20 lg:px-32 pt-12">
        <img src={Star} className="absolute w-[21px] h-[26px] left-[4%] top-[28%]" />
        <img src={Star} className="absolute w-[18pxpx] h-[21px] right-[30%] top-[20%] opacity-40" />
        <img src={Star} className="absolute w-[21px] h-[26px] right-[4%] bottom-[28%]" />
        <img src={SataGra} className="absolute w-[21px] h-[26px] left-[48%] bottom-[16%] opacity-70" />
        <div className="w-full flex flex-wrap justify-between gap-7">
            <article className=" font-btn text-xs max-w-[420px] min-w-[300px]">
              <h3 className=" font-logo text-[16px] sm:text-3xl lowercase font-bold cursor-pointer mb-3">get<span className=" text-[#D434FE]">linked</span></h3>
              <p >Getlinked Tech Hackathon is a technology innovation program established by a group of organizations with the aim of showcasing young and talented individuals in the field of technology</p>
              <h5 className="mt-8 md:mt-14 flex gap-4">
                <span>Terms of Use</span>
                <div className="h-[17px] w-[3px] bg-[#D434FE] rounded-full"></div>
                <span>Privacy Policy</span>
              </h5>
            </article>
            <article className="font-btn text-xs">
                <h4 className=" font-semibold text-sm text-[#D434FE] mb-3">Useful Links</h4>
                <ol className="flex flex-col gap-4 mb-3">
                    <li>Overview</li>
                    <li>Timeline</li>
                    <li>FAQs</li>
                    <li>Register</li>
                </ol>
                <ul className="flex items-center gap-3">
                    <li className="text-[#D434FE]">Follow us</li>
                    <li>
                      <FontAwesomeIcon 
                      icon={faInstagram}
                      className=" text-2xl"
                      />
                    </li>
                    <li>
                      <FontAwesomeIcon 
                      icon={faXTwitter}
                      className=" text-2xl"
                      />
                    </li>
                    <li>
                      <FontAwesomeIcon 
                      icon={faFacebookF}
                      className=" text-2xl"
                      />
                    </li>
                    <li>
                      <FontAwesomeIcon 
                      icon={faLinkedinIn}
                      className=" text-2xl"
                      />
                    </li>
                </ul>
            </article>
            <article className="font-btn text-xs">
              <h4 className=" font-semibold text-sm text-[#D434FE] mb-3">Contact Us</h4>
              <article className=" flex flex-col gap-3">
                <a href="tel:+2348064417586"><FontAwesomeIcon 
                      icon={faPhone}
                      className="mr-3"
                      />+234 8064417586</a>
                <address><FontAwesomeIcon 
                      icon={faLocationDot}
                      className="mr-3"
                      />XYZ Street, Unknown, Nigeria.</address>
              </article>
            </article>
        </div>
        <p className=" text-center py-6">All rights reserved &copy; getlinked Ltd.</p>
    </footer>
  )
}
export default Footer