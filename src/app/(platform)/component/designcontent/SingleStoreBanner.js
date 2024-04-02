import React from 'react'
const banneerdata = [
    {
      "image": "https://s3-alpha-sig.figma.com/img/ae47/d37b/600dc5f3c92919c0e90c6801d7c04d67?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HgqVAmAKPKTHnAl7w1-R2m8RvcYjYUfhKJP7qoE169NCM41XGP46Wh0YTgcAfI1MIOpKBKXtqROgsBnHzx41tnZOPOr5LU5Zjn9QqOX2mB2ImE6WrweZuLbhaokF1IiYIr4aWubY6DIazdRBn06qMD15AisMZY8tK9tio8SU9qZ6H5-3zYZxNkbBFtPkVTco6e3ga3PiZVT9x8CUkm~jZo9~y~qRhMwBRTZBBvm-MM~kV6qofuM2AZNaXPXhzSwaD1IUmKZ1M26p2lgjvM75JP5k0FomYhSbu9Q7vCxMMGfDimYXU1fVqGEFy~SNvGgn8CURDfJMWfdkVqyB8jNa~Q__",
      "title": "Single Storey Homes",
      "introduction": "Build to Last: Your Trusted Construction Partner"
    }
  ];
function SingleStoreBanner() {
  return (
    <>
    {banneerdata.map((card, index) => (
        <section key={index} className="relative w-full h-96 font-[karla]">
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

export default SingleStoreBanner