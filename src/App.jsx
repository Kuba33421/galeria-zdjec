import { useEffect, useState } from "react";
import PhotoGallery from "./components/PhotoGallery.jsx";


function App() {
  const [searchValue, setSearchValue] = useState("");

  const [images, setImages] = useState([]);

  useEffect(() => {
    getImages();
  }, []);

  const getImages = async () => {
    const response = await fetch(
      "https://api.slingacademy.com/v1/sample-data/photos",
    );
    const data = await response.json();
    setImages(data.photos);
  };

  return (
    <>
      <div className="div-seven">
        <div className="flex flex-row justify-center gap-8">
          <input
            type="text"
            placeholder="Wyszukaj według tytułu lub opisu."
            className="input-one"
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
        </div>

        <div className="div-eight">
          <PhotoGallery
            images={images}
            searchValue={searchValue}
            getImages={() => getImages()}
          />
        </div>
      </div>
    </>
  );
}

export default App;
