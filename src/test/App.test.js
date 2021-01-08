import React from "react";
import Enzyme, { mount } from "enzyme";
import App, { makeCards } from "../App";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { CARD_DATA } from "../card-constants";

Enzyme.configure({ adapter: new Adapter() });

describe("<App />", () => {
  it("renders <App /> component", () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(App)).toHaveLength(1);
  });

  it("generates a random array of cards", () => {
    let result = makeCards(CARD_DATA);
    expect(result.length).toBe(12);
  });
});
