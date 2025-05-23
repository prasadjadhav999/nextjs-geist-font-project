"use client";
import React from "react";

interface ImagePreviewProps {
  images: string[];
}

export const ImagePreview: React.FC<ImagePreviewProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-3 gap-4 mt-4">
      {images.map((src, index) => (
        <div key={index} className="border rounded overflow-hidden">
          <img src={src} alt={`Preview ${index + 1}`} className="object-cover h-32 w-full" />
        </div>
      ))}
    </div>
  );
};
