
import Fancybox from './Fancybox';
const data =[
    {
        "largeImageUrl": "https://lipsum.app/id/62/1600x1200",
        "thumbnailUrl": "https://lipsum.app/id/62/200x150"
      },
      {
        "largeImageUrl": "https://lipsum.app/id/64/1600x1200",
        "thumbnailUrl": "https://lipsum.app/id/64/200x150"
      },
    {
        "largeImageUrl": "https://lipsum.app/random/1600x900",
        "thumbnailUrl": "https://lipsum.app/id/62/200x150"
      },
      {
        "largeImageUrl": "https://lipsum.app/id/60/1600x1200",
        "thumbnailUrl": "https://lipsum.app/id/60/200x150"
      },
      {
        "largeImageUrl": "https://lipsum.app/id/62/1600x1200",
        "thumbnailUrl": "https://lipsum.app/id/62/200x150"
      },
      {
        "largeImageUrl": "https://lipsum.app/id/64/1600x1200",
        "thumbnailUrl": "https://lipsum.app/id/64/200x150"
      },
      {
        "largeImageUrl": "https://lipsum.app/id/60/1600x1200",
        "thumbnailUrl": "https://lipsum.app/id/60/200x150"
      },
      {
        "largeImageUrl": "https://lipsum.app/id/61/1600x1200",
        "thumbnailUrl": "https://lipsum.app/id/61/200x150"
      },
      {
        "largeImageUrl": "https://lipsum.app/id/64/1600x1200",
        "thumbnailUrl": "https://lipsum.app/id/64/200x150"
      },
      {
        "largeImageUrl": "https://lipsum.app/id/60/1600x1200",
        "thumbnailUrl": "https://lipsum.app/id/60/200x150"
      },
      {
        "largeImageUrl": "https://lipsum.app/id/62/1600x1200",
        "thumbnailUrl": "https://lipsum.app/id/62/200x150"
      },
      {
        "largeImageUrl": "https://lipsum.app/id/62/1600x1200",
        "thumbnailUrl": "https://lipsum.app/id/62/200x150"
      },
      {
        "largeImageUrl": "https://lipsum.app/id/60/1600x1200",
        "thumbnailUrl": "https://lipsum.app/id/60/200x150"
      },
      {
        "largeImageUrl": "https://lipsum.app/id/64/1600x1200",
        "thumbnailUrl": "https://lipsum.app/id/64/200x150"
      },
      
      {
        "largeImageUrl": "https://lipsum.app/id/60/1600x1200",
        "thumbnailUrl": "https://lipsum.app/id/60/200x150"
      },
      {
        "largeImageUrl": "https://lipsum.app/id/62/1600x1200",
        "thumbnailUrl": "https://lipsum.app/id/62/200x150"
      },
      {
        "largeImageUrl": "https://lipsum.app/id/64/1600x1200",
        "thumbnailUrl": "https://lipsum.app/id/64/200x150"
      },
]
const Bannerdata = [
  {
    "image": "https://s3-alpha-sig.figma.com/img/ae47/d37b/600dc5f3c92919c0e90c6801d7c04d67?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bLezLHW1juxcPNaELFpZpyNi4m0bE8TO8bjZckmqTX01EA5QrjkdPVyXIvjPAGAYsThFs7TGTHINwZlacHTi5dYR1imU1EPpugECwj4RC1WsesYTlPPz39jg0BccIDwG8jUmcnNK9ggGSxAGzv5GubnUbzY1JUnFwC0-y87jiUU1v4NCtMTneAJ6zC-GZOnO2w8kg1ZOhmqppbd7sfMptW49df4Cu6SOpW-v8m0Sdq5E0OVBi~e7VSXhKzASSZAE7N6WIgl0GgkOfnzTzI-wEIcl4LOGqEBKP5SQJGwvRtWMLN4S~mak7W9DN66rWP0HIR4oKA-~Rlq6UhE5YhEDqg__",
    "title": "Gallery",
    "introduction": "Build to Last: Your Trusted Construction Partner"
  }
];
export default function Gallery() {
  return (
    <div>
        {Bannerdata.map((card, index) => (
        <div key={index} className="relative w-full  h-96 font-[Karla]">
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
     <Fancybox
  options={{
    Carousel: {
      infinite: false,
    },
  }}
>
    <div className='grid md:grid-cols-5 grid-cols-2 md:gap-5 gap-2 md:px-0 px-4 container mb-28 mx-auto pt-12'>
{data.map((item, index) => (
          <a key={index} data-fancybox="gallery" href={item.largeImageUrl}>
            <img src={item.thumbnailUrl} width="500" height="450" alt={`Image ${index + 1}`} />
          </a>
        ))}
        </div>
</Fancybox>
    </div>
  );
}
