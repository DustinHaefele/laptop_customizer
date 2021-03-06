import React from "react";
import ReactDOM from "react-dom";
import Enzyme from "enzyme";
import toJson from "enzyme-to-json";
import FeatureChoiceForm from "./FeatureChoiceForm";

describe("FeatureChoiceForm component", () => {
  it("renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <FeatureChoiceForm
        features={{
          Processor: [
            {
              name: '17th Generation Intel Core HB (7 Core with donut spare)',
              cost: 700
            },
            {
              name: 'Professor X AMD Fire Breather with sidewinder technology',
              cost: 1200
            }
          ],
          "Operating System": [
            {
              name: 'Ubuntu Linux 16.04',
              cost: 200
            },
            {
              name: 'Bodhi Linux',
              cost: 300
            }
          ],
          "Video Card": [
            {
              name: 'Toyota Corolla 1.5v',
              cost: 1150.98
            },
            {
              name: 'Mind mild breeze 2000',
              cost: 1345
            }
          ],
          Display: [
            {
              name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
              cost: 1500
            },
            {
              name: '15.3" HGTV (3840 x 2160) Home makeover edition',
              cost: 1400
            },
          ]
        }}
        handleUpdate={jest.fn()}
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
      />, div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders UI as expected',() =>{
    const wrapper = Enzyme.shallow(<FeatureChoiceForm
      features={{
        Processor: [
          {
            name: '17th Generation Intel Core HB (7 Core with donut spare)',
            cost: 700
          },
          {
            name: 'Professor X AMD Fire Breather with sidewinder technology',
            cost: 1200
          }
        ],
        "Operating System": [
          {
            name: 'Ubuntu Linux 16.04',
            cost: 200
          },
          {
            name: 'Bodhi Linux',
            cost: 300
          }
        ],
        "Video Card": [
          {
            name: 'Toyota Corolla 1.5v',
            cost: 1150.98
          },
          {
            name: 'Mind mild breeze 2000',
            cost: 1345
          }
        ],
        Display: [
          {
            name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
            cost: 1500
          },
          {
            name: '15.3" HGTV (3840 x 2160) Home makeover edition',
            cost: 1400
          },
        ]
      }}
      handleUpdate={jest.fn()}
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
    />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
