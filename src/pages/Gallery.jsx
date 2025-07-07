import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const images = [
  '/gallery1.jpg',
  '/gallery2.jpg',
  '/gallery3.jpg',
  // …
];

export default function Gallery() {
  const [index, setIndex] = useState(-1);
  const open = index >= 0;

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-heading mb-8 text-center">Gallery</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Nail art ${i+1}`}
            className="cursor-pointer rounded shadow"
            loading="lazy"
            onClick={() => setIndex(i)}
          />
        ))}
      </div>

      {open && (
        <Lightbox
          mainSrc={images[index]}
          nextSrc={images[(index + 1) % images.length]}
          prevSrc={images[(index + images.length - 1) % images.length]}
          onCloseRequest={() => setIndex(-1)}
          onMovePrevRequest={() => setIndex((index + images.length - 1) % images.length)}
          onMoveNextRequest={() => setIndex((index + 1) % images.length)}
        />
      )}
    </div>
  );
}