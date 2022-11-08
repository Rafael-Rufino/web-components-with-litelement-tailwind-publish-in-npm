/* eslint-disable no-lone-blocks */
import { createComponent } from "@lit-labs/react";
import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import "./App.css";

import { Heading } from "./components/heading";
import { Input } from "./components/input";
import { Button } from "./components/button";
import { LinkIcon } from "./components/linkIcon";
import { CheckText } from "./components/checkText";

import LockImg from "./assets/lock.svg";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const HeadingApp = createComponent(React, "heading-app", Heading);
const InputApp = createComponent(React, "input-app", Input);
const ButtonApp = createComponent(React, "button-app", Button);
const LinkIconApp = createComponent(React, "linkicon-app", LinkIcon);
const CkeckTextApp = createComponent(React, "checktext-app", CheckText);
interface ILogin {
  name: string;
  password: string;
}

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Nome é obrigatorio")
    .min(3, "O nome de usuário deve ter pelo menos 3 caracteres ")
    .max(12, "Seu nome  deve ter no maximo 12 caracteres"),

  password: yup
    .string()
    .required("A senha é obrigatorio")
    .min(8, "A senha é muito curta - deve ter no mínimo 8 caracteres."),
});

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: any) => console.log(data);

  const handleInputPassword = () => {};

  return (
    <div className="App">
      <form className="Content" onSubmit={handleSubmit(onSubmit)}>
        <HeadingApp
          textAlign="text-left"
          fontSize="text-2xl"
          title="Acessando sua conta"
          description="Informe seu login e senha para continuar"
        />
        <div>
          <InputApp
            label="Seu login"
            placeholder="E-mail, CPF, Usuário ou Celular"
            type="text"
            onInput={handleInputPassword}
            {...register("name")}
          />
          <span style={{ color: "red" }}>
            {errors["name"] && errors["name"].message}
          </span>

          <InputApp
            id="password"
            label="Sua senha"
            placeholder="Digite a sua senha"
            type="password"
            role="password-input"
            onInput={handleInputPassword}
            {...register("password")}
          />
          <span style={{ color: "red" }}>
            {errors["password"] && errors["password"].message}
          </span>
        </div>

        <CkeckTextApp name="Manter conectado" />

        <ButtonApp
          name="Acessar sua conta"
          role="submit-button"
          type="submit"
          src={LockImg}
        />

        <LinkIconApp
          title="Você deseja redefinir a senha ?"
          name="Esqueceu sua senha?"
          src={LockImg}
          as={LinkRouter}
          to={{
            pathname: `recovery`,
            search: `?app_id&redirect_url=$`,
          }}
        />
      </form>
    </div>
  );
}

export default App;

{
  /* <PeopleAppA
  props={[
    {
      name: 'Person 1',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200',
      email: '1@test.com',
      title: 'Official title',
      color: '84b22f',
    },
  ]}
/> */
}
