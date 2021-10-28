import React from "react";
import WitchersInput from "../../components/WitchersInput";
import { render } from "@testing-library/react";

const testsSetup = () => {
  const inputThings = render(
    <WitchersInput value={""} setValue={() => {}} label="Hallo Frau" />
  );
  return inputThings;
};

test("label renders with correct value", () => {
  const { getByText } = testsSetup();
  const labelEl = getByText("Hallo Frau");

  expect(labelEl).toHaveClass("witchers-label");
});

test("it should contain correct value", () => {
  const { getByLabelText } = render(
    <WitchersInput
      value={"Interesting"}
      setValue={() => {}}
      label="Nice Test"
    />
  );
  const inputEl = getByLabelText("witcher-input");

  expect(inputEl.value).toBe("Interesting");
});
