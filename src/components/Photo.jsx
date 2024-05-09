import { Button } from "./Button.jsx";
import { useEffect, useRef, useState } from "react";
import '../index.css'

function Photo(props) {
  const imgRef = useRef(null);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    loadLike();
  }, []);

  const toggleLike = () => {
    setLiked(!liked);
    saveLikes();
  };

  const loadLike = () => {
    let likedPhotos = localStorage.getItem("likedPhotos");
    if (likedPhotos === null) {
      likedPhotos = [];
    } else {
      likedPhotos = JSON.parse(likedPhotos);
    }
    if (likedPhotos.includes(props.image.id)) {
      setLiked(true);
    }
  };

  const saveLikes = () => {
    let likedPhotos = localStorage.getItem("likedPhotos");
    if (likedPhotos === null) {
      likedPhotos = [];
    } else {
      likedPhotos = JSON.parse(likedPhotos);
    }
    if (liked) {
      likedPhotos = likedPhotos.filter((photo) => photo !== props.image.id);
    } else {
      likedPhotos.push(props.image.id);
    }
    localStorage.setItem("likedPhotos", JSON.stringify(likedPhotos));
  };

  async function downloadPhoto() {
    const a = document.createElement("a");
    a.href = await toDataURL(props.image.url + "/");
    a.download = props.image.title;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  function toDataURL(url) {
    return fetch(url)
      .then((response) => {
        return response.blob();
      })
      .then((blob) => {
        return URL.createObjectURL(blob);
      });
  }

  return (
    <div className='div-one'>
      <img
        src={props.image.url}
        ref={imgRef}
        className="img-one"
        alt=""
      />
      <div className='div-two'>
        <div className='div-three'>{props.image.title}</div>
        <div className='div-four'>{props.image.description}</div>
        <div className='div-five'>
          <div className="div-six">
            {/* check if photo is liked*/}
            {liked ? (
              <Button.Success onClick={() => toggleLike()}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 fill-text-300"
                >
                  <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
                </svg>
              </Button.Success>
            ) : (
              <Button onClick={() => toggleLike()}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 fill-text-300"
                >
                  <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
                </svg>
              </Button>
            )}
          </div>
          <div className="h-16 w-16">
            <Button onClick={() => downloadPhoto()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-6 w-6 fill-text-500"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Photo;
