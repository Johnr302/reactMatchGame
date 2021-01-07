import React from "react";
import Enzyme, { mount, render, fireEvent } from "enzyme";
import { Card, isMatchFound } from "../components/Card";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { CARD_STATE } from "../card-constants.js";

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

  it("can disable clicks when card is face up", () => {
    const onClick = jest.fn();
    const wrapper = mount(
      <Card
        status={CARD_STATE.FACEUP}
        disableFlip={false}
        flipCardClickHandler={onClick}
      />
    );
    wrapper.find(Card).simulate("click");
    expect(onClick).not.toHaveBeenCalled();
  });

  it("can click when card is faced down and disableFlip is false", () => {
    const onClick = jest.fn();
    const wrapper = mount(
      <Card
        status={CARD_STATE.FACEDOWN}
        disableFlip={false}
        flipCardClickHandler={onClick}
      />
    );
    wrapper.find(Card).simulate("click");
    expect(onClick).toHaveBeenCalled();
  });

  it("disables click when disableFlip is true", () => {
    const onClick = jest.fn();
    const wrapper = mount(
      <Card
        status={CARD_STATE.FACEDOWN}
        disableFlip={true}
        flipCardClickHandler={onClick}
      />
    );
    wrapper.find(Card).simulate("click");
    expect(onClick).not.toHaveBeenCalled();
  });
});
