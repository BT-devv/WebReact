import React from "react";

import axios from "axios";
import { useEffect, useState } from "react";

const About = () => {
  const [listUser, setListUser] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/user").then((res) => {
      setListUser(res.data);
    });
  }, []);

  return (
    <div>
      {listUser.map((value, key) => {
        return <div>{value.username}</div>;
      })}
    </div>
  );
};

export default About;
