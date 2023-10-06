import Chain from "../Assets/Images/chain.png"
import MaskMan from "../Assets/Images/maskMan.png"
import Nomen from "../Assets/Images/nomen.png"
import Flare from "../Assets/Images/flare.png"
import Star from "../Assets/Images/star.png"
import Ideas from "../Assets/Images/ideas.png"
import Rules from "../Assets/Images/Rules.png"
import Criteria from "../Assets/Images/analysis.png"
import Curious from "../Assets/Images/Curious.png"
import Reward from "../Assets/Images/reward.png"
import Silver from "../Assets/Images/silver.png"
import Gold from "../Assets/Images/gold.png"
import Bronze from "../Assets/Images/bronze.png"
import Liberty from "../Assets/Images/liberty.png"
import LibertyPay from "../Assets/Images/libertypay.png"
import WinWise from "../Assets/Images/winwise.png"
import Whisper from "../Assets/Images/whisper.png"
import Privacy from "../Assets/Images/privacy.png"
import SataGra from "../Assets/Images/satagra.png"
import StarPu from "../Assets/Images/starpu.png"
import Staro from "../Assets/Images/staro.png"
import Vector from "../Assets/Images/vector.png"
import Vuzual from "../Assets/Images/vuzual.png"
import QuestionMark from "../Assets/Images/question-mark.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import { useEffect, } from "react"
import { Shield } from "../Assets/svgs/Svgs"
import FAQs from "./FAQs"
import { useNavigate } from "react-router-dom"



const Body = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);


  return (
    <main className="relative w-full min-h-screen bg-[#150E28] text-[#FFFFFF] overflow-hidden pt-[90px] md:pt-[154px]">
        <article className="absolute left-12 md:left-auto lg:right-32 lg:top-[108px] md:right-20 font-btn ">
          <h4 className="font-bold italic text-sm md:text-3xl ">Igniting a revolution in HR Inovation</h4>
          <img src={Vector} className="absolute w-[124px] md:w-[194px] right-0" />
        </article>
        <section className="relative px-12 md:px-20 lg:pb-[15px] lg:px-32 flex flex-col lg:flex-row w-full mt-10 ">{/**Hero Section */}
            <div className="relative w-full lg:w-[55%] h-full mb-7 lg:mb-0">
                <img src={Flare} className=" absolute -left-28 -top-[150px] z-0 opacity-30 w-full h-[400px] blur-3xl" />
                <article className="flex flex-col w-full font-btn ">
                  <span 
                  className="text-[32px] sm:text-[54px] xl:text-[74px] font-logo font-bold tracking-tighter leading-tight z-10">getlinked Tech</span>
                  <div className=" flex items-center flex-wrap xl:flex-nowrap w-full">
                    <span className="text-[32px] sm:text-[54px] xl:text-[74px] font-logo font-bold tracking-tighter  leading-tight flex mr-1 z-30">Hackathon <span className=" text-[#D434FE]">1.0</span></span>
                    <span><img src={Chain} className="w-[32.8px] h-[32.8px]  md:w-[86px] md:h-[86px]"/></span>
                    <span>
                      <img src={Star} className="w-[32.8px] h-[32.8px] md:w-[86px] md:h-[86px]" alt="" />
                    </span>
                  </div>
                  <p className=" text-[20px] mt-2 z-30">Participate in getlinked tech Hackathon 2023 stand<br/>a chance to win a Big prize</p>
                  <button 
                  onClick={() => navigate("/register")}
                  className="mt-5 text-[#FFFFFF] bg-gradient-to-r from-[#FE34B9] via-[#D434FE] via-45% to-[#903AFF]  w-[172px] h-[53px] font-btn rounded-[4px] z-10">Register</button>
                </article>
                <div className="mt-5 flex gap-5">
                  <p className=" font-unica text-[64px]">00<span className=" text-lg">H</span></p>
                  <p className=" font-unica text-[64px]">00<span className=" text-lg">M</span></p>
                  <p className=" font-unica text-[64px]">00<span className=" text-lg">S</span></p>
                </div>
            </div>
            <div className="w-full lg:w-[45%] h-full">{/**Hero-Image Section */}
              <div className="relative w-full h-full object-cover">
                <img 
                loading="lazy"
                src={MaskMan} alt="" className="relative lg:absolute w-full lg:scale-x-[1.3] lg:scale-y-[1.15]  z-10 filter grayscale" />
                <img src={Nomen} alt="" className="absolute z-20 w-[660px] -left-3 -top-16 filter grayscale-[18%]" />
                <img src={Flare} alt="" className="hidden md:flex absolute -top-12 z-0" />
              </div>
            </div>
        </section>{/** END Hero-Section */}

        <section className="flex flex-col lg:flex-row gap-9 lg:gap-0 w-full px-12 md:px-20 lg:px-32 py-12 md:py-24 border-y items-center">{/**Ideas Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img src={Ideas} className="w-[65%]" alt="" />
          </div>
          <article className="w-full lg:w-1/2 text-center lg:text-left">
            <h4 className=" font-logo text-xl lg:text-[32px] font-bold leading-snug tracking-tight mb-5 ">Introduction to getlinked<br/><span className=" text-[#D434FE]">tech Hackathon 1.0</span></h4>
            <p className=" font-btn text-[13px] lg:text-sm leading-7 tracking-snug lg:tracking-wide">Our tech hackathon is a melting pot of visionaries, and its purpose is as
            clear as day: to shape the future. Whether you're a coding genius, a 
            design maverick, or a concept wizard, you'll have the chance to transform 
            your ideas into reality. Solving real-world problems, pushing the boundaries
            of technology, and creating solutions that can change the world,
            that's what we're all about!</p>
          </article>
        </section>{/**END Ideas Section */}
        <section className="relative flex flex-col lg:flex-row-reverse gap-9 lg:gap-0 w-full px-12 md:px-20 lg:px-32 border-y items-center">{/**Rules Section */}
          <div className="relative w-full lg:w-1/2 flex justify-center">
            <img src={Flare} className="absolute lg:hidden z-0 -bottom-[10%]  blur-[100px]" alt="" />
            <img src={Rules} className="w-full z-10" alt="" />
          </div>
          <article className=" w-full lg:w-1/2 text-center lg:text-left z-10">
            <img src={Flare} className="absolute hidden lg:block scale-[.65] -top-14 -left-10 z-0  blur-[250px]" alt="" />
            <h4 className=" font-logo text-xl lg:text-[32px] font-bold leading-snug tracking-tight mb-5 ">Rules and<br/><span className=" text-[#D434FE]">Guidelines</span></h4>
            <p className=" font-btn text-[13px] lg:text-sm leading-7 tracking-snug lg:tracking-wide">Our tech hackathon is a melting pot of visionaries, and its purpose is as
            clear as day: to shape the future. Whether you're a coding genius, a 
            design maverick, or a concept wizard, you'll have the chance to transform 
            your ideas into reality. Solving real-world problems, pushing the boundaries
            of technology, and creating solutions that can change the world,
            that's what we're all about!</p>
          </article>
        </section>{/**END Rules Section */}
        <section className="relative flex flex-col lg:flex-row gap-9 lg:gap-0 w-full px-12 md:px-20 lg:px-32 py-12 md:py-24 border-y items-center">{/**Criteria Section */}
          <img src={Flare} className=" absolute md:left-0 -left-[14%] lg:bottom-0 bottom-[40%] z-0 opacity-30 lg:w-[50%] h-[70%] blur-3xl" alt="" />
          <div className="w-full lg:w-1/2 flex justify-center">
            <img src={Criteria} className="w-full" alt="" />
          </div>
          <article className="w-full lg:w-1/2 text-center lg:text-left">
            <h4 className=" font-logo text-xl lg:text-[32px] font-bold leading-snug tracking-tight mb-5 ">Judging Criteria<br/><span className=" text-[#D434FE]">Key Attributes</span></h4>
            <ol className=" flex flex-col gap-4 mb-9">
              <li>
                <p className="font-btn font-normal text-sm"><span className=" text-[#D434FE] font-bold text-base">Inovation and creativity: </span>Evaluate the uniqueness and creativity of the
                solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.</p>
              </li>
              <li>
                <p className="font-btn font-normal text-sm"><span className=" text-[#D434FE] font-bold text-base">Functionality: </span>Assess how well the solution works. Does it perform its 
                intended functions effectively and without major issues? Judges would
                consider the completeness and robustness of the solution.</p>
              </li>
              <li>
                <p className="font-btn font-normal text-sm"><span className=" text-[#D434FE] font-bold text-base">Impact and Relevance: </span>Determine the potential impact of the solution 
                in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.</p>
              </li>
              <li>
                <p className="font-btn font-normal text-sm"><span className=" text-[#D434FE] font-bold text-base">Technical Complexity: </span>Evaluate the technical sophistication of the solution. 
                Judges would consider the complexity of the code, the use of advanced 
                technologies or algorithms, and the scalability of the solution.</p>
              </li>
              <li>
                <p className="font-btn font-normal text-sm"><span className=" text-[#D434FE] font-bold text-base">Adherence to Hackathon Rules: </span>Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.</p>
              </li>
            </ol>
            <button className="text-[#FFFFFF] bg-gradient-to-r from-[#FE34B9] via-[#D434FE] via-45% to-[#903AFF]  w-[172px] h-[53px] font-btn rounded-[4px]">Register</button>
          </article>
        </section>{/**END Criteria Section */}
        <section id="faqs" className="relative flex flex-col lg:flex-row-reverse gap-9 lg:gap-0 w-full px-12 md:px-20 lg:px-32 py-24 md:py-24 border-y items-center scroll-mt-16 lg:scroll-mt-[90px]">{/**Rules Section */}
          <img src={Flare} className="absolute -right-[430px] -top-[350px] blur-3xl opacity-30" />
          <div className="relative w-full lg:w-1/2">
            <img src={SataGra}  className="absolute w-[21px] h-[26px] -top-7 left-[50%] grayscale-[30%]" />{/**Star */}
            <img src={SataGra} className="absolute w-[21px] h-[26px] top-[17%] left-[21%] grayscale-[30%]" />{/**Star */}
            <img src={Staro} className="absolute w-[21px] h-[26px] left-[7%] bottom-[47%] opacity-40" />{/**Star */}
            <img src={QuestionMark} className="absolute -top-[84px] left-4"  />
            <img src={Curious} className="w-full" alt="Curious-person" />
            <img src={Staro} className="absolute w-[21px] h-[26px] -bottom-[3%] right-[22%]" />{/**Star */}
          </div>
          <article className="relative w-full lg:w-1/2 text-center lg:text-left">
            <img src={StarPu} className="absolute w-[21px] h-[26px] -top-7 -left-1 grayscale-[30%]" />
            <h4 className=" font-logo text-xl lg:text-[32px] font-bold leading-snug tracking-tight mb-5 ">Frequently Asked<br/><span className=" text-[#D434FE]">Questions</span></h4>
            <p className=" font-btn text-sm mb-8">We got answers to the questions that you might<br/>
            want to ask about <span className=" text-base font-bold">getlinked Hackathon 1.0</span></p>
            <FAQs />
          </article>
        </section>{/**END of FAQs Section */}
        <section className="w-full px-12 md:px-20 lg:px-32 py-12 md:py-24 border-y">{/**ANNOUNCEMENT Section */}
          <h4 className=" font-logo text-[32px] font-bold tracking-tight text-center mb-3">Timeline</h4>
          <p className=" font-btn text-sm text-center mb-9 max-w-xs mx-auto">Here is the breakdown of the time we anticipate using for the upcoming event.</p>
          <ol className="relative w-full flex flex-col gap-7 md:gap-0">
            <img src={StarPu} className="absolute w-[21px] h-[26px] left-[10%] -top-[1%] grayscale-[20%]" />{/**Star */}
            <img src={Staro} className="absolute w-[21px] h-[26px] right-[10%] top-[37%] grayscale-[20%]" />{/**Star */}
            <img src={Staro} className="absolute w-[21px] h-[26px] left-[3%] bottom-[8%] opacity-40" />{/**Star */}
            <li className="flex gap-3 md:flex-none">{/**Announcement */}
              <div className=" flex flex-col items-center gap-1 md:hidden">
              <div className=" h-[75px] w-[3px] bg-[#D434FE]"></div>
              <div className=" bg-gradient-to-r from-[#D434FE] to-[#903AFF] w-[20px] h-[20px] rounded-full flex justify-center items-center text-xs font-bold ">1</div>
              </div>
              <article className=" font-btn text-xs md:text-sm flex flex-col md:items-center md:flex-row md:gap-20 md:mx-auto gap-2 w-full lg:max-w-5xl">
                <article className="max-w-[280px] md:max-w-[414px] md:text-right">
                  <h5 className=" font-bold text-[#D434FE] md:text-2xl mb-2 ">Hackathon Announcement</h5>
                  <p>The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register</p>
                </article>
                <div className=" hidden md:flex flex-col gap-1 items-center mb-12">
                  <div className=" h-[77px] w-[3px] bg-[#D434FE]"></div>
                  <div className=" w-[53px] h-[53px] rounded-full bg-gradient-to-r from-[#D434FE] to-[#903AFF] flex justify-center items-center font-btn font-bold text-2xl">1</div>
                </div>
                <h5 className="font-bold text-[#D434FE] md:text-2xl">November 18, 2023</h5>
              </article>
            </li>
            <li className="flex gap-3 md:flex-none">{/**Announcement 2*/}
              <div className=" flex flex-col items-center gap-1 md:hidden">
              <div className=" h-[75px] w-[3px] bg-[#D434FE]"></div>
              <div className=" bg-gradient-to-r from-[#D434FE] to-[#903AFF] w-[20px] h-[20px] rounded-full flex justify-center items-center text-xs font-bold ">2</div>
              </div>
              <article className=" font-btn text-xs md:text-sm flex flex-col md:items-center md:flex-row md:gap-20 md:mx-auto gap-2 w-full lg:max-w-5xl">
                <article className="max-w-[280px] md:min-w-[414px] flex flex-col md:text-right">
                  <h5 className="hidden md:block font-bold text-[#D434FE] md:text-2xl mb-2 ">Novermber 18, 2023</h5>
                  <h5 className="block md:hidden font-bold text-[#D434FE] md:text-2xl mb-2 ">Teams Registration begins</h5>
                  <p className="block md:hidden">The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register</p>
                </article>
                <div className=" hidden md:flex flex-col gap-1 items-center mb-12">
                  <div className=" h-[77px] w-[3px] bg-[#D434FE]"></div>
                  <div className=" w-[53px] h-[53px] rounded-full bg-gradient-to-r from-[#D434FE] to-[#903AFF] flex justify-center items-center font-btn font-bold text-2xl">2</div>
                </div>
                <article className="max-w-[280px] md:max-w-[414px]">
                  <h5 className="block md:hidden font-bold text-[#D434FE] md:text-2xl">November 18, 2023</h5>
                  <h5 className="hidden md:block font-bold text-[#D434FE] md:text-2xl">Teams Resgistration begins</h5>
                  <p className="hidden md:block">The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register</p>
                </article>
              </article>
            </li>
            <li className="flex gap-3 md:flex-none">{/**Announcement 3*/}
              <div className=" flex flex-col items-center gap-1 md:hidden">
              <div className=" h-[75px] w-[3px] bg-[#D434FE]"></div>
              <div className=" bg-gradient-to-r from-[#D434FE] to-[#903AFF] w-[20px] h-[20px] rounded-full flex justify-center items-center text-xs font-bold ">3</div>
              </div>
              <article className=" font-btn text-xs md:text-sm flex flex-col md:items-center md:flex-row md:gap-20 md:mx-auto gap-2 w-full lg:max-w-5xl">
                <article className="max-w-[280px] md:min-w-[414px] md:text-right">
                  <h5 className=" font-bold text-[#D434FE] md:text-2xl mb-2 ">Team Registration ends</h5>
                  <p>Interested Participants are no longer Allowed to register</p>
                </article>
                <div className=" hidden md:flex flex-col gap-1 items-center mb-12">
                  <div className=" h-[77px] w-[3px] bg-[#D434FE]"></div>
                  <div className=" w-[53px] h-[53px] rounded-full bg-gradient-to-r from-[#D434FE] to-[#903AFF] flex justify-center items-center font-btn font-bold text-2xl">3</div>
                </div>
                <h5 className="font-bold text-[#D434FE] md:text-2xl">November 18, 2023</h5>
              </article>
            </li>
            <li className="flex gap-3 md:flex-none">{/**Announcement 4*/}
              <div className=" flex flex-col items-center gap-1 md:hidden">
              <div className=" h-[75px] w-[3px] bg-[#D434FE]"></div>
              <div className=" bg-gradient-to-r from-[#D434FE] to-[#903AFF] w-[20px] h-[20px] rounded-full flex justify-center items-center text-xs font-bold ">4</div>
              </div>
              <article className=" font-btn text-xs md:text-sm flex flex-col md:items-center md:flex-row md:gap-20 md:mx-auto gap-2 w-full lg:max-w-5xl">
                <article className="max-w-[280px] md:min-w-[414px] flex- flex-col md:text-right">
                  <h5 className="hidden md:block font-bold text-[#D434FE] md:text-2xl mb-2 ">Novermber 18, 2023</h5>
                  <h5 className="block md:hidden font-bold text-[#D434FE] md:text-2xl mb-2 ">Announcement of the acceptable teams and ideas</h5>
                  <p className="block md:hidden">All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced</p>
                </article>
                <div className=" hidden md:flex flex-col gap-1 items-center mb-12">
                  <div className=" h-[77px] w-[3px] bg-[#D434FE]"></div>
                  <div className=" w-[53px] h-[53px] rounded-full bg-gradient-to-r from-[#D434FE] to-[#903AFF] flex justify-center items-center font-btn font-bold text-2xl">4</div>
                </div>
                <article className="max-w-[280px] md:max-w-[414px]">
                  <h5 className="block md:hidden font-bold text-[#D434FE] md:text-2xl">November 18, 2023</h5>
                  <h5 className="hidden md:block font-bold text-[#D434FE] md:text-2xl">Announcement of the accepted teams and ideas</h5>
                  <p className="hidden md:block">All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced</p>
                </article>
              </article>
            </li>
            <li className="flex gap-3 md:flex-none">{/**Announcement 5*/}
              <div className=" flex flex-col items-center gap-1 md:hidden">
              <div className=" h-[75px] w-[3px] bg-[#D434FE]"></div>
              <div className=" bg-gradient-to-r from-[#D434FE] to-[#903AFF] w-[20px] h-[20px] rounded-full flex justify-center items-center text-xs font-bold ">5</div>
              </div>
              <article className=" font-btn text-xs md:text-sm flex flex-col md:items-center md:flex-row md:gap-20 md:mx-auto gap-2 w-full lg:max-w-5xl">
                <article className="max-w-[280px] md:min-w-[414px] md:text-right">
                  <h5 className=" font-bold text-[#D434FE] md:text-2xl mb-2 ">Getlinked Hackathon 1.0 Officially Begins</h5>
                  <p>Accepted teams can now proceed to build their ground breaking skill driven solutions</p>
                </article>
                <div className=" hidden md:flex flex-col gap-1 items-center mb-12">
                  <div className=" h-[77px] w-[3px] bg-[#D434FE]"></div>
                  <div className=" w-[53px] h-[53px] rounded-full bg-gradient-to-r from-[#D434FE] to-[#903AFF] flex justify-center items-center font-btn font-bold text-2xl">5</div>
                </div>
                <h5 className="font-bold text-[#D434FE] md:text-2xl">November 18, 2023</h5>
              </article>
            </li>
            <li className="flex gap-3 md:flex-none">{/**Announcement 6*/}
              <div className=" flex flex-col items-center gap-1 md:hidden">
              <div className=" h-[75px] w-[3px] bg-[#D434FE]"></div>
              <div className=" bg-gradient-to-r from-[#D434FE] to-[#903AFF] w-[20px] h-[20px] rounded-full flex justify-center items-center text-xs font-bold ">6</div>
              </div>
              <article className=" font-btn text-xs md:text-sm flex flex-col md:items-center md:flex-row md:gap-20 md:mx-auto gap-2 w-full lg:max-w-5xl">
                <article className="max-w-[280px] md:min-w-[414px] flex- flex-col md:text-right">
                  <h5 className="hidden md:block font-bold text-[#D434FE] md:text-2xl mb-2 ">Novermber 18, 2023</h5>
                  <h5 className="block md:hidden font-bold text-[#D434FE] md:text-2xl mb-2 ">Demo Day</h5>
                  <p className="block md:hidden">Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day</p>
                </article>
                <div className=" hidden md:flex flex-col gap-1 items-center mb-12">
                  <div className=" h-[77px] w-[3px] bg-[#D434FE]"></div>
                  <div className=" w-[53px] h-[53px] rounded-full bg-gradient-to-r from-[#D434FE] to-[#903AFF] flex justify-center items-center font-btn font-bold text-2xl">6</div>
                </div>
                <article className="max-w-[280px] md:max-w-[414px]">
                  <h5 className="block md:hidden font-bold text-[#D434FE] md:text-2xl">November 18, 2023</h5>
                  <h5 className="hidden md:block font-bold text-[#D434FE] md:text-2xl">Demo Day</h5>
                  <p className="hidden md:block">Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day</p>
                </article>
              </article>
            </li>
          </ol>
        </section>
        <section className="relative flex flex-col lg:flex-row gap-9 lg:gap-0 w-full px-12 md:px-20 lg:px-32 py-12 md:py-24 border-y items-center justify-center">{/**REWARD Section */}
          <img src={StarPu} className="absolute w-[21px] h-[26px] left-[30%] top-[8%] grayscale-[20%]" />{/**Star */}
          <div className="relative w-full lg:w-1/2 flex justify-center">
            <img src={Flare} className="absolute z-0 w-[150%] blur-[100px] -top-[5%] left-[5%] filter grayscale-[50%]" />
            <img src={Reward} className="w-full object-cover z-10" alt="" />
            <img src={Staro} className="absolute w-[21px] h-[26px] left-[30%] bottom-[0%] grayscale-[20%]" />{/**Star */}
          </div>
          <article className="relative w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center">
            <img src={Staro} className="absolute w-[21px] h-[26px] -left-[3%] top-[32%] grayscale-[20%]" />{/**Star */}  
            <img src={Staro} className="absolute w-[21px] h-[26px] -right-[13%] top-[45%] grayscale-[20%]" />{/**Star */}  
            <img src={Staro} className="absolute w-[21px] h-[26px] right-[27%]  -bottom-[4%] opacity-40" />{/**Star */}  
            <img src={Flare} className="absolute z-0 w-[150%] blur-[100px] bottom-[1%] left-[75%] filter grayscale-[50%]" />
            <h4 className=" font-logo text-xl lg:text-[32px] font-bold leading-snug tracking-tight mb-5 ">Prizes and<br/><span className=" text-[#D434FE]">Rewards</span></h4>
            <p className=" font-btn text-[13px] lg:text-sm leading-7 tracking-snug lg:tracking-wide max-w-sm">Highlight of the prizes or rewards for winners and for participants</p>
            <section className="relative justify-center flex gap-5 mt-[130px]  md:mt-[300px]">{/**Price Section */}
              <div className="relative w-[90px] h-[126px] md:h-[296px] md:w-[212px] bg-gradient-to-b from-[#D434FE]/[0.12] to-transparent  border border-[#D434FE] rounded-lg font-btn text-center p-3 flex flex-col items-center gap-2 md:gap-4">{/**Price Item */}
                <div className="-mt-14 md:-mt-24 w-[76px] h-[76px] md:w-[180px] md:h-[180px] bg-transparent object-contain">
                  <img src={Silver} alt="" />
                </div>
                <article>
                  <span className="font-bold text-xs md:text-4xl block">2nd</span>
                  <span className="text-xs md:text-2xl font-semibold">Runner</span>
                </article>
                <p className=" font-bold text-sm md:text-[32px] text-[#D434FE]">N300,000</p>
              </div>
              <div className="relative w-[90px] h-[147px] md:h-[327px] md:w-[212px] bg-[#903AFF]/[0.12]  border border-[#903AFF] rounded-lg font-btn text-center p-3 flex flex-col items-center gap-3 md:gap-7">{/**Price Item */}
                <div className="w-[125px] h-[125px] md:w-[296px] md:h-[296px] bg-transparent object-contain -mt-24 md:-mt-56">
                <img src={Gold} alt="" />
                </div>
                <article>
                  <span className="font-bold text-xs md:text-4xl block">1st</span>
                  <span className="text-xs md:text-2xl font-semibold">Runner</span>
                </article>
                <p className=" font-bold text-sm md:text-[32px] text-[#D434FE]">N400,000</p>
              </div>
              <div className="relative w-[90px] h-[126px] md:h-[296px] md:w-[212px] bg-[#D434FE]/[0.12]  border border-[#D434FE] rounded-lg font-btn text-center p-3 flex flex-col items-center gap-2 md:gap-4">{/**Price Item */}
                <div className="-mt-14 md:-mt-24 w-[76px] h-[76px] md:w-[180px] md:h-[180px] bg-transparent object-contain">
                  <img src={Bronze} alt="" />
                </div>
                <article>
                  <span className="font-bold text-xs md:text-4xl block">3rd</span>
                  <span className="text-xs md:text-2xl font-semibold">Runner</span>
                </article>
                <p className=" font-bold text-sm md:text-[32px] text-[#D434FE]">N150,000</p>
              </div>
            </section>
          </article>
        </section>
        <section className="relative w-full h-auto px-12 md:px-20 lg:px-32 py-12 md:py-24 border-y text-center">{/**PATNERS/SPONSOR Section */}
          <h4 className=" font-logo font-bold text-[32px] text-[#D434FE] mb-2">Patners and Sponsors</h4>
          <p className="w-full max-w-md mx-auto font-btn text-sm leading-loose rounded-[5px] mb-16">Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors</p>
          <div className="relative w-full grid grid-cols-3 gap-y-4 md:gap-y-10 p-7 md:px-32 md:py-24 border border-[#D434FE]">
              <img src={Flare} alt="" className="absolute z-0 -top-[55%] -left-[53%] scale-85 filter opacity-[32%]" />{/**Flare */}
              <img src={StarPu} className="absolute w-[21px] h-[26px] left-[10%] -top-[5%] grayscale-[20%]" />{/**Star */}
              <img src={SataGra} className="absolute w-[21px] h-[26px] right-[41.5%] top-[11%] grayscale-[20%]" />{/**Star */}
              <img src={Staro} className="absolute w-[21px] h-[26px] right-[41.5%] bottom-[10%] grayscale-[20%]" />{/**Star */}
              <figure className="relative min-w-[68px] p-3 md:p-7 md:px-14 after:absolute after:bottom-0 after:left-[43%] after:w-[86%] after:h-[2px] md:after:h-1 after:bg-[#D434FE] after:rounded-full after:-translate-x-[43%]">{/**figure */}
                <img src={Liberty} alt="" className="w-full" />
              </figure>
              <figure className="relative min-w-[68px] p-3 md:p-7 md:px-14 after:absolute flex justify-center items-center after:bottom-0 after:left-[43%] after:w-[86%] after:h-[2px] md:after:h-1 after:bg-[#D434FE] after:rounded-full after:-translate-x-[43%] before:absolute before:top-[43%] before:-left-[2px] md:before:-left-[4px] before:w-[2px] md:before:w-1 before:h-[86%] before:bg-[#D434FE] before:rounded-full before:-translate-y-[43%]">{/**figure */}
                <img src={LibertyPay} alt="" className="w-full" />
              </figure>
              <figure className="relative min-w-[68px] object-contain p-3 md:p-7 md:px-14 after:absolute after:bottom-0 after:left-[43%] after:w-[86%] after:h-[2px] md:after:h-1 after:bg-[#D434FE] after:rounded-full after:-translate-x-[43%] before:absolute before:top-[43%] before:-left-[2px] md:before:-left-[4px] before:w-[2px] md:before:w-1 before:h-[86%] before:bg-[#D434FE] before:rounded-full before:-translate-y-[43%]">{/**figure */}
                <img src={WinWise} alt="" className="w-full"/>
              </figure>
              <figure className="relative min-w-[68px] p-3 md:px-9 lg:px-14">{/**figure */}
                <img src={Whisper} alt="" className="w-full"/>
              </figure>
              <figure className="relative min-w-[68px] flex justify-center items-center md:px-14  before:absolute before:top-[26%] before:-left-[2px] md:before:-left-[4px] before:w-[2px] md:before:w-1 before:h-[86%] before:bg-[#D434FE] before:rounded-full before:-translate-y-[43%]">{/**figure */}
                  <h5 className=" font-typo text-sm md:text-3xl xl:text-[51px]">pay<span className=" text-[#00A3FF]">box</span></h5>
              </figure>
              <figure className="relative min-w-[68px] flex justify-center items-center p-3 md:px-14  before:absolute before:top-[26%] before:-left-[2px] md:before:-left-[4px] before:w-[2px] md:before:w-1 before:h-[86%] before:bg-[#D434FE] before:rounded-full before:-translate-y-[43%]">{/**figure */}
                <img src={Vuzual} alt="" className="w-full"/>
              </figure>
              <img src={Flare} alt="" className="absolute z-0 -bottom-[50%] -right-[50%] scale-85 filter opacity-[32%]" />{/**Flare */}
          </div>
        </section>
        <section className="relative w-full h-auto px-12 md:px-20 lg:px-32 py-12 md:py-24 border-y text-center">{/**PRIVACY, POLICY and TERMS */}
          <img src={Staro} className="absolute w-[21px] h-[26px] left-[34%] top-[8.5%] opacity-40" />{/**Star */} 
          <h4 className="md:text-left font-logo font-bold text-xl md:text-[32px] mb-3 md:mb-5">Privacy Policy and <span className="block mt-1 md:mt-4 text-[#D434FE]">Terms</span></h4>
          <p className=" font-btn text-sm max-w-[428px] md:text-left">Last updated on September 12, 2023</p>
          <p className=" text-btn text-xs md:text-sm mt-4 md:mt-6 max-w-[428px] md:text-left">Below are our privacy & policy, which outline a lot of goodies. it’s our aim to always take of our participant</p>
          <div className="w-full flex flex-wrap lg:flex-nowrap mt-12 md:mt-16">
            <article className="relative font-btn text-xs md:text-sm w-full md:w-1/2 md:min-w-[560px] md:text-left p-14 py-10 md:py-12  border border-[#D434FE] rounded-md flex flex-col self-start">
              <img src={StarPu} className="absolute w-[21px] h-[26px] left-[97%] -top-[8%] md:-top-[20%] opacity-40" />{/**Star */}
              <img src={SataGra} className="absolute w-[21px] h-[26px] -left-[10%] bottom-[33%] opacity-40" />{/**Star */} 
                <p className=" max-w-[422px] mb-7">At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you participate in our tech hackathon event. By participating in our event, you consent to the practices described in this policy.</p>
                <article className="flex flex-col">
                  <h5 className="text-left text-sm md:text-base font-bold text-[#D434FE] mb-1">Licensing Policy</h5>
                  <p className="text-left font-bold mb-4">Here are terms of our Standard License:</p>
                  <ol className="text-left leading-relaxed flex flex-col gap-3">
                    <li className="flex gap-4 items-start">
                      <FontAwesomeIcon icon={faCircleCheck} className=" text-[17px] text-[#2DE100] mt-[2px] md:mt-[5px]" /> 
                      <p>The Standard License grants you a non-exclusive right to navigate and register for our event</p></li>
                    <li className="flex gap-4 items-start">
                      <FontAwesomeIcon icon={faCircleCheck} className=" text-[17px] text-[#2DE100] mt-[2px] md:mt-[5px]" />
                      <p>You are licensed to use the item available at any free source sites, for your project developement</p></li>
                  </ol>
                  <button className="text-[#FFFFFF]  bg-gradient-to-r from-[#FE34B9] via-[#D434FE] via-45% to-[#903AFF] p-3 px-6 md:px-7 rounded-[3px] mt-4 md:mt-7 self-center">Read More</button>
                </article>
                <img src={Flare} alt="" className="absolute w-full scale-150 z-0 -bottom-[50%] -left-[50%]  filter opacity-[32%]" />{/**Flare */}
            </article>
            <figure className="relative w-full h-auto md:w-1/2 md:min-w-[560px] mt-28 object-cover">
              <img src={Staro} className="absolute h-[21px] w-[18px] right-[20%] -top-[10%] " />{/**Star */} 
              <img src={Staro} className="absolute h-[21px] w-[18px] left-[30%] bottom-[30%] " />{/**Star */} 
              <img src={SataGra} className="absolute h-[21px] w-[18px] left-[37%] bottom-[45%] grayscale-[70%] " />{/**Star */} 
              <img src={Staro} className="absolute w-[21px] h-[26px] right-[17%] bottom-[20%] opacity-40" />{/**Star */} 
              <Shield />
              <img src={Privacy} alt="" className="w-full md:w-[540px] object-fill h-[280px] md:h-[540px] lg:absolute bottom-0" />
            </figure>
          </div>
        </section>
    </main>
    
  )
}
export default Body