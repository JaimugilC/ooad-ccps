import { render, screen, fireEvent, act } from "@testing-library/react";
import IssueCreditCard from "./issuecreditcard";

it("checkImageRender ", () => {
  const { queryByTitle } = render(<IssueCreditCard />);
  const img = queryByTitle("ccimage");
  expect(img).toBeTruthy();
});

it("checkButtonRender ", () => {
  const { queryByTitle } = render(<IssueCreditCard />);
  const btn = queryByTitle("submit-btn");
  expect(btn).toBeTruthy();
});

describe("clickButton", () => {
  it("onClick", () => {
    act(() => {
      render(<IssueCreditCard />);
      const btn = screen.getByTitle("submit-btn");
      fireEvent.click(btn);
    });
  });
});

it("checkNameInputRender ", () => {
  const { queryByTitle } = render(<IssueCreditCard />);
  const input = queryByTitle("name");
  expect(input).toBeTruthy();
});

describe("changeNameInput", () => {
  it("onChange", () => {
    act(() => {
      render(<IssueCreditCard />);
      const input = screen.getByTitle("name");
      fireEvent.change(input, { target: { value: "testName" } });
      expect(input.value).toBe("testName");
    });
  });
});

it("checkNumberInputRender ", () => {
  const { queryByTitle } = render(<IssueCreditCard />);
  const input = queryByTitle("cardnumber");
  expect(input).toBeTruthy();
});

describe("changeNumberInput", () => {
  it("onChange", () => {
    act(() => {
      render(<IssueCreditCard />);
      const input = screen.getByTitle("cardnumber");
      fireEvent.change(input, { target: { value: "testName" } });
      expect(input.value).toBe("testName");
    });
  });
});

it("checkExpdateInputRender ", () => {
  const { queryByTitle } = render(<IssueCreditCard />);
  const input = queryByTitle("expdate");
  expect(input).toBeTruthy();
});

describe("changeExpdateInput", () => {
  it("onChange", () => {
    act(() => {
      render(<IssueCreditCard />);
      const input = screen.getByTitle("expdate");
      fireEvent.change(input, { target: { value: "testName" } });
      expect(input.value).toBe("testName");
    });
  });
});

it("checkCVVInputRender ", () => {
  const { queryByTitle } = render(<IssueCreditCard />);
  const input = queryByTitle("cvv");
  expect(input).toBeTruthy();
});

describe("changeCVVInput", () => {
  it("onChange", () => {
    act(() => {
      render(<IssueCreditCard />);
      const input = screen.getByTitle("cvv");
      fireEvent.change(input, { target: { value: "testName" } });
      expect(input.value).toBe("testName");
    });
  });
});

it("checkLimitInputRender ", () => {
  const { queryByTitle } = render(<IssueCreditCard />);
  const input = queryByTitle("limit");
  expect(input).toBeTruthy();
});

describe("changeLimitInput", () => {
  it("onChange", () => {
    act(() => {
      render(<IssueCreditCard />);
      const input = screen.getByTitle("limit");
      fireEvent.change(input, { target: { value: "testName" } });
      expect(input.value).toBe("testName");
    });
  });
});
