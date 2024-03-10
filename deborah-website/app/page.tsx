import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col bg-background">
      <div className="relative" style={{ height: "95vh" }}>
        <Image
          src="/images/office.jpeg"
          alt="Deborah's office"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center">
          <h1 className="text-white text-5xl text-center p-4">
            Deborah Berman, LCSW
          </h1>
          <p className="text-white text-2xl text-center ">
            Therapy + Counseling Services
          </p>
        </div>
      </div>
      <div className="p-10">
        <h2 className="mb-4 text-3xl">About Deborah</h2>
        <div className="flex flex-col md:flex-row gap-8 md:items-start items-center">
          <div className="relative shrink-0 w-1/2 h-80 md:w-1/5 md:h-60">
            <Image
              src="/images/deborah.jpeg"
              alt="A headshot of Deborah smiling"
              layout="fill"
              objectFit="cover" // Adjust as needed to control how the image fits within its container
              className="rounded border-2" // Optional: Adds rounded corners to the image
            />
          </div>
          <div className="flex-grow">
            <p className="mb-4">
              The work of therapy starts even before the first session is
              scheduled. Who will hear you? Who will understand your unique way
              of sharing your concerns, goals, confusion, and values? Extensive
              experience has deepened my knowledge of the human experience and
              enriched what I have to offer. In sessions, I will listen as you
              tell your story to understand and to help you make the next move
              in your life feeling more fulfilled and at peace.
            </p>
            <p className="mb-4">
              I am a graduate of the Smith School for Social Work ('92) where
              the majority of training was in the field under the supervision of
              seasoned professionals. Since graduation, I have trained in
              mindfulness, cognitive therapy, and family systems as well as many
              other topics. I also have a special interest in learning
              disabilities and how they affect children and families. Please see
              other areas of the website where techniques are further explained.
            </p>
            <p className="mb-4">
              My life outside of the office enriches my life within it. I am an
              avid gardener, I enjoy cooking, singing, and tai-chi. My
              undergraduate major was in Art History and I have maintained an
              interest in the arts. These interests bring me to the consulting
              room with a freshness and openness to you as a patient. While
              there are many techniques and schools of therapy, the foundation
              of the process is connection, which I hope to offer you in our
              work together. I encourage you to take that first step and
              schedule a consultation free of charge.
            </p>
          </div>
        </div>
      </div>
      <div className="p-10">
        <h2 className="mb-4 text-3xl">Schedule</h2>
      </div>
    </div>
  );
}
