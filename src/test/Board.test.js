import React from "react";
import Enzyme, { mount } from "enzyme";

import { Board, makeCards } from "../components/Board";
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
    expect(makeCards(12)).toHaveLength(12);
  });
});
