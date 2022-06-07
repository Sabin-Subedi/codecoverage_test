import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("Test theme button toggle", () => {
  render(<App />);
  const button = screen.getByText(/Current theme/i);

  userEvent.click(button);
  expect(button).toHaveTextContent(/dark/i);
  expect(screen).toMatchSnapshot();
});
