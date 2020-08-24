import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Accordion, Icon } from "semantic-ui-react";

export default class AccordionExampleStyled extends Component {
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;

    return (
      <Accordion styled>
        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          League Standings
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>3W 2D 0L</p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          View next match info
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <p>
            Match start time: 4pm EST. Location: East Madison. Weather: 80* with
            no rain
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 3}
          index={3}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          Coach Info
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 3}>
          <p>Name: Phone number: email address:</p>
        </Accordion.Content>
      </Accordion>
    );
  }
}
