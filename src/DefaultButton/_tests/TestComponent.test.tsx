import React from "react";
import { render, screen } from "@testing-library/react";

import DefaultButton from "../.";
import { DefaultButtonProps } from "../DefaultButton.types";

describe("TestComponent", () => {
  const renderComponent = ({ label = "test" }: Partial<DefaultButtonProps>) => {
    render(<DefaultButton label={label} />);
  };

  it("should render heading text correctly", () => {
    renderComponent({});

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
