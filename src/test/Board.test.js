import React from "react";
import Enzyme, { mount } from "enzyme";

import { Board, makeCards } from "../components/Board";
import { Card } from "../components/Card";
import { ScoreProvider } from "../scoreContext";

import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

describe("Board", () => {
  it("renders a <Board /> component", () => {
    const wrapper = mount(
      <ScoreProvider value={{ win: false }}>
        <Board />
      </ScoreProvider>
    );
    expect(wrapper.find("#board")).toHaveLength(1);
  });

  it("has a makeCards method that returns an array of 12 <Card /> components", () => {
    let result = makeCards(12);
    const wrapper = mount(result[0]);
    expect(result).toHaveLength(12);
    expect(wrapper.find(Card)).toHaveLength(1);
  });
});
