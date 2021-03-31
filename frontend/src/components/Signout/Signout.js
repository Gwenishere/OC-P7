import React from "react";
import { Redirect } from "react-router-dom";


class Signout extends React.Component {
  state = {
    navigate: false
  };
logout = () => {
  localStorage.clear("token");
  this.setState({ navigate: true });
};

render() {
  const { navigate } = this.state;
  if (navigate) {
    return <Redirect to="/" push={true}/>;
  }
  return <button className="btn_deconnexion" onClick={this.logout}>Déconnexion</button>;
 }
}

export default Signout;