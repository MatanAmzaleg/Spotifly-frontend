import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";

export const Login = () => {
  const AUTH_URL =
    "http://accounts.spotify.com/authorize?client_id=d2728cb796ee4008a78a1a1893ce7e5c&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";
  return (
    <section className="login-section">
      <section className="login-form flex column">
        <h1 className="main-title">Spotifly</h1>
        <a className="login-btn" href={AUTH_URL}>
          Login <FontAwesomeIcon icon={faSpotify}></FontAwesomeIcon>
        </a>
      </section>
    </section>
  );
};
