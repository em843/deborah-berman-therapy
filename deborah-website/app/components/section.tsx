import React, { ReactNode } from "react";
import Image from "next/legacy/image";

type Props = {
  imgSrc?: string;
  altText?: string;
  children: ReactNode;
};

const Section: React.FC<Props> = ({ imgSrc = "", altText = "", children }) => {
  return (
    <>
      {imgSrc ? (
        <div className="relative" style={{ height: "95vh" }}>
          <Image
            src={imgSrc}
            alt={altText}
            layout="fill"
            objectFit="cover"
            className="brightness-50"
          />
          {children}
        </div>
      ) : (
        <div className="p-10">{children}</div>
      )}
    </>
  );
};

export default Section;
