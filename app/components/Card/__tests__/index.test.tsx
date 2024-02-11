/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "..";

it("App Router: Works with dynamic route segments", () => {
  render(<Card title="hola" />);
  expect(screen.getByText("hola"));
});
