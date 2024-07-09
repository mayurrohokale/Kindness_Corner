import React from "react";
import DatamapsIndia from "react-datamaps-india";

const MapChart = () => {
  return (
    <div style={{ backgroundColor: '#333333', padding: '20px', borderRadius: '8px' }} className="inline-block">
      <h1 style={{ color: '#fff', textAlign: 'center' }}>Volunteers in India</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <DatamapsIndia
          regionData={{
            Maharashtra: {
              value: 10
            },
            Karnataka: {
              value: 700
            },
            TamilNadu: {
              value: 190
            },
          }}
          hoverComponent={({ value }) => {
            return (
              <div>
                <div>{value.value} volunteers</div>
              </div>
            );
          }}
          mapLayout={{
            startColor: "#E91E63",
            endColor: "#FFC1C1",
            hoverTitle: "Count",
            noDataColor: "#333333",
            borderColor: "#7f8487",
            hoverBorderColor: "#7f8487",
            hoverColor: "#E91E65",
            height: 500, // Adjust height as needed
            width: 400 // Adjust width as needed
          }}
        />
      </div>
    </div>
  );
};

export default MapChart;
