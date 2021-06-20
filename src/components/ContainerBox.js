import React, { Component } from "react";
import "./ContainerBox.css";
import QuoteAPI from "./apis/QuoteAPI";

class ContainerBox extends Component {
  state = { punchline: null, setup: "Click To Generate Quote" };

  apiResult = async () => {
    const response = await QuoteAPI.get(
      "https://official-joke-api.appspot.com/random_joke"
    );
    console.log(response.data);
    this.setState({
      punchline: response.data.punchline,
      setup: response.data.setup,
    });
  };

  render() {
    return (
      <div className="container">
        {/* <div class="loader"></div> */}
        <div className="setup">{this.state.setup}</div>
        {console.log(this.state)}
        <div className="punchline">
          {this.state.punchline ? ` 👉 ${this.state.punchline}` : null}
        </div>
        <div className="button">
          <button onClick={this.apiResult}>Generate</button>
        </div>
      </div>
    );
  }
}

export default ContainerBox;
