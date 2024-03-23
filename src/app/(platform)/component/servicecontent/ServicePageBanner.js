import React from 'react'
const data = [
    {
      "image": "https://s3-alpha-sig.figma.com/img/27a8/f4f0/177a8f21664166aee3f60441d49e7e40?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hbpK0yuS-dbjxK1NMnUzBqU3IJp87y3pbMHH~5uDVeJRqUPC31RSwqQr4-KtPawWmdkxtQ~OJOdyifStuew9kMjhwP7m4-lER-EyXfdUlDfs3AyLMKA2UQ8GIzQhT6HBx0TnDxd9Zjp4eM7uk8YLU5f8dkL3EGWoXDuGteDZRh489yNKAchFkDQAqa-~ijKQVKpAXSlHb3BQs5PhBncCpt8xguwhPkoOjDQMAQFQ84oazwYVhYk-qIoVEkVl4hUli8CUsyMAuGjcbfvgDQzaqefuFXFw-H4gi16yAg9zEh3-By0vHRnqPEQnTqbinjA5xuXWIBcEadoFiwxIcvCHfw__",
      "title": "Services",
      "introduction": "Build to Last: Your Trusted Construction Partner"
    }
  ];
function ServicePageBanner() {
  return (
   <>
    {data.map((card, index) => (
        <div key={index} className="relative w-full mt-20 h-96 font-[Karla]">
              <div className='w-full h-96' style={{ position: 'absolute', backgroundColor: '#051721', opacity: '0.7', zIndex: '1'}}></div>
          <img
            className="absolute inset-0 w-full h-96 object-cover"
            src={card.image}
            alt="Background"
          />
           
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white', width: '100%', zIndex: '2' }} >
            
              <h1 className=" mb-4 font-[500] text-[44px] text-white leading-[32px]">{card.title}</h1>
            
           
          </div>
        </div>
      ))}
   </>
  )
}

export default ServicePageBanner