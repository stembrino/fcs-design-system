import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import SlotButton from "..";
import { SlotButtonProps } from "../SlotButton.types";

describe("TestComponent", () => {
  const renderComponent = ({ label = "test" }: Partial<SlotButtonProps>) => {
    const onClickMock = jest.fn();
    render(<SlotButton label={label} onClick={onClickMock} />);

    return {
      onClickMock,
    };
  };

  it("should render heading text correctly", () => {
    renderComponent({});

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should onClick be called when click", () => {
    const { onClickMock } = renderComponent({});
    const button = screen.getByLabelText("Button");
    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});