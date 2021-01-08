import React from "react";
import Enzyme, { mount } from "enzyme";
import { CARD_DATA } from "../card-constants.js";
import { Board } from "../components/Board";
import { Card } from "../components/Card";

import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

describe("Board", () => {
  it("renders a <Board /> component", () => {
    const wrapper = mount(<Board cards={CARD_DATA} />);
    expect(wrapper.find("#board")).toHaveLength(1);
  });

  it("renders a <Board /> component that has 12 Card components", () => {
    const wrapper = mount(<Board cards={CARD_DATA} />);
    expect(wrapper.find(Card)).toHaveLength(12);
  });
});
