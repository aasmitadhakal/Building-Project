import React from 'react'
const data = [
    {
      "image": "https://s3-alpha-sig.figma.com/img/27a8/f4f0/177a8f21664166aee3f60441d49e7e40?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cciCql5FRNtJBObkoQaBQ3sc4MIZY23eSzUxGp-r3ZPNOhQT6PLZWS-TWAirFX7ft-IHt8b8xrnPluRMx5AVI8Mk0nJXYWbLCTyqxurIxzZuL0mB80NAEm1pTwqDoNtBrafZ98DIijau~znzFo5m3mIHcw-L9Y6BulLqhBSJbuBG5jifqVqf94Mk8w6WMs3S4XtNPTvKif4teKoq~xX5pF5n82phBLpAunCICrlo54DTYxyNdPSeZ3LHj00Kn1RaAWxcHOEnALAfgKVjggzBomsjdK8vEWTtGW~IIDJ6cYL-nl1dgauDOaJpbXYxB6mI-W8in6-WIEawVF4djI2zOg__",
      "title": "Services",
      "introduction": "Build to Last: Your Trusted Construction Partner"
    }
  ];
function ServicePageBanner() {
  return (
   <>
    {data.map((card, index) => (
        <section key={index} className="relative w-full mt-20 h-96 font-[Karla]">
              <div className='w-full h-96' style={{ position: 'absolute', backgroundColor: '#051721', opacity: '0.7', zIndex: '1'}}></div>
          <img
            className="absolute inset-0 w-full h-96 object-cover"
            src={card.image}
            alt="Background"
          />
           
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white', width: '100%', zIndex: '2' }} >
            
              <h1 className=" mb-4 font-[500] text-[44px] text-white leading-[32px]">{card.title}</h1>
            
           
          </div>
        </section>
      ))}
   </>
  )
}

export default ServicePageBanner