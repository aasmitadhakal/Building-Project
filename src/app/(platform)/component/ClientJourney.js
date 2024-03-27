import React from 'react'
const data = [
    {
        "title": "Timely Delivery",
        "subtitle": "Subtitle 1",
        "description": "Our standard inclusions offer upgrades without compromise, ensuring youget the best value for your first home...",
        "img": "https://s3-alpha-sig.figma.com/img/2fd8/f902/078425e468cca2ead2eac00701478223?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QaX0SL2oQVBjgnh8ONpkP82ss6LoLLl11t~A~yLjl~MziJ8tAaBiBRa62y146bco81cwgAo2yZc5Wns-F~jQWTD0k0n1Ij3gmPqh9MpSndnCftbpmcnCF0Lw01pHSANcY98~~jEZuPNmRmnSqSGwDEc9xK3NYGcESsay1Kgx7XTxYHQZQ21pfxaGz7DIiqaxZULKQdTOJIr9CQRntKlly-sihqlscH~j7Ff9ZnfvdvRoWwTBXFb7FOIngsUKLyOVOXDAz9cqVBbxqfNwec6WmumNAwjEyBXYI2hN-JdXmWOKXux~tAQybAUyvLMHy84sN2EbXKbUDhzVL9O70Kxo5A__"
    },
    {
        "title": "Timely Delivery",
        "subtitle": "Subtitle 2",
        "description": "Our standard inclusions offer upgrades without compromise, ensuring youget the best value for your first home...",
        "img": "https://s3-alpha-sig.figma.com/img/8023/11fc/8a5d7b995c43f03c209533f1be755a4a?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F7-oUwfkzGdjgEKjUjfhuFSpdp5bjDu97yQOcZd~OK3~wDKtNj7ZzDnpkMrI1zPZkMomy~Ne293gLzd0hLQ9HxkFGODWn2M40UEkY6YWBzfG5Zi4S94HeD-2D8vlgWBFPhVjlF4YNt1k0K8ihThsVwEW7J3p1q7JuCIxodEis7rtwfMRXNyOuN8outCobBr49y8GySHSlhvxOGmW1hM1QWyy4bX4sy2VyQ7oIJ~EJQvS3-io~0lKjzeoxxz~SOypHyvZwY5vy01f4TrawNke3MLMOG8NHkuWfn0F3-FTugm8ko7kje9Ef60Ymh6KcMBUOOy3c-ZIEffHTw4xP4LjCQ__"
    },
    {
        "title": "Timely Delivery",
        "subtitle": "Subtitle 3",
        "description": "Our standard inclusions offer upgrades without compromise, ensuring youget the best value for your first home...",
        "img": "https://s3-alpha-sig.figma.com/img/ab7f/b667/49aa493c15d5960425a7830eb0cf4ed1?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QKg2JV8MSX5wLZjJPlXYVf7Yh-grZEeQmDSecjZzQUd3BFIbbxfqQhY5zBRfK4sZmJWv-WCcbVtcoOB8xBtta7qic4j--DqXwUbV2-JV7Rc21pOCV-2dEwkoNXAUD4msZPvp7PUOemAEHg-x~GNQoP59WkOWGv-TAKDnYFET7ZTAksNkVBqoTsx0vs3R8N480XRM0RfJ0lqDY68FRjFSG0fUjbL6VcW6lL5u54CAkPGmhSlwihmIy8iZi0C~NJsT6~gSRU3F9LepjNOfcEP7mY6O8gE8ihUzKC494KL2~iJsTmZYW~wJovPyP~K6KvpfJjW0ZsnZ60oXqcJC5UhQVQ__"
    },
    {
        "title": "Timely Delivery",
        "subtitle": "Subtitle 3",
        "description": "Our standard inclusions offer upgrades without compromise, ensuring youget the best value for your first home...",
        "img": "https://s3-alpha-sig.figma.com/img/ab7f/b667/49aa493c15d5960425a7830eb0cf4ed1?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QKg2JV8MSX5wLZjJPlXYVf7Yh-grZEeQmDSecjZzQUd3BFIbbxfqQhY5zBRfK4sZmJWv-WCcbVtcoOB8xBtta7qic4j--DqXwUbV2-JV7Rc21pOCV-2dEwkoNXAUD4msZPvp7PUOemAEHg-x~GNQoP59WkOWGv-TAKDnYFET7ZTAksNkVBqoTsx0vs3R8N480XRM0RfJ0lqDY68FRjFSG0fUjbL6VcW6lL5u54CAkPGmhSlwihmIy8iZi0C~NJsT6~gSRU3F9LepjNOfcEP7mY6O8gE8ihUzKC494KL2~iJsTmZYW~wJovPyP~K6KvpfJjW0ZsnZ60oXqcJC5UhQVQ__"
    }
];
function ClientJourney() {
  return (
    <>
        <section>
            <div className='grid md:grid-cols-3 font-[karla] my-24 container mx-auto md:px-0 px-4 '>
            {/* for title headding */}
            <div className='grid place-content-center'>
                <p className='text-customblue font-[700] text-[36px] leading-[49px]'> We add Value to Our Client’s Journey </p>
                <button className='my-4 text-customblue hover:text-white hover:bg-customblue px-4 w-44 py-2 rounded ring-customblue ring-1 font-[600] text-[22px] leading-[29px] '>Learn More</button>
            </div>
            {/* for dyanmic part */}
            <div className='md:col-span-2 '>
                <div className='grid md:grid-cols-2 gap-4  '>
            {data.map((datas, index) => (
                <>
                <div key={index.id} className='shadow rounded p-4'>
                    <img src={datas.img} alt='img' className='h-[35px] w-[35px] bg-customyellow rounded px-1 py-1'></img>
                    <p className='my-1 text-black font-[600] text-[24px] leading-[32px]'>{datas.title}</p>
                    <p className='text-blue font-[400] text-[16px] leading-[25px]'>{datas.description}</p>
                </div>
                </>
            ))}
            </div>
                
            </div>
            </div>
        </section>
    </>
  )
}

export default ClientJourney