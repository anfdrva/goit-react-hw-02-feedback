import { FeedbackOptions } from "./FeedbackOptions";
import { Section } from "./Section";
import { Statistics } from "./Statistics";
import { Component } from "react";
import { Notification } from "./Notification";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = propName => {
    this.setState(prevState => {
      return {
        [propName.target.textContent.toLowerCase()]: prevState[propName.target.textContent.toLowerCase()] + 1,
      };
    });
  }

  countTotalFeedback = (e) => {
    return(this.state.good + this.state.bad + this.state.neutral);
  }
  
  countPositiveFeedbackPercentage = (e) => {
    return(Math.round((this.state.good / (this.state.good + this.state.neutral + this.state.bad)) * 100))
  }

  render() {
    const options = Object.keys(this.state);
    const allFeedBack = this.countTotalFeedback();
    return (
      <div>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions options={options} onLeaveFeedback={this.onLeaveFeedback} /> 
        </Section>
        <Section title={'Statistics'}>
          {allFeedBack > 0 ? (
            <Statistics items={this.state} countTotalFeedback={this.countTotalFeedback} countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage} />
          ) : (
              <Notification message={'There is no feedback'} />
          )}
        </Section>
    </div>
  );
  }
};

