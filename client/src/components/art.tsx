import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./art.css";

type Painting = {
  url: string;
  title: string;
  description: string;
};

function Art() {
  type Painting = {
    url: string;
    title: string;
    description: string;
  };
  const id = useParams();
  const [data, setData]: [Painting | undefined, any] = useState();

  useEffect(() => {
    axios
      .post("http://localhost:3000/image", id)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(data);

  return (
    <>
      <div id="artdiv">
        <div id="artholder">
          <img id="art" src={data?.url} />
        </div>
        <div id="artTitle">
          <a>{data?.title}</a>
        </div>
      </div>
    </>
  );
}

export default Art;
