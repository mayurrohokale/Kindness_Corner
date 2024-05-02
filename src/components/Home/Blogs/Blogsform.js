export default function Blogsform() {
   
    const Blogs = [
        {
            id:1,
            title:"together we  can make a difference",
            text:"Your Donation can help to provide food to people who are struggling to feed themselves and their families ",

        },
        {
            id:2,
            title:"together we  can make a difference",
            text:"Your Donation can help to provide food to people who are struggling to feed themselves and their families ",

        },
        {
            id:3,
            title:"together we  can make a difference",
            text:"Your Donation can help to provide food to people who are struggling to feed themselves and their families ",

        },
    ]
  
    return (
      <div className="flex flex-col lg:flex-row justify-center py-2 w-full gap-4 ">
        {Blogs.map((item, index) => (
          <div
            key={item.id}
            className={`w-full flex flex-col gap-2 md:max-w-[391px] md:h-max rounded-lg bg-[#78BCF5] border  border-black p-3 hover:shadow-lg font-monserrat ${
              index < Blogs.length - 1 ? 'mb-4' : ''
            }`}
          >

  
            <div className="w-full flex flex-col items-center p-2">
                <h1 className="text-start font-bold text-[21px]">{item.title}</h1>
              <p className="text-start max-w-[300px] text-black/60">
                {item.text}
              </p>
            </div>
         
          </div>
        ))}
      </div>
    );
  }
  