import React from "react";

export default class Tag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: props.x,
      y: props.y,
      z: props.z,
      text: props.text,
      scale: props.scale,
      hover: false,
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      x: props.x,
      y: props.y,
      z: props.z,
    });
  }
  handleMouseEnter = () => {
    this.setState({ hover: true });
  };

  handleMouseLeave = () => {
    this.setState({ hover: false });
  };

  showExtra = () => {
    if (this.state.hover) {
      this.props.showMore();
    }
  };

  render() {
    const scale = this.state.scale;
    return (
      <span
        onClick={this.props.showMore}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        style={{
          position: "absolute",
          top: `${this.state.y + scale}px`,
          left: `${this.state.x + scale}px`,
          depth: `${this.state.z}px`,
          width: 50,
          opacity: (this.state.z + scale) / (scale * 2),
          color: this.state.hover ? "red" : null,
        }}
      >
        {this.state.text}
      </span>
    );
  }
}
