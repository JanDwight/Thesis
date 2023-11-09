import React from 'react';

function ImageGallery({ images }) {
  return (
    <div className="flex justify-center items-center py-5 h-1/2">
      {images && images.length > 0 && (
        <div className="w-full">
          {images.length === 1 ? ( // Display a single image in full size
            <img
              src={`http://localhost:8000/storage/${images[0].image_path}`}
              alt={`Image 0`}
              className="w-full h-full object-contain"
            />
          ) : ( // Display multiple images in a grid
            <div className="flex flex-wrap">
              {images.map((image, i) => (
                <div key={i} className="w-1/2 p-1">
                  <img
                    src={`http://localhost:8000/storage/${image.image_path}`}
                    alt={`Image ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ImageGallery;
