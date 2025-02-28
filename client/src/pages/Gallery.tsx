import { useEffect, useState } from "react";
import "./Gallery.css";
import axios from "axios";
import Paintbox from "../components/paintbox";
import { Link } from "react-router";

function Gallery() {
  type Paintings = [];
  const [data, setData]: [Paintings | undefined, any] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:3000/images")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <div id="gallery">
        <div id="gallerytxt" className="title">
          Gallery
        </div>
        <div id="paintings">
          {data?.map((painting) => (
            <Link to={`/gallery/${painting.id}`}>
              <Paintbox painting={painting} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Gallery;
