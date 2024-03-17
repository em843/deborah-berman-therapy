import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col bg-background">
      <div className="relative" style={{ height: "95vh" }}>
        <Image
          src="/images/office.jpeg"
          alt="Deborah's office"
          className="brightness-50"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover"
          }} />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center">
          <h1 className="text-white text-5xl text-center p-4">
            Deborah Berman, LCSW
          </h1>
          <p className="text-white text-2xl text-center ">
            Therapy + Counseling Services
          </p>
          <p className="text-white text-2xl text-center ">Ithaca, New York</p>
        </div>
      </div>
      <div className="p-10">
        <h2 className="mb-4 text-3xl">About Deborah</h2>
        <div className="flex flex-col md:flex-row gap-8 md:items-start items-center">
          <div className="relative shrink-0 w-1/2 h-80 md:w-1/5 md:h-60">
            <Image
              src="/images/deborah.jpeg"
              alt="A headshot of Deborah smiling"
              className="rounded border-2"
              fill
              sizes="100vw"
              style={{
                objectFit: "cover"
              }} />
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
        <h2 className=" text-3xl">Get Started</h2>
      </div>
      <div className="relative" style={{ height: "95vh" }}>
        <Image
          src="/images/path.jpeg"
          alt="Photography of a path on a cloudless day"
          className="brightness-50"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover"
          }} />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center">
          <div className="max-w-sm mx-auto bg-white rounded-lg border border-gray-200 shadow-md p-6 m-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Ready to take the first step?
            </h2>
            <p className="text-gray-700 mb-4">
              Schedule your free, 15-minute phone consultation today. Let's
              explore how we can work together to meet your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="sms:+123456789" // Replace +123456789 with your actual phone number
                className="inline-flex items-center justify-center px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Text
              </a>
              <a
                href="mailto:402nocay@gmail.com?subject=Free 15-Minute Consultation"
                className="inline-flex items-center justify-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
