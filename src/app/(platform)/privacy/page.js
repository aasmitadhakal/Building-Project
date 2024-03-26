import React from 'react';

const data = [
    {
        "description": "For over a decade, we've led the market in custom home design and construction throughout Melbourne. Our extensive experience includes navigating council regulations and requirements, from considerations like neighborly integration to thorough land assessments including soil tests, feature surveys, and arborist reports. With our expertise, we guide you through these processes and offer innovative solutions tailored to your needs.For over a decade, we've led the market in custom home design and construction throughout Melbourne. Our extensive experience includes navigating council regulations and requirements, from considerations like neighborly integration to thorough land assessments including soil tests, feature surveys, and arborist reports. With our expertise, we guide you through these processes and offer innovative solutions tailored to your needsFor over a decade, we've led the market in custom home design and construction throughout Melbourne. Our extensive experience includes navigating council regulations and requirements, from considerations like neighborly integration to thorough land assessments including soil tests, feature surveys, and arborist reports. With our expertise, we guide you through these processes and offer innovative solutions tailored to your needs.s For over a decade, we've led the market in custom home design and construction throughout Melbourne. Our extensive experience includes navigating council regulations and requirements, from considerations like neighborly integration to thorough land assessments including soil tests, feature surveys, and arborist reports. With our expertise, we guide you through these processes and offer innovative solutions tailored to your needs."
    }
];
const banneerdata = [
    {
      image:
        "https://s3-alpha-sig.figma.com/img/2543/dc0c/147aae5d1d374548dd2eac88859fe582?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eYX51-YC~iNoWIX1uoruPSX-xs4Wofdv1RIiYvk5dAWnrffRKTC8wHt2nOdL80SDOMUTu62X-7HUF7cPvJDY7UughsZCKMadC5OufZ2xEn-zKx6NJOMYKnTJrmBBWF9~k8T3QB3bRwffe~7FxOXP9hX~y9G8U1U6NP-JxJeH1lD2c8jSi6IZUVAXwlb8~-DmjSxnYl7PtyFOVfXuQga~SJ2PMljcuSUzx-gKA-AoksLGs5rYAL6zySoIp1H1zvmmftgzzT0ce35eMQfsjTJwjmGXgfigvO7nNn8opB-7wBfq-YzuZ7gqmF6A5ZM4KMPczDhdaUHyaQg~OU0Vdx80eA__",
      title: "Privacy And Policy",
      introduction: "Build to Last: Your Trusted Construction Partner",
    },
  ];
function Page() {
    return (
        <>
         {/* forbanner */}
      {banneerdata.map((card, index) => (
        <div key={index} className="relative mt-20 w-full h-96 font-[Karla]">
          <div
            className="w-full h-96"
            style={{
              position: "absolute",
              backgroundColor: "#051721",
              opacity: "0.7",
              zIndex: "1",
            }}
          ></div>
          <img
            className="absolute inset-0 w-full h-96 object-cover"
            src={card.image}
            alt="Background"
          />

          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              color: "white",
              width: "100%",
              zIndex: "2",
            }}
          >
            <h1 className=" mb-4 font-[500] text-[44px] text-white leading-[32px]">
              {card.title}
            </h1>
          </div>
        </div>
      ))}
      {/* for detail */}
            {data.map((item, index) => (
                <div key={index} className='mt-4 text-slate-700 font-[400] font-[karla] container mx-auto md:px-0 px-4 text-justify mb-44'>
                    {item.description}
                </div>
            ))}
        </>
    );
}

export default Page;