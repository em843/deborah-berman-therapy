import React from "react";
import Image from "next/image";
import Section from "./components/section";

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
            objectFit: "cover",
          }}
        />
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
                objectFit: "cover",
              }}
            />
          </div>
          <div className="flex-grow">
            <p className="mb-4">
            Finding a therapist can be hard. How do you know who you will be able to share your most personal feelings and experiences with? I have thirty years of experience helping people begin the process. Sometimes things work out and we continue to reach goals together. Sometimes I am helpful in clarifying who would be a good fit for a client and what their goals are. Whether you are experienced in using the therapeutic relationship or just starting to figure that out, I hope I can be useful.
            </p>
            <p className="mb-4">
            I am a graduate of the Smith School for Social Work (&apos;92) where our training involved working directly with patients under the supervision of experienced professionals. Since then I have trained in many techniques and methods. Over the years, I have integrated research and practice and have taken the best from the work that I have studied. But most importantly, I have learned from the people I have worked with to listen carefully to their stories and match their needs. I look forward to hearing from you and working together to create a productive bond in therapy.

            </p>
            <p className="mb-4">
            </p>
          </div>
        </div>
      </div>
      <Section title="Get Started" imgSrc="/images/path.jpeg" altText="Deborah's photo of a path" style="grayscale">
        <div className="max-w-sm mx-auto bg-white rounded-lg border border-gray-200 shadow-md p-6 m-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Ready to take the first step?
          </h2>
          <p className="text-gray-700 mb-4">
            Schedule your free, 15-minute phone consultation today. Let&apos;s
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
      </Section>
      {/* <div className="relative" style={{ height: "95vh" }}>
        <Image
          src="/images/path.jpeg"
          alt="Photography of a path on a cloudless day"
          className="brightness-50"
        />
      </div> */}
    </div>
  );
}
