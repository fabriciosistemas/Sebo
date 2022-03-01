import { render, screen } from "@testing-library/react";
import App from "../App";

test("Verificar renderizaçao do campo livro", () => {
  render(<App />);
  expect(screen.getByText("Livro")).toBeInTheDocument();
});
