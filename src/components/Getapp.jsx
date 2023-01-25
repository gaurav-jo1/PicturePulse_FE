import React from "react";

import apple_store from "../assets/apple_store.webp";
import play_store from "../assets/play_store.webp";

import '../styling/Getapp.scss'

const Getapp = () => {
  return (
    <div className="Login_container_get_the_app">
      <div className="Login_container_get_app_heading">
      <p>Get the app</p>
      </div>
      <div className="Login_container_get_instagram_store-images">
          <img src={apple_store} alt="apple_store" />
          <img src={play_store} alt="Play_store" />
      </div>
    </div>
  );
};

export default Getapp;
