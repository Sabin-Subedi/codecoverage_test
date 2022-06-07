import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

afterEach(cleanup);

test("Test theme button toggle", () => {
  const { container } = render(<App />);
  const button = screen.getByText(/Current theme/i);

  userEvent.click(button);
  expect(button).toHaveTextContent(/dark/i);

  expect(container).toMatchSnapshot();
});
