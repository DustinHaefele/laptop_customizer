import React from "react";
import ReactDOM from "react-dom";
import Enzyme from "enzyme";
import toJson from "enzyme-to-json";
import FeaturePriceSummary from "./FeaturePriceSummary";

describe("Price Summary Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<FeaturePriceSummary 
      selected={{
        Processor: {
          name: "17th Generation Intel Core HB (7 Core with donut spare)",
          cost: 700
        },
        "Operating System": {
          name: "Ubuntu Linux 16.04",
          cost: 200
        },
        "Video Card": {
          name: "Toyota Corolla 1.5v",
          cost: 1150.98
        },
        Display: {
          name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
          cost: 1500
        }
      }} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders UI as expected',() => {
    const wrapper = Enzyme.shallow(
      
      <FeaturePriceSummary 
      selected={{
        Processor: {
          name: "17th Generation Intel Core HB (7 Core with donut spare)",
          cost: 700
        },
        "Operating System": {
          name: "Ubuntu Linux 16.04",
          cost: 200
        },
        "Video Card": {
          name: "Toyota Corolla 1.5v",
          cost: 1150.98
        },
        Display: {
          name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
          cost: 1500
        }
      }} />
      
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders a different list when selected prop changes',() => {
    const wrapper = Enzyme.shallow(
      
      <FeaturePriceSummary 
      selected={{
        Processor: {
          name: "CHANGED PROP HERE",
          cost: 7000000
        },
        "Operating System": {
          name: "Ubuntu Linux 16.04",
          cost: 200
        },
        "Video Card": {
          name: "Toyota Corolla 1.5v",
          cost: 1150.98
        },
        Display: {
          name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
          cost: 1500
        }
      }} />
      
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });


});
