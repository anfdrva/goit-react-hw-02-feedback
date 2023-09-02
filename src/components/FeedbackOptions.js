export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return options.map(item => (
        <button
            key={item}
            onClick={onLeaveFeedback}
        >
            {item}
        </button>
    ))
}