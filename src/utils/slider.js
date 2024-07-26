



export default function Carousel({ slides }) {
  return (
    <div className="">
      <div className="flex">
        {slides.map((s) => {
          return <img src={s} />;
        })}
      </div>
    </div>
  );
}
