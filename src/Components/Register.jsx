import Illustration from "../Assets/Images/register.png"
import Boy from "../Assets/Images/boy.png"
import Girl from "../Assets/Images/girl.png"
import SataGra from "../Assets/Images/satagra.png"
import StarPu from "../Assets/Images/starpu.png"
import Star from "../Assets/Images/staro.png"
import Flare from "../Assets/Images/flare.png"
import  SuccessMan from "../Assets/Images/success-man.png"
import SuccessDone from "../Assets/Images/success-done.png"
import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"




const Register = () => {
  const [registered, setRegistered] = useState(false);
  const formRef = useRef()
  const Navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0,0)
  }, [registered]);

  async function handleSubmit(e){
    e.preventDefault();
    const formData= new FormData(formRef.current);
    try {
      axios.post("https://backend.getlinked.ai/hackathon/registration", formData)
      .then(response => console.log(response))
    } catch (error) {
      return;
    }
    formRef.current.reset();
    setRegistered(true);
  }

  return (
    <section className="relative w-full min-h-screen bg-[#150E28] text-gray-50 px-12 md:px-20 lg:px-32 lg:pl-20 py-24 pt-36 md:pt-48 flex flex-col lg:flex-row gap-9 overflow-hidden">
        <div className="relative lg:w-[55%] z-10">
          <img src={Flare} className=" absolute -left-[35%] -bottom-[30%] lg:bottom-auto z-0 filter blur-2xl lg:blur-3xl w-full" />
          <img src={SataGra} alt="" className="absolute top-2 left-24 w-[21px] h-[25px]" />
          <img src={StarPu} alt="" className="absolute bottom-24 md:bottom-[210px] right-10 md:right-16 w-[21px] h-[25px]" />
          <img 
          src={Illustration} 
          alt="register" 
          className="w-full aspect-square object-fill z-10"
          />
          <img src={Star} alt="" className="absolute md:bottom-[100px] left-7 md:left-24 w-[21px] h-[25px] opacity-30" />
        </div>
        <div className="relative lg:w-[65%] md:p-14 md:bg-white/[0.03] rounded-xl z-10">
            <img src={Flare} className="absolute hidden lg:block -right-[70%] -bottom-[35%] z-0 filter blur-3xl w-full" />
            <img src={Star} alt="" className="absolute hidden md:block md:top-7 right-32 w-[26px] h-[32px] opacity-30" />
            <h4 className=" font-logo text-[32px] text-[#D434FE]">Register</h4>
            <article className="flex items-baseline md:gap-5 mb-5">
                <p className=" font-btn text-sm">Be part of this movement</p>
                <div className="flex items-end border-b-[3px] border-dashed border-[#D434FE] px-4">
                    <img src={Girl} alt="male-walking" className="w-[26px] h-[26px] -scale-x-100" />
                    <img src={Boy} alt="female-walking" className="w-[30px] h-[30px] -scale-x-100" />
                </div>
            </article>
            <p className="uppercase font-btn text-2xl">Create your account</p>
            <form 
            onSubmit={handleSubmit}
            ref={formRef}
            className="font-btn w-full text-sm mt-7">
                <div className=" w-full grid grid-cols-2 gap-5 md:gap-7">
                  <div className=" col-span-2 lg:col-auto">
                    <label 
                    htmlFor="team-name"
                    className="block mb-[6px]"
                    >Team's name</label>
                    <input 
                    required
                    type="text" 
                    id="team-name" 
                    name="team-name"
                    placeholder="Enter the name of your group"
                    className="w-full p-[10px] px-4 rounded-[4px] bg-transparent border outline-none"
                     />
                  </div>
                  <div className=" col-span-2 lg:col-auto">
                    <label 
                    htmlFor="phone-no"
                    className="block mb-[6px]"
                    >Phone</label>
                    <input 
                    required
                    type="tel" 
                    id="phone-no" 
                    name="phone-no"
                    placeholder="Enter your phone number"
                    className="w-full p-[10px] px-4 rounded-[4px] bg-transparent border outline-none"
                     />
                  </div>
                  <div className=" col-span-2 lg:col-auto">
                    <label 
                    htmlFor="email"
                    className="block mb-[6px]"
                    >Email</label>
                    <input 
                    required
                    type="email" 
                    id="email" 
                    name="email"
                    placeholder="Enter your email address"
                    className="w-full p-[10px] px-4 rounded-[4px] bg-transparent border outline-none"
                     />
                  </div>
                  <div className=" col-span-2 lg:col-auto">
                    <label 
                    htmlFor="project-topic"
                    className="block mb-[6px]"
                    >Project Topic</label>
                    <input 
                    required
                    type="text" 
                    name="project-topic"
                    id="project-topic" 
                    placeholder="What is your group project topic"
                    className="w-full p-[10px] px-4 rounded-[4px] bg-transparent border outline-none"
                     />
                  </div>
                  <div>
                    <label 
                    htmlFor="category"
                    className="block mb-[6px]"
                    >Category</label>
                    <select 
                    required
                    name="category" 
                    id="category"
                    className="w-full p-[10px] px-4 rounded-[4px] bg-transparent border outline-none appearance-none"
                    >
                        <option value="" className=" text-gray-900">Select your category</option>
                        <option value="Cyber Security" className=" text-gray-900">Cyber Security</option>
                        <option value="DevOps" className=" text-gray-900">DevOps</option>
                        <option value="Web Development" className=" text-gray-900">Web Development</option>
                        <option value="Data Analytics" className=" text-gray-900">Data Analytics</option>
                    </select>
                  </div>
                  <div>
                    <label 
                    htmlFor="group-size"
                    className="block mb-[6px]"
                    >Group Size</label>
                    <select 
                    required
                    name="group-size" 
                    id="group-size"
                    className="w-full p-[10px] px-4 rounded-[4px] bg-transparent border outline-none appearance-none"
                    >
                        <option value="" className=" text-gray-900">Select</option>
                        <option value={2} className=" text-gray-900">2</option>
                        <option value={3} className=" text-gray-900">3</option>
                        <option value={4} className=" text-gray-900">4</option>
                        <option value={5} className=" text-gray-900">5</option>
                    </select>
                  </div>
                </div>
                <p className=" italic text-[#D434FE] my-3 text-xs">Please review your registration details before submitting</p>
                <input required type="checkbox" name="agreed" id="agreed" className="mr-2" />
                <label htmlFor="agreed text-xs">I agreed with the event terms and conditions  and privacy policy</label>
                <button className="bg-gradient-to-r from-[#FE34B9] via-[#D434FE] via-45% to-[#903AFF]  py-3 rounded-[3px] text-white flex w-full justify-center items-center mt-3">Register Now</button>
            </form>
            <img src={SataGra} alt="" className="absolute md:hidden bottom-[186px] right-0 w-[21px] h-[25px]" />
        </div>
        {
          registered && <section className="absolute w-full h-full top-0 left-0 bg-gray-950/[0.9] text-gray-50 flex justify-center items-start z-50 pt-12 md:pt-24">{/**Confirmation */}
          <div className="relative border py-9 md:py-14 px-6 md:px-12 flex flex-col justify-center items-center">
            <img src={StarPu} className="absolute w-[21px] h-[26px] -right-4 -top-8 opacity-90" />
            <img src={Star} className="absolute w-[21px] h-[26px] left-[22%] top-[34%] opacity-50" />
            <img src={SataGra} className="absolute w-[21px] h-[26px] right-9 bottom-6 opacity-70" />
            <div className="flex">
              <img loading="lazy" src={SuccessDone} alt="success-done" className="w-[144px] h-[144px] md:w-[174px] md:h-[174px]" />
              <img loading="lazy" src={SuccessMan} alt="success-man" className="w-[154px] h-[154px] md:w-[184px] md:h-[184px] -ml-[100px]" />
            </div>
            <article className=" text-center font-btn font-semibold">
              <h5 className=" text-lg md:text-[32px] mb-2">Congratulations<br/>you have successfully registered!</h5>
              <p className=" text-sm mb-7">Yes, it was easy an you did it!<br/>check your mail box for next step &#128512;</p>
            </article>
            <button 
            onClick={() => Navigate("/")}
            className="bg-gradient-to-r from-[#FE34B9] via-[#D434FE] via-45% to-[#903AFF]  py-3 rounded-[3px] text-white flex w-full justify-center items-center">Back</button>
          </div>
        </section>
        }
    </section>
  )
}
export default Register