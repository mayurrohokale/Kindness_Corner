import { Link } from "react-router-dom";
import Map from "./Map";
import MapChart from "./MapChart";
export default function AboutUs() {
  return (
    <div className="bg-white" id="about-us">
       <h1 className="text-4xl font-bold mb-4">About Kindness Corner</h1>
      {/* Header Image */}
      <div className="flex justify-center mt-8">
     
        <img
          src="./images/img19.jpg" // Replace with the path to your header image
          alt="kindness Team"
          className="w-full max-h-[500px] object-cover"
        />
      </div>

      {/* Introduction Section */}
      <div className="text-center mx-4 my-8">
       
        <p className="text-lg mb-4">
          There's a part of every one of us that dreams of a better world. That
          spark of inspiration to help a person, fix something broken, or show
          kindness can start at Kindness Corner, where both individuals and
          charities turn compassion into action. Because that's how change
          happens.
        </p>
        <p className="text-lg">
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

      {/* Learn More Section */}
      <div className="flex justify-center my-8">
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 text-center">
          <img
            src="./images/logo3.png" // Replace with the path to your logo image
            alt="Kindness Corner Logo"
            className="mx-auto mb-4 w-44"
          />
          <p className="text-lg mb-4">
            Launched in 2023, Kindness Corner is the world's leading platform
            for social good. With millions of dollars raised from donations,
            volunteers, and support from generous individuals and organizations,
            we continue our mission to help people everywhere.
          </p>
          <Link to="/learn-more">
            <button className="bg-transparent px-4 py-2 border border-blue-500 font-bold rounded-[4px] text-blue-500">
              Learn more
            </button>
          </Link>
        </div>
      </div>

      {/* Map Section */}
      <div className="flex justify-center my-8  ">
        {/* <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/1920px-World_map_-_low_resolution.svg.png"
          alt="World Map"
          className="w-11/12 md:w-2/3 lg:w-1/2"
        /> */}
        <Map/>
          {/* <MapChart/> */}
      </div>

      {/* GoFundMe Difference Section */}
      <div className="flex flex-col md:flex-row justify-around text-center my-8 px-4">
        <div className="bg-white shadow-lg p-6 m-4 rounded-lg flex-1">
          <h2 className="font-bold text-xl mb-4">Trust</h2>
          <p>
            Our Trust & Safety team works around the clock to protect against
            fraud. We are proud to offer the first and only donor guarantee in
            the industry: the GoFundMe Guarantee.
          </p>
        </div>
        <div className="bg-white shadow-lg p-6 m-4 rounded-lg flex-1">
          <h2 className="font-bold text-xl mb-4">Speed</h2>
          <p>
            Our efficient and easy-to-use fundraising tools help you get your
            campaign up and running quickly, so you can start raising money
            right away.
          </p>
        </div>
        <div className="bg-white shadow-lg p-6 m-4 rounded-lg flex-1">
          <h2 className="font-bold text-xl mb-4">Reach</h2>
          <p>
            With the help of our platform, you can share your campaign with
            friends, family, and even strangers to maximize the impact of your
            cause.
          </p>
          <p>Narendra Kachare</p>
        </div>
      </div>
    </div>
  );
}
