type FaqItemProps = {
    question: string;
    answer: string;
}

export const FaqItem = ({ question, answer }: FaqItemProps) => {
    return (
        <div className="faq--section-content">
            <div className="faq--section-item">
                <h3>{question}</h3>
                <p>{answer}</p>
            </div>
        </div>
    );
};