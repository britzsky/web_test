"use client";

import { useMemo, useState } from "react";

type FallbackImageProps = {
  srcBase: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  extensions?: string[];
};

const DEFAULT_EXTENSIONS = ["avif", "webp", "png", "jpg", "jpeg"];

const FallbackImage = ({
  srcBase,
  alt,
  className,
  width,
  height,
  extensions = DEFAULT_EXTENSIONS,
}: FallbackImageProps) => {
  const sources = useMemo(
    () => extensions.map((ext) => `${srcBase}.${ext}`),
    [srcBase, extensions]
  );
  const [index, setIndex] = useState(0);

  const handleError = () => {
    if (index < sources.length - 1) {
      setIndex(index + 1);
    }
  };

  return (
    <img
      src={sources[Math.min(index, sources.length - 1)]}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      onError={handleError}
    />
  );
};

export default FallbackImage;
