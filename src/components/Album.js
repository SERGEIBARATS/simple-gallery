import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { list } from "../actions/album";
import { listPhotos, updateList } from "../actions/photo";
import { Collapse} from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import Photo from "./Photo";

function Album() {
  const [openToggle, setOpenToggle] = useState(false);
  const [photosArr, setPhotosArr] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [clickedPhoto, setClickedPhoto] = useState(null);
  
  const albumData = useSelector((state) => state.albums);
  const photoData = useSelector((state) => state.photos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(list());
    dispatch(listPhotos());
  }, [dispatch]);

  const handleAlbumItemClick = (indexOfOpenToggle, albumID) => {
    const photosArr = photoData.filter((item) => item.albumId === albumID);
    const data = photosArr.splice(0, 12);
    setPhotosArr(data);
    if (indexOfOpenToggle === openToggle) {
      setOpenToggle(-1);
    } else {
      setTimeout(() => setOpenToggle(indexOfOpenToggle), 400);
    }
  };

  const removePhoto = (idImage) => {
    const newArr = photosArr.filter((item) => item.id !== idImage);
    setPhotosArr(newArr);
    const newPhotosData = photoData.filter((item) => item.id !== idImage);
    dispatch(updateList(newPhotosData));
  };

  const thumbnailClicked = (item) => {
    setClickedPhoto(item);
    setIsOpen(true);
  };

  return (
    <>
      {albumData.map((item, index) => {
        const numberOfPhotosInAlbum = photoData.filter(
          (photoDataItem) => photoDataItem.albumId === item.id
        );
        return (
          <div key={index}>
            {modalIsOpen && <Photo
              modalIsOpen={modalIsOpen}
              closeModal={() => {
                setIsOpen(false);
              }}
              item={clickedPhoto}
            />}
            <button
              className="ListItem"
              onClick={() => handleAlbumItemClick(index, item.id)}
            >
              <ul className="ListItemTextStyle">
                id: {item.id} title:
                {item.title} userId: {item.userId} number of photos:
                {numberOfPhotosInAlbum.length}
              </ul>
              {openToggle === index ? <ExpandLess /> : <ExpandMore />}
            </button>
            <Collapse
              style={{ opacity: openToggle === index ? 1 : 0 }}
              in={openToggle === index}
              timeout="auto"
              unmountOnExit
            >
              <div class="grid-container" disablePadding>
                {photosArr.map((item, index) => (
                  <div key={index} className="grid-item">
                    <button
                      onClick={() => thumbnailClicked(item)}
                    >
                      <img
                        className="image"
                        src={item.thumbnailUrl}
                        alt="Logo"
                      />
                    <div class="middle">
                      <div class="text">{item.title}</div>
                    </div>
                    </button>
                    <button
                      className="close-button-thumbnail"
                      onClick={() => removePhoto(item.id)}
                    >
                      x
                    </button>
                  </div>
                ))}
              </div>
            </Collapse>
          </div>
        );
      })}
    </>
  );
}

export default Album;
