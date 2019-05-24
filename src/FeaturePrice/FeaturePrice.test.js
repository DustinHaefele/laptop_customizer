import React from "react";
import ReactDOM from "react-dom";
import Enzyme from "enzyme";
import toJson from "enzyme-to-json";
import FeaturePrice from "./FeaturePrice";

describe("Feature Price Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <FeaturePrice
        myKey={'my Key'}
        cost={700}
        name={'My Prop Name'}
      />, div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders UI as expected',()=>{
    const wrapper = Enzyme.shallow(<FeaturePrice
      myKey={'my Key'}
      cost={700}
      name={'My Prop Name'}
    />);
    expect(toJson(wrapper)).toMatchSnapshot();
  })
});
