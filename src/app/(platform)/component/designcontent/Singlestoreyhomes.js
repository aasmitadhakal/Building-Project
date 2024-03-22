import React from 'react';

const data = [
    {
      "title": "ANCHOR283",
      "img": "https://s3-alpha-sig.figma.com/img/5d93/3401/30e1d8d8ce248eb1ce14a61e0582a4e0?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nvzz3mHB-pqaejEk2YhEYeBAnjiNjj1diH5iioRX~8HrE9lBJz3vw9kZCKsA1SstNPI4u4oNKEYREtlbLoaooFos9j71StQZBWcS~cB08eg6OWx3xV0uT3-rwygJU6Amx0lkdquQVasxFsyuGVrhdGAb88uTuuD9Ub7hZUtMTX4GKKIytMZAkOkHeBgw44NVJD6SpX~AK6SRpn1LGSylMx-bpc88mdx3jVCFPWxeBrZsPGD9AaM2CTXqq5F5GO6YQTlH~SgbBYwkExKk7z5WB4eFEhcaKEPkPjvSO6RM7IcOZTPWuuttWzeWfZSYJd5ZF2i7x6TMbQC00sL7q8buoA__",
      "frontage_size": "2000 sqft",
      "bedroom": 4,
      "cars": 2,
      "bathroom": 3
    },
    {
      "title": "ANCHOR283",
      "img": "https://s3-alpha-sig.figma.com/img/5d93/3401/30e1d8d8ce248eb1ce14a61e0582a4e0?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nvzz3mHB-pqaejEk2YhEYeBAnjiNjj1diH5iioRX~8HrE9lBJz3vw9kZCKsA1SstNPI4u4oNKEYREtlbLoaooFos9j71StQZBWcS~cB08eg6OWx3xV0uT3-rwygJU6Amx0lkdquQVasxFsyuGVrhdGAb88uTuuD9Ub7hZUtMTX4GKKIytMZAkOkHeBgw44NVJD6SpX~AK6SRpn1LGSylMx-bpc88mdx3jVCFPWxeBrZsPGD9AaM2CTXqq5F5GO6YQTlH~SgbBYwkExKk7z5WB4eFEhcaKEPkPjvSO6RM7IcOZTPWuuttWzeWfZSYJd5ZF2i7x6TMbQC00sL7q8buoA__",
      "frontage_size": "3500 sqft",
      "bedroom": 5,
      "cars": 3,
      "bathroom": 4
    },
    {
      "title": "ANCHOR283",
      "img": "https://s3-alpha-sig.figma.com/img/5d93/3401/30e1d8d8ce248eb1ce14a61e0582a4e0?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nvzz3mHB-pqaejEk2YhEYeBAnjiNjj1diH5iioRX~8HrE9lBJz3vw9kZCKsA1SstNPI4u4oNKEYREtlbLoaooFos9j71StQZBWcS~cB08eg6OWx3xV0uT3-rwygJU6Amx0lkdquQVasxFsyuGVrhdGAb88uTuuD9Ub7hZUtMTX4GKKIytMZAkOkHeBgw44NVJD6SpX~AK6SRpn1LGSylMx-bpc88mdx3jVCFPWxeBrZsPGD9AaM2CTXqq5F5GO6YQTlH~SgbBYwkExKk7z5WB4eFEhcaKEPkPjvSO6RM7IcOZTPWuuttWzeWfZSYJd5ZF2i7x6TMbQC00sL7q8buoA__",
      "frontage_size": "1800 sqft",
      "bedroom": 3,
      "cars": 1,
      "bathroom": 2
    }
];

function Singlestoreyhomes() {
  return (
    <div className="grid grid-cols-3 container mx-auto gap-8  mt-44">
      {data.map((property, index) => (
        <div key={index} className=" shadow-xl p-4 ">
             <h3 className='text-blue font-[Monstserrat] font-[600] text-[24px] leading-[35px]'>{property.title}</h3>
          <img src={property.img} alt={property.title} className='h-[341px] w-full' />
         
          <p className='text-black font-[Monstserrat] font-[400] text-[16px] leading-[22px]'>Frontage Size: {property.frontage_size}</p>
          <p className='text-black font-[Monstserrat] font-[400] text-[16px] leading-[22px]'>Bedrooms: {property.bedroom}</p>
          <p className='text-black font-[Monstserrat] font-[400] text-[16px] leading-[22px]'>Parking Spaces: {property.cars}</p>
          <p className='text-black font-[Monstserrat] font-[400] text-[16px] leading-[22px]'>Bathrooms: {property.bathroom}</p>
        </div>
      ))}
    </div>
  );
}

export default Singlestoreyhomes;