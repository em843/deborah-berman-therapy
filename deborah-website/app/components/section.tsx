import React, { ReactNode } from "react";
import Image from "next/image";

type Props = {
  imgSrc?: string;
  altText?: string;
  children: ReactNode;
};

const Section: React.FC<Props> = ({ imgSrc = "", altText = "", children }) => {
  return <>
    {imgSrc ? (
      <div className="relative" style={{ height: "95vh" }}>
        <Image
          src={imgSrc}
          alt={altText}
          className="brightness-50"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover"
          }} />
        {children}
      </div>
    ) : (
      <div className="p-10">{children}</div>
    )}
  </>;
};

export default Section;
