import React, { useState, useContext, Component } from "react";

import Axios from "axios";
import swal from "sweetalert";

import DefaultUserPic from "../../uploads/team-female.jpg";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import "./Profile.css";

import HeaderSite from "../../components/Header/HeaderSite";
import { Button } from "@material-ui/core";
class UserProfile extends Component {
  handleDelete = () => {
    if (
      swal({
        title: "Vous voulez nous quitter ?",
        text: "Si besoin, contactez l'admin ",
        icon: "warning",
        dangerMode: true,
      })
    ) {
      const dataValue = `; ${document.cookie}`;
      const elementParts = dataValue.split("; token=");
      const token = elementParts.pop().split(";").shift();

      /**FIXME: pas du tout sûre du chemin */
      Axios.delete("http://localhost:3000/user/delete", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
        .then(() => {
          window.location.href = "/logout";
        })
        .catch((error) => {
          console.log(error);
          window.alert("oopsie, something wrong");
        });
    }
  };
  render() {
    return (
      <div className="App">
        <HeaderSite />
        <div className="profilecard">
          <div className="card-container">
            <div className="profile-item">
              <img className="card-img" src={DefaultUserPic} alt="" />
              <div className="cardtext">
                <h2 className="card-title">Bienvenue sur votre profil</h2>
                <h3 className="profile_username">{this.props.username}</h3>
                <p className="card-text">
                  Diligens periret turbulentos fiduciam turbulentos mota locata
                  concitores ut verum fiduciam praedicto exitiosa die et.{" "}
                </p>
              </div>
              <div className="profile_buttons">
                <Tooltip
                  title="SUPPRIMER VOTRE COMPTE"
                  TransitionComponent={Zoom}
                >
                  <button
                    className="btndelete"
                    type="button"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    title="supprimer votre compte"
                    href="#"
                    onClick={this.handleDelete}
                  >
                    <DeleteOutlineIcon
                      className="profile_icons"
                      fontSize="large"
                      aria-label="delete"
                    />
                  </button>
                </Tooltip>
                <Tooltip
                  title="MODIFIER VOTRE COMPTE"
                  TransitionComponent={Zoom}
                >
                  <button
                    className="btnedit"
                    type="button"
                    data-bs-toggle="tooltip"
                    title="modifier votre profil"
                  >
                    <EditIcon fontSize="large" />
                  </button>
                </Tooltip>
                <Tooltip
                  title="CONFIRMER LA MODIFICATION"
                  TransitionComponent={Zoom}
                >
                  <button
                    className="btncheck"
                    type="button"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title="confirmer modification"
                  >
                    <SpellcheckIcon fontSize="large" />
                  </button>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/**FIXME: reste du code, à revoir, mettre redirect router   */

export default UserProfile;
