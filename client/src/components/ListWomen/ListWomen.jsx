import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import "./ListWomen.scss";
import axios from "axios";
const ListWomen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api-detailwomen")
      .then((response) => {
        setData(response.data.data.details);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="list">
      <div className="imgage">
        <img
          src="	https://im.uniqlo.com/global-cms/spa/res8585f0e5286b4d55b085bba5e74c6635fr.jpg"
          alt=""
        />
      </div>
      <div className="case">
        {data?.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default ListWomen;
