import { faPlus }from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const FAQItem = ({question, answer}) => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="text-left border-b border-[#D434FE] font-btn text-sm py-2">
        <div className=" flex justify-between items-center cursor-pointer">{/**FAQ Item */}
            <p className=" font-semibold">{question}</p>
            <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`text-xl text-[#D434FE] ${isOpen ? "rotate-45" : "rotate-0"} transition-transform`}><FontAwesomeIcon icon={faPlus} /></button>
        </div>
        {isOpen && <div className="mt-2">
            <p>{answer}</p>
        </div> }
    </div>
  )
}

const faqData = [
    {
        question: "Can I work on a project I started before the hackathon?",
        answer: "Sure, you can as long as it's not a finished project."
    },
    {
        question: "What happens if I need help during the hackathon?",
        answer: "It's a team work, so you could ask help from your member or call the attention of our officials."
    },
    {
        question: "What happens if I don't have an idea for a project?",
        answer: "One can be assigned to due based on your field."
    },
    {
        question: "Can I join a team or do I have to come with one?",
        answer: "Sure, you can if there are openings but it's advisable you come with yours."
    },
    {
        question: "What happens after the hackathon ends?",
        answer: "Await results to know the winners."
    },
    {
        question: "Can I work on a project I started before the hackathon?",
        answer: "Sure, you can as long as it's not a finished project."
    },
]

const FAQs = () => {
    return (
        <div className="w-full md:w-[80%] flex flex-col gap-2">
            {faqData.map((faq, idx) => (
                <FAQItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
        </div>
    )
}

export default FAQs;