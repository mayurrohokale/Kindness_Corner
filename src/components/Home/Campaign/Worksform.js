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
    <div className="flex flex-col md:flex-row justify-center py-2 w-full hover:shadow-lg">
      {worksData.map((item, index) => (
        <div
          key={item.id}
          className={`w-full flex flex-col gap-2 md:max-w-[391px] md:h-max rounded-lg hover:border-blue-500 border-black p-3 ${
            index < worksData.length - 1 ? 'mb-4' : ''
          }`}
        >
          <img
            src={item.image}
            alt="ngoimage"
            className="object-contain w-full max-h-[200px]"
          />

          <div className="w-full flex flex-col items-center p-2">
            <p className="text-start max-w-[300px] text-black/60">
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
