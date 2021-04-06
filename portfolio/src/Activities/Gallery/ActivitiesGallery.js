import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

const photos = [
  {
    src: process.env.PUBLIC_URL + '/Gallery/act1.jpg',
    width: 4,
    height: 6
  },
  {
    src: process.env.PUBLIC_URL + '/Gallery/act7.jpg',
    width: 8,
    height: 6
  },
  {
    src: process.env.PUBLIC_URL + '/Gallery/act2.jpg',
    width: 5,
    height: 4
  },
  {
    src: process.env.PUBLIC_URL + '/Gallery/act3.jpg',
    width: 4, 
    height: 3
  },
  {
    src: process.env.PUBLIC_URL + '/Gallery/act6.jpg',
    width: 5,
    height: 3
  },
  {
    src: process.env.PUBLIC_URL + '/Gallery/act4.jpg',
    width: 4,
    height: 4
  },
  {
    src: process.env.PUBLIC_URL + '/Gallery/act5.jpg',
    width: 6,
    height: 4
  },
 

  
];

function Gallery1() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}
export default Gallery1