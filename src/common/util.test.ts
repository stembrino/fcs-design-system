import { classNames } from "./util";

describe("Util Tests", () => {
  it("should classNames function return classes separated by space", () => {
    const result = classNames("hello", "world");

    expect(result).toBe("hello world");
  });
});
