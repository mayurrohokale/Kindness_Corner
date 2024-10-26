import { Link } from "react-router-dom";


export default function AboutUs() {
  return (
    <div className="bg-white mx-4 md:mx-12 lg:mx-28" id="about-us">
      <div className="relative h-[250px] md:h-[400px] lg:h-[56vh]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('./images/img2.jpg')" }}
        >
          <div className="absolute inset-0 bg-black opacity-80"></div>
          <div className="relative flex flex-col justify-center items-center text-white font-bold text-[20px] md:text-[45px] gap-6 font-monserrat h-full">
            <h1 className="text-center">
              About <span className="text-[#F70059]">Kindness Corner</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="text-center my-4 font-semibold font-itim text-sm md:text-xl">
        <p>
          ...Life is good when you are happy, but much better <br /> when others
          are Happy, because of you!
        </p>
      </div>
      <div className="text-xs md:text-lg  text-justify font-josiefin my-8">
        <p className="mb-4">
          There's a part of every one of us that dreams of a better world. That
          spark of inspiration to help a person, fix something broken, or show
          kindness can start at Kindness Corner, where both individuals and
          charities turn compassion into action. Because that's how change
          happens.
        </p>
        <p className="">
          With fundraising for all, we are smashing the giving layer of the
          internet: a space where individuals, teams, organizations, and
          nonprofits can share their story far and wide, rally support from
          friends, family, and strangers, and get funds to move their mission
          forward. Kindness Corner has become a trusted leader in online
          fundraising, helping people raise millions of dollars for the causes
          and lives that mean the most to them. We are transforming the way
          people give and changing lives — are you ready to join us?
        </p>
      </div>
      <div className="flex font-josiefin justify-center my-8">
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg  md:w-2/3 lg:w-1/2 text-center">
          <img
            src="./images/logo3.png"
            alt="Kindness Corner Logo"
            className="mx-auto mb-4 w-44"
          />
          <p className=" text-sm lg:text-lg mb-4">
            Launched in 2023, Kindness Corner is the world's leading platform
            for social good. With millions of dollars raised from donations,
            volunteers, and support from generous individuals and organizations,
            we continue our mission to help people everywhere.
          </p>
          <Link to="/learn-more">
            <button className="bg-transparent  px-4 py-2 border border-blue-500 font-bold rounded-[4px] text-blue-500">
              Learn more
            </button>
          </Link>
        </div>
      </div>
      <div className="flex items-center  justify-center max-w-full">
        <div>
          <img src="./images/world2.png" alt="map" />
        </div>
        {/* <Map /> */}

        {/* <WorldMap /> */}
      </div>
      <div className="flex font-josiefin flex-col md:flex-row justify-around text-justify my-8 px-4">
        <div className="bg-white shadow-lg p-6 m-4 rounded-lg flex-1">
          <h2 className="font-bold text-lg lg:text-xl mb-4 text-center">
            Trust
          </h2>
          <p>
            Our Trust & Safety team works around the clock to protect against
            fraud. We are proud to offer the first and only donor guarantee in
            the industry: the GoFundMe Guarantee.
          </p>
        </div>
        <div className="bg-white shadow-lg p-6 m-4 rounded-lg flex-1">
          <h2 className="font-bold text-lg lg:text-xl mb-4 text-center">
            Speed
          </h2>
          <p>
            Our efficient and easy-to-use fundraising tools help you get your
            campaign up and running quickly, so you can start raising money
            right away.
          </p>
        </div>
        <div className="bg-white shadow-lg p-6 m-4 rounded-lg flex-1">
          <h2 className="font-bold text-lg lg:text-xl mb-4 text-center">
            Reach
          </h2>
          <p>
            With the help of our platform, you can share your campaign with
            friends, family, and even strangers to maximize the impact of your
            cause.
          </p>
        </div>
      </div>
      <div className="md:m-8 ">
        <h1 className="font-monserrat font-bold text-lg md:text-xl ">Testimonial</h1>
        <div className="p-2">
          <h1 className="font-monserrat font-semibold md:text-center text-start text-sm md:text-lg ">
            <span className="text-[#F70059]">Kindness Corner</span> Representative
          </h1>
          <div className="">
            <p className="text-xs pt-2 font-monserrat text-justify">
               As a representative of Kindness Corner, I'd like to express our
              heartfelt gratitude for the incredible support we've received from
              our volunteers, donors, and community members. At Kindness Corner,
              we believe in the power of collective action to bring about
              meaningful change, and it's the testimonials from those we've
              served and those who've joined us in our mission that truly
              highlight the impact of our work. Our testimonials are real
              stories from real people whose lives have been touched by our
              initiatives. They reflect the essence of what we do—bridging the
              gap between those who want to help and those in need. Whether it's
              a volunteer sharing their rewarding experience of giving back, a
              donor who has witnessed the tangible difference their
              contributions have made, or a beneficiary whose life has been
              transformed, these testimonials are a testament to the kindness
              and compassion that drives our cause. We invite you to read
              through these stories and see for yourself the ripple effect of
              kindness. Your support, whether through time, resources, or
              spreading the word, helps us continue our mission of creating a
              brighter, more compassionate world for all. Together, we can make
              a lasting difference, one act of kindness at a time.
            </p>
            <h1 className="font-itim text-end">-Mayur Rohokale</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
