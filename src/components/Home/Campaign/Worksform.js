export default function Worksform() {
    const worksData = [
      {
        id: 1,
        image: "./images/img4.jpg",
        text:
          "Your Donation can help to provide food to people who are struggling to feed themselves and their families.",
      },
      {
        id: 2,
        image: "./images/img2.jpg",
        text:
          "Your Donation can help to provide education to children who cannot afford to go to school.",
      },
      {
        id: 3,
        image: "./images/img3.jpg",
        text:
          "Your Donation can help to provide shelter to homeless people and families.",
      },
    ];
  
    return (
      <div className="flex flex-col lg:flex-row justify-center py-2 w-full gap-4">
        {worksData.map((item, index) => (
          <div
            key={item.id}
            className="flex flex-col gap-4 md:max-w-[391px] md:h-max rounded-lg hover:border-blue-500 border-black p-3 hover:shadow-lg"
          >
            <img
              src={item.image}
              alt="ngoimage"
              className="object-cover w-full h-40 md:h-48 lg:h-60 rounded-lg"
            />
  
            <div className="w-full flex flex-col items-center p-2">
              <p className="text-start max-w-[300px] text-sm text-black/60">
                {item.text}
              </p>
            </div>
            <h1 className="font-bold text-xl text-start underline pt-8 px-1">
              READ MORE
            </h1>
          </div>
        ))}
      </div>
    );
  }
  