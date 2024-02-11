import { FormEvent } from "react";
import CreateTaskModal from "../CreateTaskModal";
import { render, screen } from "@testing-library/react";
import React from "react";

describe("Create Task Modal", () => {
  it("Should not render initially", () => {
    render(
      <CreateTaskModal
        setShowModal={() => {}}
        handleCreateTask={function (e: FormEvent<HTMLFormElement>): void {
          throw new Error("Function not implemented.");
        }}
      />
    );

    expect(screen.queryByText("Add Task")).toBeNull();
  });

  it("Should render when showModal is true", () => {
    render(
      <CreateTaskModal
        showModal
        setShowModal={() => {}}
        handleCreateTask={function (e: FormEvent<HTMLFormElement>): void {
          throw new Error("Function not implemented.");
        }}
      />
    );

    expect(screen.getByText("Add Task")).toBeInTheDocument();
  });

  it("Should call setShowModal when close button is clicked", () => {
    const setShowModal = jest.fn();

    render(
      <CreateTaskModal
        showModal
        setShowModal={setShowModal}
        handleCreateTask={function (e: FormEvent<HTMLFormElement>): void {
          throw new Error("Function not implemented.");
        }}
      />
    );

    const closeButton = screen.getByTitle("Close button");
    closeButton.click();
    expect(setShowModal).toHaveBeenCalled();
  });

  it("Should call setShowModal when close clicking outside", () => {
    const setShowModal = jest.fn();

    render(
      <CreateTaskModal
        showModal
        setShowModal={setShowModal}
        handleCreateTask={function (e: FormEvent<HTMLFormElement>): void {
          throw new Error("Function not implemented.");
        }}
      />
    );

    const modal = screen.getByRole("dialog");
    modal.click();
    expect(setShowModal).toHaveBeenCalled();
  });

  it("Should call handleCreateTask when form is submitted", () => {
    const onSubmit = jest.fn((e) => e.preventDefault());

    render(
      <CreateTaskModal
        showModal
        setShowModal={() => {}}
        handleCreateTask={onSubmit}
      />
    );

    const submitButton = screen.getByText("Create");
    submitButton.click();
    expect(onSubmit).toHaveBeenCalled();
  });
});
