import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export const UseAuth = (code) => {
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();

  useEffect(() => {
    axios
      .post("http://localhost:3001/login", {
        code,
      })
      .then((res) => {
        setAccessToken(res.data.accessToken);
        setRefreshToken(res.data.refreshToken);
        setExpiresIn(res.data.expiresIn);
        window.history.pushState({}, null, "/");
      })
      .catch(() => {
        window.location = "/";
      });
  }, [code]);

  useEffect(() => {
    if (!refreshToken || !expiresIn) return;

    const interval = setInterval(() => {
      axios
        .post("http://localhost:3001/refresh", {
          refreshToken,
        })
        .then((res) => {
          console.log(res);
          setAccessToken(res.data.accessToken);
          setExpiresIn(res.data.expiresIn);
        })
        .catch((err) => {
          window.location = "/";
        });

      return () => clearInterval(interval);
    }, (expiresIn - 60) * 1000);
  }, [refreshToken, expiresIn]);

  console.log(accessToken);

  useEffect(() => {
    if (!accessToken) return;
    localStorage.setItem("accessToken", accessToken);
  }, [accessToken]);

  return accessToken;
};
