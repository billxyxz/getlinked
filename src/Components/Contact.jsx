import { faFacebookF, faInstagram, faLinkedinIn, faXTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import SataGra from "../Assets/Images/satagra.png"
import StarPu from "../Assets/Images/starpu.png"
import Star from "../Assets/Images/staro.png"
import Flare from "../Assets/Images/flare.png"
import { useEffect, useRef } from "react"
import axios from "axios"

const Contact = () => {
  const contactFormRef = useRef();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

    async function handleSubmit(e){
    e.preventDefault();
    const contactFormData= new FormData(contactFormRef.current);
    try {
      axios.post("https://backend.getlinked.ai/hackathon/contact-form", contactFormData)
      .then(response => console.log(response))
    } catch (error) {
      return;
    }
    contactFormRef.current.reset();
  }

  return (
    <section className="w-full min-h-[94vh] bg-[#150E28] text-gray-50 px-12 md:px-20 lg:px-32 py-24 pt-36 md:pt-48 flex flex-col lg:flex-row gap-9 overflow-hidden">
        <div className="relative w-full lg:w-[35%] md:px-8 md:mt-12 z-10">
            <img src={Flare} className=" absolute -left-[35%] -bottom-[30%] lg:bottom-auto -z-10 filter blur-2xl lg:blur-3xl w-full" />
            <img src={SataGra} alt="" className="w-[21px] h-[25px] absolute -top-10 md:-top-16 md:left-12 right-[50%]"  />
            <img src={Star} alt="" className="w-[21px] h-[25px] opacity-40 right-0 top-28 absolute"  />
            <article className=" font-btn flex flex-col gap-3 z-10">
              <h4 className="font-logo text-[32px] font-semibold text-[#D434FE]">Get in touch</h4>
              <p>Contact<br/>Information</p>
              <address>XYZ Street, Unknown, Nigeria.</address>
              <a href="tel:+2348064417586"><span>Call us :</span> 08064417586</a>
              <p>we are open from Monday-Friday<br/>08:00am - 05:00pm</p>
              <div className="hidden lg:flex flex-col">
                <h5 className=" text-[#D434FE] mb-2">Share on</h5>
                <ul className=" flex gap-3">
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
              </div>
            </article>
        </div>
        <div className="relative w-full lg:w-[65%] md:px-8">
          <img src={Flare} className="absolute hidden lg:block -right-[50%] -bottom-[35%] z-0 filter blur-[104px] w-full scale-90" />  
          <img src={StarPu} alt="" className="w-[21px] h-[25px] absolute bottom-24 -right-7 md:left-5" />
          <form onSubmit={handleSubmit} ref={contactFormRef} className="w-full max-w-xl p-4  md:p-14 flex flex-col gap-9 font-btn md:bg-white/[0.03] rounded-xl">
            <h5 className=" font-logo text-xl text-[#D434FE] font-semibold">Questions or need assistance?<br/>Let us know about it!</h5>
            <div 
            className="relative w-full group"
            >
              <input 
              placeholder="First name"
              type="text" 
              className="w-full bg-transparent border py-[6px] px-4 outline-none z-10 placeholder:text-gray-50 placeholder:text-base rounded-[4px]" />
            </div>
            <div 
            className="relative w-full group"
            >
              <input 
              placeholder="Mail"
              type="text" 
              className="w-full bg-transparent border py-[6px] px-4 outline-none z-10 placeholder:text-gray-50 placeholder:text-base rounded-[4px]" />
            </div>
            <div 
            className="relative w-full group"
            >
              <textarea 
              placeholder="Message"
              type="text" 
              className="w-full bg-transparent border py-[6px] px-4 outline-none z-10 placeholder:text-gray-50 placeholder:text-base resize-none rounded-[4px]" />
            </div>
            <button className="bg-gradient-to-r from-[#FE34B9] via-[#D434FE] via-45% to-[#903AFF]  p-2 px-6 md:px-7 rounded-[3px] self-center text-white">Submit</button>
          </form>
          <img src={Star} alt="" className="w-[21px] h-[25px] absolute bottom-9 md:right-52 md:bottom-2" />
        </div>
        <div className="flex lg:hidden items-center flex-col">
                <h5 className=" text-[#D434FE] mb-2">Share on</h5>
                <ul className=" flex gap-3">
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
              </div>
    </section>
  )
}
export default Contact