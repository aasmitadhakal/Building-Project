import React from 'react'
import { FaCar } from "react-icons/fa";
import { FaToilet } from "react-icons/fa6";
import { FaBed } from "react-icons/fa6";
const banneerdata = [
  {
    image:
      "https://s3-alpha-sig.figma.com/img/2543/dc0c/147aae5d1d374548dd2eac88859fe582?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eYX51-YC~iNoWIX1uoruPSX-xs4Wofdv1RIiYvk5dAWnrffRKTC8wHt2nOdL80SDOMUTu62X-7HUF7cPvJDY7UughsZCKMadC5OufZ2xEn-zKx6NJOMYKnTJrmBBWF9~k8T3QB3bRwffe~7FxOXP9hX~y9G8U1U6NP-JxJeH1lD2c8jSi6IZUVAXwlb8~-DmjSxnYl7PtyFOVfXuQga~SJ2PMljcuSUzx-gKA-AoksLGs5rYAL6zySoIp1H1zvmmftgzzT0ce35eMQfsjTJwjmGXgfigvO7nNn8opB-7wBfq-YzuZ7gqmF6A5ZM4KMPczDhdaUHyaQg~OU0Vdx80eA__",
    title: "Double Occupancy  Homes",
    introduction: "Build to Last: Your Trusted Construction Partner",
  },
];
const data = [
  {
    title: "ANCHOR283",
    img1: "https://s3-alpha-sig.figma.com/img/a83e/c3fd/5df7bde4efe7603131c7dc5cd0178ae7?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fI3wdQ-PuvCFL~x29lv3Lo8H~-i9DMso-uLj~3-PTXpKyW6g2EL07LpJVfbN0P6TZpOCHHO56QDejG6Bb9DuenlwKkGR8PI8Oh31y3ZwFfk3CgOilA0P9Oa4jvHmaNNJRqlFDT0P-dIS5HBsPIq3jjLlM-VNxsjq4d9b4FqVBG0m4ubX-F03p6WbGSOnq-FF1Smcqki8YL1mtAtuvcWQmpYw6qUdgW2mMkcVWVVJ5lOobWbicISRQ39J9-FFvG-mUL0LREyrRIgCAJdM4kEI46x0se7C34PWWaLdE3FcLiOctahDu~KPSJNpZYVMlkhIggg8aKJnEFQpcVzgPjO7aw__",
    img2: "https://s3-alpha-sig.figma.com/img/a83e/c3fd/5df7bde4efe7603131c7dc5cd0178ae7?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fI3wdQ-PuvCFL~x29lv3Lo8H~-i9DMso-uLj~3-PTXpKyW6g2EL07LpJVfbN0P6TZpOCHHO56QDejG6Bb9DuenlwKkGR8PI8Oh31y3ZwFfk3CgOilA0P9Oa4jvHmaNNJRqlFDT0P-dIS5HBsPIq3jjLlM-VNxsjq4d9b4FqVBG0m4ubX-F03p6WbGSOnq-FF1Smcqki8YL1mtAtuvcWQmpYw6qUdgW2mMkcVWVVJ5lOobWbicISRQ39J9-FFvG-mUL0LREyrRIgCAJdM4kEI46x0se7C34PWWaLdE3FcLiOctahDu~KPSJNpZYVMlkhIggg8aKJnEFQpcVzgPjO7aw__",
    title1:"First Floor",
    title2:"Ground Floor",
    frontage_size: "2000 sqft",
    bedroom: 4,
    cars: 2,
    bathroom: 3,
  },
  {
    title: "ANCHOR283",
    img1: "https://s3-alpha-sig.figma.com/img/a83e/c3fd/5df7bde4efe7603131c7dc5cd0178ae7?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fI3wdQ-PuvCFL~x29lv3Lo8H~-i9DMso-uLj~3-PTXpKyW6g2EL07LpJVfbN0P6TZpOCHHO56QDejG6Bb9DuenlwKkGR8PI8Oh31y3ZwFfk3CgOilA0P9Oa4jvHmaNNJRqlFDT0P-dIS5HBsPIq3jjLlM-VNxsjq4d9b4FqVBG0m4ubX-F03p6WbGSOnq-FF1Smcqki8YL1mtAtuvcWQmpYw6qUdgW2mMkcVWVVJ5lOobWbicISRQ39J9-FFvG-mUL0LREyrRIgCAJdM4kEI46x0se7C34PWWaLdE3FcLiOctahDu~KPSJNpZYVMlkhIggg8aKJnEFQpcVzgPjO7aw__",
    img2: "https://s3-alpha-sig.figma.com/img/a83e/c3fd/5df7bde4efe7603131c7dc5cd0178ae7?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fI3wdQ-PuvCFL~x29lv3Lo8H~-i9DMso-uLj~3-PTXpKyW6g2EL07LpJVfbN0P6TZpOCHHO56QDejG6Bb9DuenlwKkGR8PI8Oh31y3ZwFfk3CgOilA0P9Oa4jvHmaNNJRqlFDT0P-dIS5HBsPIq3jjLlM-VNxsjq4d9b4FqVBG0m4ubX-F03p6WbGSOnq-FF1Smcqki8YL1mtAtuvcWQmpYw6qUdgW2mMkcVWVVJ5lOobWbicISRQ39J9-FFvG-mUL0LREyrRIgCAJdM4kEI46x0se7C34PWWaLdE3FcLiOctahDu~KPSJNpZYVMlkhIggg8aKJnEFQpcVzgPjO7aw__",
    title1:"First Floor",
    title2:"Ground Floor",
    frontage_size: "2000 sqft",
    bedroom: 4,
    cars: 2,
    bathroom: 3,
  },
];
function DoubleOcuupance() {
  return (
    <>
      {/* forbanner */}
      {banneerdata.map((card, index) => (
        <div key={index} className="relative w-full h-96 font-[Karla]">
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
      {/* for cards */}
      <div className="grid place-content-center grid-cols-1 md:px-0 px-4 container mx-auto md:gap-8 mb-36 mt-24">
        {data.map((property, index) => (
          <div key={index} className=" shadow-xl p-4  ">
            <h3 className="text-blues  font-[Monstserrat] font-[600] text-[24px] leading-[35px] mx-2">
              {property.title}
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
            <div>
              <img
                src={property.img1}
                alt={property.title}
                className="h-[147px] w-[418px] mb-4"
              />
              <p className="text-brown md:text-[18px] pl-4 text-[10px]  leading-[24px] font-[400]">{property.title1}</p>
            </div>
            <div>
              <img
                src={property.img2}
                alt={property.title}
                className="h-[147px] w-[418px] mb-4"
              />
               <p className="text-brown md:text-[18px] pl-4 text-[10px]  leading-[24px] font-[400]">{property.title2}</p>
            </div>

            <div className="my-4">
              <p className="text-black font-[Monstserrat] font-[400] text-[16px] leading-[22px] my-1 mx-2 flex">
                Frontage Size: {property.frontage_size}
              </p>
              <p className="text-black font-[Monstserrat] font-[400] text-[16px] leading-[22px] my-1 flex">
                <FaBed className="text-blues  mx-2" /> {property.bedroom}Bedrooms
              </p>
              <p className="text-black font-[Monstserrat] font-[400] text-[16px] leading-[22px] my-1 flex">
                {" "}
                <FaCar className="text-blues  mx-2" /> {property.cars}Cars
              </p>
              <p className="text-black font-[Monstserrat] font-[400] text-[16px] leading-[22px] my-1 flex">
                <FaToilet className="text-blues  mx-2" /> {property.bathroom}
                Bathrooms
              </p>
            </div>
            </div>
          </div>
        ))}
      </div>

    </>
  )
}

export default DoubleOcuupance