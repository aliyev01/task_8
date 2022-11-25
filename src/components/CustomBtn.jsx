import React, { Component } from "react";
export default class CustomBtn extends Component {
  render() {
    const { text, hint, warnMessage } = this.props;
    return (
      <div className="btnDiv">
        <button
          className="btn"
          onClick={
            warnMessage
              ? (e) => alert(`this is alert message ${warnMessage}`)
              : null
          }
          style={
            hint && warnMessage
              ? { fontStyle: "italic", border: "1px solid red" }
              : hint
              ? { fontStyle: "italic" }
              : warnMessage
              ? { border: "1px solid red" }
              : null
          }
        >
          {text}
        </button>
        <p className={hint ? "hintPopup" : "hint"}>{hint}</p>
      </div>
    );
  }
}
