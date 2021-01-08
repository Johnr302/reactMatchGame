import React from "react";
import Enzyme, { mount } from "enzyme";
import { Card } from "../components/Card";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });
const index = 1;
describe("<Card />", () => {
  it("renders <Card /> component", () => {
    const wrapper = mount(<Card />);
    expect(wrapper.find(Card)).toHaveLength(1);
  });

  it("renders a <Card /> with an img src", () => {
    const imgSrc = "testPath/img.png";
    const wrapper = mount(<Card src={imgSrc} />);
    const props = wrapper.props();
    expect(props.src).toBe("testPath/img.png");
  });
});
