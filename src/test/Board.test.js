import React from "react";
import Enzyme, { shallow, mount } from "enzyme";

import Board from "../components/Board";
import { ScoreConsumer } from "../scoreContext";

import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

describe("Board", () => {
  it("", () => {
    // const wrapper = mount(<Board />);
    // console.warn(wrapper);
  });
});
