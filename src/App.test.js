import { render, screen } from "@testing-library/react";
import App from "./App";

test("Checar se o título do formulário foi carregado", () => {
  render(<App />);
  expect(screen.getByText("Cadastro de Livros")).toBeInTheDocument();
});
