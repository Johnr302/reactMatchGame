import React from "react";
import Enzyme, { mount, shallow } from "enzyme";

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
    let result = makeCards(12);
    const wrapper = mount(result[0]);
    expect(result).toHaveLength(12);
    console.warn(result[0]);
    // expect(result[0]).toEqual(
    //   expect.objectContaining({ type: "[(Function: Card)]" })
    // );
    // expect(result[0]).toEqual(expect.find(Card).toHaveLength(1));
    console.warn(wrapper);
    expect(wrapper.find("function")).toHaveLength(0);
    // const wrapper = mount(makeCards(1));
    // console.warn(wrapper);
  });
});
