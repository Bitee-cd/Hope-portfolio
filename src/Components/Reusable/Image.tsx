import Image from "next/image";
import React from "react";
interface Props {
  src: string;
  alt: string;
}
const ResponsiveImage = ({ src, alt }: Props) => {
  return (
    <Image
      src={src}
      alt={alt}
      placeholder="blur"
      blurDataURL="/Images/profile__.png"
      width={700}
      height={475}
      priority
      sizes="100vw"
      style={{
        width: "100%",
        height: "auto",
      }}
    />
  );
};

export default ResponsiveImage;
