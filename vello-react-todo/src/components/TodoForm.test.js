import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoForm from "./TodoForm";

describe("<TodoForm />", () => {
  const setUp = (props = {}) => {
    const utils = render(<TodoForm {...props} />);
    const { getByText, getByPlaceholderText } = utils;
    const input = getByPlaceholderText("할 일을 입력하세요"); // input이 있는지 확인
    const button = getByText("등록");
    return {
      ...utils,
      input,
      button,
    };
  };

  it("has input and a button", () => {
    const { input, button } = setUp();
    expect(input).toBeTruthy();
    expect(button).toBeTruthy();
  });

  it("has input and a button", () => {
    const { getByText, getByPlaceholderText } = render(<TodoForm />);
    getByPlaceholderText("할 일을 입력하세요"); // input 이 있는지 확인
    getByText("등록"); // button이 있는지 확인
  });

  it("changes input", () => {
    const { input } = setUp();

    fireEvent.change(input, {
      target: {
        value: "TDD 배우기",
      },
    });

    expect(input).toHaveAttribute("value", "TDD 배우기");
  });

  it("calls onInsert and clears input", () => {
    const onInsert = jest.fn();

    const { input, button } = setUp({ onInsert });

    // 수정하고
    fireEvent.change(input, {
      target: {
        value: "TDD 배우기",
      },
    });

    // button click
    fireEvent.click(button);

    expect(onInsert).toBeCalledWith("TDD 배우기");
    expect(input).toHaveAttribute("value", "");
  });
});
