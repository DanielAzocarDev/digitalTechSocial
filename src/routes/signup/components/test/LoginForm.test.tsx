import { expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import LoginForm from "../LoginForm";

describe("LoginForm Component", () => {
  test("login-button should be rendered with the correct text and class names", () => {
    render(<LoginForm handleShowLogin={() => {}} />);
    const loginButton = screen.getByTestId("login-button");
    expect(loginButton).toBeInTheDocument();
    expect(loginButton).toHaveTextContent("ENTRAR");
    expect(loginButton).toHaveClass(
      "bg-purple-600 text-white font-bold px-5 py-2 rounded-sm"
    );
  });

  test("signup-button should trigger the handleShowLogin function when clicked", async () => {
    const handleShowLogin = vi.fn();
    render(<LoginForm handleShowLogin={handleShowLogin} />);
    const signupButton = screen.getByTestId("signup-button");
    await userEvent.click(signupButton); // Use userEvent.click instead of fireEvent.click
    expect(handleShowLogin).toHaveBeenCalledTimes(1);
  });

  test("username input field should be rendered with the correct placeholder and class names", () => {
    render(<LoginForm handleShowLogin={() => {}} />);
    const usernameInput = screen.getByPlaceholderText("@username");
    expect(usernameInput).toBeInTheDocument();
    expect(usernameInput).toHaveClass(
      "bg-gray-100 border border-purple-400 py-2 px-5 rounded-sm"
    );
  });
});
