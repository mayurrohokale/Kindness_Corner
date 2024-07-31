import * as React from "react";
import WorldMap from "react-svg-worldmap";


function App() {


  // Function to get volunteer data
  const getVolunteersCount = () => {
    // Example data: list of countries and their volunteer counts
    return [
      { country: "in", volunteers: 500 },
      // { country: "us", volunteers: 0 },
      // { country: "br", volunteers: 0 },
      // Add more countries and volunteer counts as needed
    ];
  };

  // Generate data array for the WorldMap component based on volunteers count
  const generateVolunteerData = () => {
    const volunteerData = getVolunteersCount();
    return volunteerData.map((item) => ({
      country: item.country,
      value: item.volunteers,
    }));
  };

  const volunteerData = generateVolunteerData();

  return (
    <div className="App">
      <WorldMap
        color="#F70059"
        title="Volunteers"
        value-suffix="volunteers"
        size="responsive"
        data={volunteerData}
      />
    </div>
  );
}

export default App;
