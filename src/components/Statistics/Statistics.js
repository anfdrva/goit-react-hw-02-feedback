import { StatisticsTitle, Wrapper } from "./Statistics.styled"

export const Statistics = ({ items, countTotalFeedback, countPositiveFeedbackPercentage}) => {
    return (
        <Wrapper>
            <StatisticsTitle>Good: {items.good}</StatisticsTitle>
            <StatisticsTitle>Neutral: {items.neutral}</StatisticsTitle>
            <StatisticsTitle>Bad: {items.bad}</StatisticsTitle>
            <StatisticsTitle>Total:{countTotalFeedback()}</StatisticsTitle>
            <StatisticsTitle>Positive feedback: {countPositiveFeedbackPercentage()}%</StatisticsTitle>
        </Wrapper>
    )
}