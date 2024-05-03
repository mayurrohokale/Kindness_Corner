export default function Blogsform() {
   
    const Blogs = [
        {
            id:1,
            title:"Making an Impact:",
            text:" In this blog, you can share inspiring stories of individuals or communities that have benefited from the donations and support received through your platform. Highlight the positive impact made by the collective efforts of the users and the NGOs they voted for"

        },
        {
            id:2,
            title:"NGO Spotlight: ",
            text:"This blog series can feature in-depth profiles of different NGOs that are part of your donation voting system. Share their missions, projects, and success stories. It's a great way to raise awareness about the important work being done by these organizations",

        },
        {
            id:3,
            title:"Tips for Effective Giving:",
            text:" Offer practical advice and tips to your community on how they can make their donations go further. Share insights on researching NGOs, evaluating their effectiveness, and understanding how their donations can create sustainable change. Encourage readers ",

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
  