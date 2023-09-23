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


const Body = () => {
  return (
    <main className="w-full min-h-screen bg-[#150E28] text-[#FFFFFF] overflow-x-hidden">
        <h4 className="font-btn font-bold italic text-base md:text-3xl mt-[91px] md:mt-[121px] ml-12 md:ml-32 lg:ml-32 md:translate-x-1/2">Igniting a revolution in HR Inovation</h4>
        <section className="relative px-12 md:px-20 lg:px-32 flex flex-col lg:flex-row w-full mt-8 ">{/**Hero Section */}
            <div className="relative w-full lg:w-[55%] h-full">
                <img src={Flare} className=" absolute -left-28 -top-[150px] z-0 opacity-30 w-full h-[400px]" alt="" />
                <article className="flex flex-col w-full  font-btn ">
                  <span className="text-[32px] sm:text-[54px] xl:text-[80px] font-logo font-bold tracking-tighter  leading-tight z-10">getlinked Tech</span>
                  <div className=" flex items-center flex-wrap xl:flex-nowrap w-full">
                    <span className="text-[32px] sm:text-[54px] xl:text-[80px] font-logo font-bold tracking-tighter  leading-tight flex mr-1 z-30">Hackathon <span className=" text-[#D434FE]">1.0</span></span>
                    <span><img src={Chain} className="w-[32.8px] h-[32.8px]  md:w-[86px] md:h-[86px]" alt="" /></span>
                    <span>
                      <img src={Star} className="w-[32.8px] h-[32.8px]  md:w-[86px] md:h-[86px]" alt="" />
                    </span>
                  </div>
                  <p className=" text-[20px] mt-2 z-30">Participate in getlinked tech Hackathon 2023 stand<br/>a chance to win a Big prize</p>
                  <button className="mt-5 text-[#FFFFFF] bg-gradient-to-r from-[#FE34B9] via-[#D434FE] via-45% to-[#903AFF]  w-[172px] h-[53px] font-btn rounded-[4px]">Register</button>
                </article>
                <div className="mt-5 flex gap-5">
                  <p className=" font-unica text-[64px]">00<span className=" text-lg">H</span></p>
                  <p className=" font-unica text-[64px]">00<span className=" text-lg">M</span></p>
                  <p className=" font-unica text-[64px]">00<span className=" text-lg">S</span></p>
                </div>
            </div>
            <div className="w-full lg:w-[45%] h-full">{/**Hero-Image Section */}
              <div className="relative w-full h-full object-cover">
                <img src={MaskMan} alt="" className="relative lg:absolute w-full lg:scale-x-[1.3] lg:scale-y-[1.12]  z-10" />
                <img src={Nomen} alt="" className="absolute z-20 w-[75%] left-14 -top-9" />
                <img src={Flare} alt="" className="hidden md:flex absolute -top-12 z-0" />
              </div>
            </div>
        </section>{/** END Hero-Section */}

        <section className="flex flex-col lg:flex-row gap-9 lg:gap-0 w-full px-12 md:px-20 lg:px-32 py-10 border-y items-center">{/**Ideas Section */}
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
        <section className="flex flex-col lg:flex-row-reverse gap-9 lg:gap-0 w-full px-12 md:px-20 lg:px-32 py-10 border-y items-center">{/**Rules Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img src={Rules} className="w-full" alt="" />
          </div>
          <article className="w-full lg:w-1/2 text-center lg:text-left">
            <h4 className=" font-logo text-xl lg:text-[32px] font-bold leading-snug tracking-tight mb-5 ">Rules and<br/><span className=" text-[#D434FE]">Guidelines</span></h4>
            <p className=" font-btn text-[13px] lg:text-sm leading-7 tracking-snug lg:tracking-wide">Our tech hackathon is a melting pot of visionaries, and its purpose is as
            clear as day: to shape the future. Whether you're a coding genius, a 
            design maverick, or a concept wizard, you'll have the chance to transform 
            your ideas into reality. Solving real-world problems, pushing the boundaries
            of technology, and creating solutions that can change the world,
            that's what we're all about!</p>
          </article>
        </section>{/**END Rules Section */}
        <section className="flex flex-col lg:flex-row gap-9 lg:gap-0 w-full px-12 md:px-20 lg:px-32 py-10 border-y items-center">{/**Criteria Section */}
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
        <section className="flex flex-col lg:flex-row-reverse gap-9 lg:gap-0 w-full px-12 md:px-20 lg:px-32 py-10 border-y items-center">{/**Rules Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img src={Curious} className="w-full" alt="" />
          </div>
          <article className="w-full lg:w-1/2 text-center lg:text-left">
            <h4 className=" font-logo text-xl lg:text-[32px] font-bold leading-snug tracking-tight mb-5 ">Frequently Asked<br/><span className=" text-[#D434FE]">Questions</span></h4>
            <p className=" font-btn text-sm mb-8">We got answers to the questions that you might<br/>
            want to ask about <span className=" text-base font-bold">getlinked Hackathon 1.0</span></p>
            <div className="w-full md:w-[80%] flex flex-col gap-2">{/**FAQs Container */}
              <div className=" flex justify-between items-center font-btn text-sm border-b border-[#D434FE] py-2 cursor-pointer">{/**FAQ Item */}
                <p className=" text-left">Can I work on a project I started before the hackathon?</p>
                <button className=" text-xl text-[#D434FE]">+</button>
              </div>
              <div className=" flex justify-between items-center font-btn text-sm border-b border-[#D434FE] py-2 cursor-pointer">{/**FAQ Item */}
                <p className=" text-left">Can I work on a project I started before the hackathon?</p>
                <button className=" text-xl text-[#D434FE]">+</button>
              </div>
              <div className=" flex justify-between items-center font-btn text-sm border-b border-[#D434FE] py-2 cursor-pointer">{/**FAQ Item */}
                <p className=" text-left">Can I work on a project I started before the hackathon?</p>
                <button className=" text-xl text-[#D434FE]">+</button>
              </div>
              <div className=" flex justify-between items-center font-btn text-sm border-b border-[#D434FE] py-2 cursor-pointer">{/**FAQ Item */}
                <p className=" text-left">Can I work on a project I started before the hackathon?</p>
                <button className=" text-xl text-[#D434FE]">+</button>
              </div>
              <div className=" flex justify-between items-center font-btn text-sm border-b border-[#D434FE] py-2 cursor-pointer">{/**FAQ Item */}
                <p className=" text-left">Can I work on a project I started before the hackathon?</p>
                <button className=" text-xl text-[#D434FE]">+</button>
              </div>
              <div className=" flex justify-between items-center font-btn text-sm border-b border-[#D434FE] py-2 cursor-pointer">{/**FAQ Item */}
                <p className=" text-left">Can I work on a project I started before the hackathon?</p>
                <button className=" text-xl text-[#D434FE]">+</button>
              </div>
            </div>
          </article>
        </section>{/**END of FAQs Section */}
        <section className="w-full px-12 md:px-20 lg:px-32 py-10 border-y">
          <h4 className=" font-logo text-[32px] font-bold tracking-tight text-center mb-3">Timeline</h4>
          <p className=" font-btn text-sm text-center mb-9 max-w-xs mx-auto">Here is the breakdown of the time we anticipate using for the upcoming event.</p>
          <ol className="w-full flex flex-col gap-7 md:gap-0">
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
            <li className="flex gap-3 md:flex-none mx-auto w-full ">{/**Announcement 2*/}
              <div className=" flex flex-col items-center gap-1 md:hidden">
              <div className=" h-[75px] w-[3px] bg-[#D434FE]"></div>
              <div className=" bg-gradient-to-r from-[#D434FE] to-[#903AFF] w-[20px] h-[20px] rounded-full flex justify-center items-center text-xs font-bold ">2</div>
              </div>
              <article className=" font-btn text-xs md:text-sm flex flex-col md:items-center md:flex-row md:gap-20 md:mx-auto gap-2 w-full lg:max-w-5xl">
                <article className="max-w-[280px] md:min-w-[414px] flex- flex-col md:text-right">
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
            <li className="flex gap-3 md:flex-none mx-auto w-full ">{/**Announcement 4*/}
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
            <li className="flex gap-3 md:flex-none mx-auto w-full ">{/**Announcement 6*/}
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
        <section className="flex flex-col lg:flex-row gap-9 lg:gap-0 w-full px-12 md:px-20 lg:px-32 py-10 border-y items-center">{/**REWARD Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img src={Reward} className="w-full" alt="" />
          </div>
          <article className="w-full lg:w-1/2 text-center lg:text-left">
            <h4 className=" font-logo text-xl lg:text-[32px] font-bold leading-snug tracking-tight mb-5 ">Prizes and<br/><span className=" text-[#D434FE]">Rewards</span></h4>
            <p className=" font-btn text-[13px] lg:text-sm leading-7 tracking-snug lg:tracking-wide max-w-sm">Highlight of the prizes or rewards for winners and for participants</p>
            <section>
              <div className=" h-[296px] w-[212px] bg-gradient-to-b from-[#D434FE] to-transparent via-[12%] border border-[#D434FE] rounded-lg font-btn text-center p-3">
                <span className="font-bold text-4xl">2nd<br/>Runner </span>
                <p className=" font-bold text-[32px] text-[#D434FE]">N300,000</p>
              </div>
            </section>
          </article>
        </section>
    </main>
  )
}
export default Body