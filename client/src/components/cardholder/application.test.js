import { render, screen, fireEvent, act } from "@testing-library/react";
import Application from "./application";

it("checkButtonRender ", () => {
  const { queryByTitle } = render(<Application />);
  const btn = queryByTitle("submit-btn");
  expect(btn).toBeTruthy();
});

describe("clickButton", () => {
  it("onClick", () => {
    act(() => {
      render(<Application />);
      const btn = screen.getByTitle("submit-btn");
      fireEvent.click(btn);
    });
  });
});

it("checkNameInputRender ", () => {
  const { queryByTitle } = render(<Application />);
  const input = queryByTitle("name");
  expect(input).toBeTruthy();
});

describe("changeNameInput", () => {
  it("onChange", () => {
    act(() => {
      render(<Application />);
      const input = screen.getByTitle("name");
      fireEvent.change(input, { target: { value: "testName" } });
      expect(input.value).toBe("testName");
    });
  });
});

it("checkAddressInputRender ", () => {
  const { queryByTitle } = render(<Application />);
  const input = queryByTitle("address");
  expect(input).toBeTruthy();
});

describe("changeAddressInput", () => {
  it("onChange", () => {
    act(() => {
      render(<Application />);
      const input = screen.getByTitle("address");
      fireEvent.change(input, { target: { value: "testName" } });
      expect(input.value).toBe("testName");
    });
  });
});

it("checkPanInputRender ", () => {
  const { queryByTitle } = render(<Application />);
  const input = queryByTitle("pan");
  expect(input).toBeTruthy();
});

describe("changePanInput", () => {
  it("onChange", () => {
    act(() => {
      render(<Application />);
      const input = screen.getByTitle("pan");
      fireEvent.change(input, { target: { value: "testName" } });
      expect(input.value).toBe("testName");
    });
  });
});

it("checkDobInputRender ", () => {
  const { queryByTitle } = render(<Application />);
  const input = queryByTitle("dob");
  expect(input).toBeTruthy();
});

describe("changeDobInput", () => {
  it("onChange", () => {
    act(() => {
      render(<Application />);
      const input = screen.getByTitle("dob");
      fireEvent.change(input, { target: { value: "testName" } });
      expect(input.value).toBe("testName");
    });
  });
});

it("checkIncomeInputRender ", () => {
  const { queryByTitle } = render(<Application />);
  const input = queryByTitle("income");
  expect(input).toBeTruthy();
});

describe("changeIncomeInput", () => {
  it("onChange", () => {
    act(() => {
      render(<Application />);
      const input = screen.getByTitle("income");
      fireEvent.change(input, { target: { value: "testName" } });
      expect(input.value).toBe("testName");
    });
  });
});

it("checkPhoneInputRender ", () => {
  const { queryByTitle } = render(<Application />);
  const input = queryByTitle("phone");
  expect(input).toBeTruthy();
});

describe("changePhoneInput", () => {
  it("onChange", () => {
    act(() => {
      render(<Application />);
      const input = screen.getByTitle("phone");
      fireEvent.change(input, { target: { value: "testName" } });
      expect(input.value).toBe("testName");
    });
  });
});
