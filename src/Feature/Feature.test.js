import React from "react";
import ReactDOM from "react-dom";
import Enzyme from "enzyme";
import toJson from "enzyme-to-json";
import Feature from "./Feature";

describe("Feature Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Feature
        options={[
          {
            name: "17th Generation Intel Core HB (7 Core with donut spare)",
            cost: 700
          },
          {
            name: "Professor X AMD Fire Breather with sidewinder technology",
            cost: 1200
          }
        ]}
        myKey={"Operating System"}
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
        }}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders UI as expected", () => {
    const wrapper = Enzyme.shallow(
      <Feature
        options={[
          {
            name: "17th Generation Intel Core HB (7 Core with donut spare)",
            cost: 700
          },
          {
            name: "Professor X AMD Fire Breather with sidewinder technology",
            cost: 1200
          }
        ]}
        myKey={"Processor"}
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
        }}
      />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("Changes which is selected onClick", () => {
    const wrapper = Enzyme.shallow(
      <Feature
        options={[
          {
            name: "17th Generation Intel Core HB (7 Core with donut spare)",
            cost: 700
          },
          {
            name: "Professor X AMD Fire Breather with sidewinder technology",
            cost: 1200
          }
        ]}
        myKey={"Processor"}
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
        }}
        onClick={jest.fn()}
      />
    );
    wrapper
      .find("div")
      .at(1)
      .simulate("click");
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders with the correct selected class", () => {
    const wrapper = Enzyme.shallow(
      <Feature
        options={[
          {
            name: "17th Generation Intel Core HB (7 Core with donut spare)",
            cost: 700
          },
          {
            name: "Professor X AMD Fire Breather with sidewinder technology",
            cost: 1200
          }
        ]}
        myKey={"Processor"}
        selected={{
          Processor: {
            name: "Professor X AMD Fire Breather with sidewinder technology",
            cost: 1200
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
        }}
        onClick={jest.fn()}
      />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
