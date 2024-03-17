import React, { ReactNode } from "react";
import Image from "next/image";

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
          fill
          sizes="100vw"
            className="brightness-50 bg-cover bg-center h-64 w-full"
          style={{
            objectFit: "cover"
          }} />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center">
            {children}
          </div>
        </div>
      ) : (
        <div className="p-10">{children}</div>
      )}
    </>
  );
};

export default Section;
