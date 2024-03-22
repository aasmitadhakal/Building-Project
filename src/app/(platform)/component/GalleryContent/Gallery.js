
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
export default function Gallery() {
  return (
    <div>
     <Fancybox
  options={{
    Carousel: {
      infinite: false,
    },
  }}
>
    <div className='grid md:grid-cols-5 grid-cols-2 gap-5 container mb-28 mx-auto pt-12'>
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
