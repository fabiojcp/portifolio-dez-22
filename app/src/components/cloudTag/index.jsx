import React from "react";
import { render } from "react-dom";
import tags from "./tags.jsx";
import Tag from "./tag.jsx";
import Extra from "./extra.jsx";

const scale = 60,
  stepAngle = 0.05722,
  styles = {
    // fontFamily: "sans-serif",
    textAlign: "center",
    display: "inline-block",
    width: scale * 2,
    height: scale * 2,
    position: "relative",
  };

export default class Cloud extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: this.adjustElems(tags),
      theta: 0,
      rho: 0,
      extraText: "",
      extraVisible: false,
    };
  }

  adjustElems = (tags) => {
    let len = tags.length;
    for (let i in tags) {
      let phi = Math.acos(1 - (2 * i) / len);
      let theta = Math.PI * (1 + 5 ** 0.5) * i;

      tags[i].x = Math.cos(theta) * Math.sin(phi) * scale;
      tags[i].y = Math.sin(theta) * Math.sin(phi) * scale;
      tags[i].z = Math.cos(phi) * scale;
    }
    return tags;
  };

  move = (o) => {
    this.spin(o, -this.state.theta);
    this.step(o, this.state.rho * stepAngle);
    this.spin(o, this.state.theta);
  };

  spin = (o, angle) => {
    let x = o.x,
      y = o.y;
    o.x = x * Math.cos(angle) - y * Math.sin(angle);
    o.y = x * Math.sin(angle) + y * Math.cos(angle);
  };

  step = (o, angle) => {
    let x = o.x,
      z = o.z;
    o.x = x * Math.cos(angle) - z * Math.sin(angle);
    o.z = x * Math.sin(angle) + z * Math.cos(angle);
  };

  sign = (a) => {
    return a > 0 ? 1 : a < 0 ? -1 : 0;
  };

  setPos = (x, y) => {
    x = (x * 2) / 300 - 1;
    x = Math.abs(x) < 0.025 ? 0 : (x - 0.025 * this.sign(x)) / (1 - 0.025);
    y = (y * 2) / 300 - 1;
    y = Math.abs(y) < 0.025 ? 0 : (y - 0.025 * this.sign(y)) / (1 - 0.025);
    this.setState({
      theta: Math.atan2(y, x),
      rho: Math.sqrt(x * x + y * y),
    });
    let tags = this.state.tags;
    tags.map((o) => this.move(o));
    this.setState({ tags: tags });
  };

  _onMouseMove = (e) => {
    this.setPos(e.clientX - scale / 2, e.clientY - scale / 2);
  };

  showExtra = (title, extra) => {
    this.setState({
      extraTitle: title,
      extraText: extra,
      extraVisible: true,
    });
  };
  closeExtra = () => {
    this.setState({ extraVisible: false });
  };

  render = () => (
    <div>
      <div style={styles} onMouseMove={this._onMouseMove.bind(this)}>
        {this.state.tags.map((v) => (
          <Tag
            key={v.id}
            scale={scale}
            showMore={() => this.showExtra(v.text, v.extra)}
            {...v}
          />
        ))}
      </div>
      {/* {this.state.extraVisible && (
        <Extra
          title={this.state.extraTitle}
          text={this.state.extraText}
          onClose={this.closeExtra}
        />
      )} */}
    </div>
  );
}

