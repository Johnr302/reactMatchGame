import React from "react";
import Enzyme, { mount } from "enzyme";

import Score from "../components/Score";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

describe("<Score />", () => {
  it("renders <Score /> component", () => {
    const wrapper = mount(<Score score={1} />);
    expect(wrapper.text()).toEqual("Matches: 1");
    expect(wrapper.find("h2")).toHaveLength(1);
  });
});
