import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import InputMask from "react-input-mask";
import { useFormik } from "formik";
import * as Yup from "yup";

function Formulario() {
  const formik = useFormik({
    initialValues: {
      livro: "",
      paginas: "",
      editora: "",
      isbn: "",
      estoque: "",
      valor: "",
    },
    validationSchema: Yup.object({
      livro: Yup.string().required("O campo é obrigatório."),
      paginas: Yup.number()
        .min(1, "Deve ter pelo menos 1 página")
        .required("O campo é obrigatório."),
      editora: Yup.string().required("O campo é obrigatório."),
      isbn: Yup.string()
        .max(17, "Limite de caracteres excedido")
        .required("O campo é obrigatório."),
      estoque: Yup.number()
        .min(1, "Deve ter pelo menos 1 páginas")
        .required("O campo é obrigatório."),
      valor: Yup.number()
        .min(1, "Deve custar pelo menos 1 real")
        .required("O campo é obrigatório."),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <Container>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            console.log(formik.values);
            formik.isValid
              ? console.log("Cadastro realizado")
              : console.error("Há dados inválidos");
          }}
        >
          <Text fontSize="2xl">Cadastro de Livros</Text>
          <Box marginTop="20px">
            <VStack spacing="24px">
              <FormControl>
                <FormLabel htmlFor="livro">Livro</FormLabel>
                <Input
                  id="livro"
                  type="text"
                  placeholder="Insira o nome do livro"
                  value={formik.values.livro}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.livro && formik.errors.livro ? (
                  <div>{formik.errors.livro}</div>
                ) : null}
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="paginas">Páginas</FormLabel>
                <Input
                  id="paginas"
                  type="number"
                  placeholder="Insira a quantidade de paginas"
                  value={formik.values.paginas}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.paginas && formik.errors.paginas ? (
                  <div>{formik.errors.paginas}</div>
                ) : null}
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="editora">Editora</FormLabel>
                <Input
                  id="editora"
                  type="text"
                  placeholder="Insira a editora"
                  value={formik.values.editora}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.editora && formik.errors.editora ? (
                  <div>{formik.errors.editora}</div>
                ) : null}
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="isbn">ISBN</FormLabel>
                <Input
                  as={InputMask}
                  mask="999-9-99-999999-9"
                  id="isbn"
                  type="text"
                  placeholder="Insira o ISBN"
                  value={formik.values.isbn}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.isbn && formik.errors.isbn ? (
                  <div>{formik.errors.isbn}</div>
                ) : null}
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="estoque">Estoque</FormLabel>
                <Input
                  id="estoque"
                  type="number"
                  placeholder="Insira a quantidade do produto"
                  value={formik.values.estoque}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.estoque && formik.errors.estoque ? (
                  <div>{formik.errors.estoque}</div>
                ) : null}
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="valor">Valor</FormLabel>
                <Input
                  id="valor"
                  type="number"
                  placeholder="Insira o valor do livro"
                  value={formik.values.valor}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.valor && formik.errors.valor ? (
                  <div>{formik.errors.valor}</div>
                ) : null}
              </FormControl>
            </VStack>
          </Box>
          <Flex flexDirection="row-reverse">
            <Button
              type="submit"
              backgroundColor="green.700"
              color="white"
              marginTop="20px"
            >
              Enviar
            </Button>
          </Flex>
        </form>
      </Container>
    </>
  );
}

export default Formulario;
