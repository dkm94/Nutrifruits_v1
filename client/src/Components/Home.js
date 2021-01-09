import React, { Component } from "react";
import Filter from "./Filter/Filter";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Join from "./Join/Join";
import Chat from "./Chat";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      fruits: [],
      visible: false,
    };
  }

  componentDidMount() {
    fetch("../data.json")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ fruits: data });
      })
      .catch(console.log);
  }

  displayChat = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };

  render() {
    return (
      <div className="home">
        <div className="buttonChat">
          <img
            onClick={this.displayChat}
            classname="imgChat"
            src={require("../img/gifpomme.gif")}
          />
        </div>
        <div className={this.state.visible ? "boxChat" : "hide"}>
          {/* No choice */}
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Join} />
              <Route exact path="/chat" component={Chat} />
            </Switch>
          </BrowserRouter>
        </div>
        <Header />
        <Filter />
        <Footer />
      </div>
    );
  }
}

export default withRouter(Home);
