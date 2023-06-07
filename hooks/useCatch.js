import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const useCatch = (token, param) => {
  const [isLoading, setisLoading] = useState(false);
  const [error, seterror] = useState(false);
  const [data, setdata] = useState("");

  const getplaylist = async () => {
    setisLoading(true);
    const access_token = await token;
    axios(
        `https://api.spotify.com/v1/${param}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + access_token,
        },
      })
        .then((response) => {
          setdata(response);
          setisLoading(false)
        })
        .catch((error) => {
          console.log("error", error.message);
        });
  };

  useEffect(() => {
    getplaylist();
  }, [token]);

  return { data, isLoading, error, setdata, seterror, setisLoading };
};

export default useCatch;
