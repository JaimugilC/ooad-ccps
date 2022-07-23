import { render, screen, fireEvent, act } from "@testing-library/react";
import Login from "./login";

it("checkButtonRender ", () => {
  const { queryByTitle } = render(<Login />);
  const btn = queryByTitle("login-btn");
  expect(btn).toBeTruthy();
});

describe("clickButton", () => {
  it("onClick", () => {
    act(() => {
      render(<Login />);
      const btn = screen.getByTitle("login-btn");
      fireEvent.click(btn);
    });
  });
});

it("checkEmailInputRender ", () => {
  const { queryByTitle } = render(<Login />);
  const input = queryByTitle("email-input");
  expect(input).toBeTruthy();
});

describe("changeEmailInput", () => {
  it("onChange", () => {
    act(() => {
      render(<Login />);
      const input = screen.getByTitle("email-input");
      fireEvent.change(input, { target: { value: "test@gmail.com" } });
      expect(input.value).toBe("test@gmail.com");
    });
  });
});

it("checkPasswordInputRender ", () => {
  const { queryByTitle } = render(<Login />);
  const input = queryByTitle("password-input");
  expect(input).toBeTruthy();
});

describe("changePasswordInput", () => {
  it("onChange", () => {
    act(() => {
      render(<Login />);
      const input = screen.getByTitle("password-input");
      fireEvent.change(input, { target: { value: "test" } });
      expect(input.value).toBe("test");
    });
  });
});
