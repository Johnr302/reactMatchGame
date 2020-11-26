import React from "react";
import Enzyme, { mount } from "enzyme";

import Score from "../components/Score";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { ScoreProvider } from "../scoreContext";

Enzyme.configure({ adapter: new Adapter() });

describe("<Score />", () => {
  it("renders <Score /> component", () => {
    const wrapper = mount(
      <ScoreProvider value={{ win: false, score: 1, resetGame: () => {} }}>
        <Score />
      </ScoreProvider>
    );
    expect(wrapper.text()).toEqual("Matches: 1");
    expect(wrapper.find("h2")).toHaveLength(1);

    // console.warn(wrapper.debug());
  });

  it("", () => {
    const wrapper = mount(
      <ScoreProvider value={{ win: true, score: 1, resetGame: () => {} }}>
        <Score />
      </ScoreProvider>
    );
    expect(wrapper.text()).toEqual("Congratulations you win!Reset");
    expect(wrapper.find("h2")).toHaveLength(1);
  });
});