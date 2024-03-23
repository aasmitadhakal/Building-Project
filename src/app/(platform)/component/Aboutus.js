import React from 'react'
const data = [
    {
        "image1": "https://s3-alpha-sig.figma.com/img/e807/83c3/ecd9c4be1e66a6616ab3f1385ee8d27d?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d-YfncBcF~rrlZXWO9Y5-ykzy6Q5s1zJyEq9y8eVrG1YYVgYHCDXmGWxmZZjPZbc6OSrX4xHP6Z4hvrblDkZk5tDEKqepApOx6Yy8ly6-RfY0O7U-aR3PLZUu1rN3RAWebn5~xNu6aOVIosJcM5s-gIN7wO0Dpo9RTYQW4YRA4bk77QGcEisFpZBRuaAsTplwM0Q-kdcZqdibXaAQnhcFXsiF7qXz1kX0Z4GZVWC~lx2If1kFy09Z1bn1bM0eBr56kLDHBg0ra0gU4JM1pawhsPukw15ZOwQtg--kiPAYuxiXVZgh5i5plufSrXa3Rn0WJBUOPQ-FsfeoDvaDZz7TQ__",
        "image2": "https://s3-alpha-sig.figma.com/img/0cfc/df5b/86814490266506dbe4bd817c540874ac?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bxWp6ycY54Y99Zsd7sseTPZL9FSWRafTqQ~72FZOSYVLyIlj7TTSdqbe0WoAOXENNkwooPAHcriV7Jq6enIhcHyqATnZjd2klBED0lO6OR~akL5zNa27o4EWLeybtTr0RUtGXBAE1abNXm9pCN~A0YRKA3unXF-69-tZtJPqlIqez17utnD-go~mILUcf3mGeacpPXUu06PkDnMiTbd0DABLg8w7qRvWTKcf8uISp5xMZER4kWcbGroXkqGl4RAxfn6fwGKoREUqaHeW5lt9IsuPY~xSWoeIBnRs-HoXuKuvY~mfQsiac~OiJkI7Vt6ufwfrlwWEG2BbZV1NJ2dhGw__",
        "title": "About Us",
        "description": "At 108 Builders, we're more than just builders we're your Our team of experienced professionals brings expertise in every aspect ofconstruction, from project management to skilled labor, ensuring that uction, from project management to skilled labor, ensuring that each endeavor we undertake is executed with precision and care At 108 Builders, we're more than just builders we're your Our team of experienced professionals brings expertise in every aspect ofconstruction, from project management to skilled labor, ensuring that uction,"
    }
  ];
function Aboutus() {
  return (
    <>
     {data.map((datas, index) => (
        <>
     <div key={index.id} className='container mx-auto'>
    <div className='grid md:grid-cols-2 my-0 md:my-12  md:px-0 px-4 '>
    {/* for text part */}
    <div className=' grid place-content-center'>
        <p className='my-4 text-blue font-[700] text-[36px] leading-[49px]'>{datas.title}</p>
      <p className='font-[Montserrat] font-[400] leading-[24px] text-[16px]'>{datas.description}</p>
    </div>
    {/* for img part */}
    <div className='relative flex justify-center items-center overflow-hidden'>
      <img src={datas.image1} className='md:w-[391px] md:h-[347px] w-[200px] h-[150px] rounded ring-4 ring-white mt-24 absolute top-0 left-0'></img>
      <img src={datas.image2} className='md:w-[484px] md:h-[430px] w-[250px] h-[250px] rounded ring-4 ring-white'></img>
    </div>
  </div>
</div>
        </>
     ))}

    </>
  )
}

export default Aboutus