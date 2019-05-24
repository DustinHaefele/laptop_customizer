import React from "react";
import "./App.css";
import FeatureChoiceForm from "./FeatureChoiceForm/FeatureChoiceForm";
import FeaturePriceSummary from "./FeaturePriceSummary/FeaturePriceSummary";


class App extends React.Component {
  
  state = {
      selected: {
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
      }
    };
  

  updateFeature = (feature, newValue) =>  {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  }

  render() {

    return (
      <div className="App">
        <header>
          <h1>ELF Computing</h1>
          <h3>Laptops</h3>
          <h5>Customize your laptop</h5>
        </header>
        <main>
          <FeatureChoiceForm features={this.props.features}
          handleUpdate={this.updateFeature}
          selected={this.state.selected}/>
          <FeaturePriceSummary selected={this.state.selected}/>
        </main>
      </div>
    );
  }
}

export default App;
