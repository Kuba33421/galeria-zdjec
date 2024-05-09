import Photo from "./Photo.jsx";
import { useEffect, useState } from "react";

function PhotoGallery(props) {
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    if (props.searchValue === "") {
      setFilteredImages([]);
      props.getImages();
      return;
    }
    const search = props.searchValue.toLowerCase();
    const filteredImages = props.images.filter((image) => {
      return (
        image.title.toLowerCase().includes(search) ||
        image.description.toLowerCase().includes(search)
      );
    });
    setFilteredImages(filteredImages);
  }, [props.searchValue]);

  return (
    <>
      {filteredImages.length > 0 || props.searchValue !== ""
        ? filteredImages.map((image, index) => {
            return <Photo key={index} image={image} />;
          })
        : props.images.map((image, index) => {
            return <Photo key={index} image={image} />;
          })}
    </>
  );
}

export default PhotoGallery;
