import { FaqItem } from "../components/sections/FaqItem";
import { Fade } from "react-awesome-reveal";

const faqData = [
    {
        question: "Is there a free trial available?",
        answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
    },
    {
        question: "Can I change my plan later?",
        answer: "Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you."
    },
    {
        question: "What is your cancellation policy?",
        answer: "We understand that things change. You can cancel your plan at any time and we’ll refund you the difference already paid."
    },
    {
        question: "Can other info be added to an invoice?",
        answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
    },
    {
        question: "How does billing work?",
        answer: "Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces."
    },
    {
        question: "How do I change my account email?",
        answer: "You can change the email address associated with your account by going to untitled.com/account from a laptop or desktop."
    }
];

export const Faq = () => {
    return (
        <section className="faq--section">
            <header className="faq--section-title">
                <h2>
                    FAQs
                </h2>
                <p>Everything you need to know about the product and billing. Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
            </header>

            <div className="faq--section-items">
                <Fade triggerOnce duration={ 300 } cascade>
                    {faqData.map((faq, index) => (
                        <FaqItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                        />
                    ))}
                </Fade>
            </div>

            <div className="faq--section-jumbotron">
                <div className="faq--section-content">
                    <h4>Still have questions?</h4>
                    <p>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
                </div>

                <div>
                    <button className="button--primary">
                        Get in touch
                    </button>
                </div>
            </div>
        </section>
    );
}