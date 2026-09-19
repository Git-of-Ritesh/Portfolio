"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

type LoadingImageProps = ImageProps & {
  skeletonClassName?: string;
};

export default function LoadingImage({
  alt,
  className = "",
  skeletonClassName = "",
  onLoad,
  ...props
}: LoadingImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <div
        aria-hidden="true"
        className={`skeleton absolute inset-0 transition-opacity duration-500 ${loaded ? "opacity-0" : "opacity-100"} ${skeletonClassName}`}
      />
      <Image
        {...props}
        alt={alt}
        onLoad={(event) => {
          setLoaded(true);
          onLoad?.(event);
        }}
        className={`transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"} ${className}`}
      />
    </>
  );
}
