import React from "react";
import Enzyme, { mount } from "enzyme";
import NewGame from "../components/NewGame";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Button from "react-bootstrap/Button";

Enzyme.configure({ adapter: new Adapter() });

describe("<NewGame />", () => {
  it("renders <NewGame /> component", () => {
    const wrapper = mount(<NewGame />);
    expect(wrapper.find(NewGame)).toHaveLength(1);
  });

  it("renders <NewGame /> component that has a button", () => {
    const wrapper = mount(<NewGame />);
    expect(wrapper.find("Button")).toHaveLength(1);
  });

  it("has a button that take a click handler", () => {
    const onClick = jest.fn();
    const wrapper = mount(<Button onClick={onClick} />);
    wrapper.find(Button).simulate("click");
    expect(onClick).toHaveBeenCalled();
  });

  it("has a button that text is New Game", () => {
    const wrapper = mount(<NewGame />);
    expect(wrapper.text()).toMatch("New Game");
  });
});
