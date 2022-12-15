import React from "react";
import { Message } from "semantic-ui-react";

export default class Extra extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      text: props.text,
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      title: props.title,
      text: props.text,
    });
  }

  render() {
    return (
      <Message
        onDismiss={this.props.onClose}
        header={this.state.title}
        content={this.state.text}
      />
    );
  }
}
