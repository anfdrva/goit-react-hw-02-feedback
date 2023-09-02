export const Statistics = ({ items, countTotalFeedback, countPositiveFeedbackPercentage}) => {
    return (
        <div>
            <p>Good: {items.good}</p>
            <p>Neutral: {items.neutral}</p>
            <p>Bad: {items.bad}</p>
            <p>Total:{countTotalFeedback()}</p>
            <p>Positive feedback: {countPositiveFeedbackPercentage()}%</p>
        </div>
    )
}