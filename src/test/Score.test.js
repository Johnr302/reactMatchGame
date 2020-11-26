import React from "react";
import Enzyme, { mount, shallow } from "enzyme";

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

    console.warn(wrapper.debug());
  });
});
