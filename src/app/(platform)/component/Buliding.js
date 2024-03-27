"use client";
import React from 'react';
import { useState } from 'react';

const data = [
    {
        "title": "Image 1",
        "description": " For over a decade, we've led the market in custom home design and construction throughout Melbourne. Our extensive experience includes navigating counc regulations and requirements, from consideratiolike neighborly integration to thorough land assessments including soil tests, feature surveys, and arborist reports.With our expertise, we guide you through these processes and offer innovativesolutions tailored to your needs.",
        "img": "https://s3-alpha-sig.figma.com/img/27d1/9ef0/453f497d410a384e2e24ce3015a30b9b?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NTKXRyCV6iYAcsBybgLabVdFghfG63HEUyzH2QIhvjHrLSTSzBo42U1f5pLdEJCyQmVTmQldBx4kJh1Mqh7PNWbmQu5x7-yUozHoml9uaUUC9Jd5wvEDd0sHRUqodELtT2hGQRuVkxdrUtfIcL7WkHE4h2VDv1FEUXdjsQi5pfF1ue4XLRyccCa5oUc3Yw~PbEQK0w99TVD9llSJVPtu2rHuhGVfT2XhpYYUF~SGOfwkJkSV5Y~Pe235~KneBI3vOfYhXFu3wnwduBqR5cUo34IYaluCJ0uv9O0a6C4pjVsk2VWZ8dUnu4qe~OY421G3-7ccz0DxCsr2-tujZs2YMg__"
    },
    {
        "title": "Image 2",
        "description": " For over a decade, we've led the market in custom home design and construction throughout Melbourne. Our extensive experience includes navigating counc regulations and requirements, from consideratiolike neighborly integration to thorough land assessments including soil tests, feature surveys, and arborist reports.With our expertise, we guide you through these processes and offer innovativesolutions tailored to your needs.",
        "img": "https://s3-alpha-sig.figma.com/img/eefd/42c9/825c0dc4f41c27ea8b8a9229b6a9459a?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iTXXHD4flh3qtNoY5ATRhwdSvkU4WqgXjvpZDdHOQzPEiuSX6sNEf3FPOHR92MWt-NB3pkGetiVbYHrwHurCFY6ByNkKtK2-OpjRCq8biav8-1g~qne0M0egbDMEc3L73xBICm1osPQmPOjmHHtoD5LEkw4QSWIladTLDuv~HPPGzmyR0AM13iclTlHgA32iMSuuh8GHyIml6vnXXhWcBCPpmmX01QlYki-hpDdgvOVWd1A9tZmPEcQzb~F-zAT-yWHGAQrvAix8p4U6TLVcUBKaBZBSnZyhTlC2swM0tqoD~ueQjygR3uygn3f5ozrfqtWC~P7xWtBza-Jn2Q6oJw__"
    },
    {
        "title": "Image 3",
        "description": " For over a decade, we've led the market in custom home design and construction throughout Melbourne. Our extensive experience includes navigating counc regulations and requirements, from consideratiolike neighborly integration to thorough land assessments including soil tests, feature surveys, and arborist reports.With our expertise, we guide you through these processes and offer innovativesolutions tailored to your needs.",
        "img": "https://s3-alpha-sig.figma.com/img/715d/a18b/219bfc8f6953cfa6573ec92cfd12634a?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SdnxGwwtP5wk2q-rZvcWDsDH9dRIAaxXlKRLQNxjQb42EET8vkV4q4KncoVzLHAlxyBcRKNv7rvzwqNIhk~x-kDt5WBCA1LjoWNghe98ykL9U2New1-o7hegutSp57YVpY22~G7SSq0E6TTsqKi57PJA-p~SR-MKxe4zYcG-DtnrC2MegltOQy0UTcQEd-~WSZJxVjfsOoM7XR7Qr7KIsAlODc90PeVpgxrYy7~bjwbAfZG3rHt5imPNxK081GJ2aR6MDLOer~Mg8xI0FCFzhCbhmo~ALF-tBwTAocvH~KzYniDtO2LkVXAZTQae3SEABNvGortlE7tBVoTl97wb6w__"
    },
    {
        "title": "Image 4",
        "description": " For over a decade, we've led the market in custom home design and construction throughout Melbourne. Our extensive experience includes navigating counc regulations and requirements, from consideratiolike neighborly integration to thorough land assessments including soil tests, feature surveys, and arborist reports.With our expertise, we guide you through these processes and offer innovativesolutions tailored to your needs.",
        "img": "https://s3-alpha-sig.figma.com/img/dfe2/9280/4e8571a2230bffb8fca5a58b860deaf1?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KyrVD1N45pvw2vaAEzzX~0SAKWcRi4Efp24iwaSDVOvQZ8J0FihX71md2egjnnhCPd9CPuA7884kLMudI3vXbAhYHKap~9BXimr5qKftHCRKzZBpxu56SvejWOjnZHlSzotK~VEnTlYBCdUSjQOAvua-uHWkuPP65zR1mNVTSSp9RRHQboVOv8sk6wmuoKBVQNDn1kT7pl7Z~aggAM4aaSUCYtWWbapXuFiuW7xw7ttPnbz9e2XX6TXvBexdh89WUZXzO2HPXdYKtJGuC68xbaTT-on8qzmcoM2cjA1MJDRA7ieiZ9lQqoUuBvz3WHU052jDYGmTlpHeJ9vKsQ65kg__"
    }
];

function Buliding() {
   
    return (
        <>
        <section className="bg-customgray py-8 font-[Montserrat]">
            <div className=' mb-4'>
            <p className='text-cutombrown md:text-[18px] text-[10px]  leading-[24px] font-[400] grid place-content-center'>Building Excellence Together.</p>
          <p className='text-customblue md:text-[36px] text-[26px] leading-[49px] md:font-[700] font-[700] my-1 grid place-content-center '>Our Building Process</p>
            </div>
            <div className="container mx-auto px-4 font-[Montserrat]">
                {data.map((item, index) => (
                    <div key={index} className={`flex flex-wrap items-center mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                        <div className="w-full md:w-1/2 mb-4 md:mb-0">
                            <h2 className="my-1 text-customblues font-[600] text-[24px] leading-[32px] mx-4">{item.title}</h2>
                            <p className="font-[Montserrat] font-[400] leading-[24px] text-[16px] text-[#6C6C6C] text-justify mx-4">{item.description}</p>
                        </div>
                        <div className="w-full md:w-1/2 ">
                            <img src={item.img} alt={item.title} className="w-[569px] h-[269px] rounded-xl" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
        </>
    );
}

export default Buliding;