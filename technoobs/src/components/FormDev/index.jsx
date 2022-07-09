import { useForm } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";

export const FormDev = () => {
  return (
    <form>
      <Input
        name="name"
        register="register"
        icon="icone"
        label="Nome"
        placeholder="Digite aqui seu nome"
      />
      <Input
        register="register"
        name="email"
        icon="icone"
        label="Email"
        placeholder="Digite aqui seu email"
      />
      <Input
        register="register"
        name="password"
        label="Senha"
        placeholder="Digite aqui sua senha"
        type="password"
      />
      <Input
        register="register"
        name="confirmPassword"
        label="Confirmar Senha"
        placeholder="Digite novamente sua senha"
        type="password"
      ></Input>
      <Input
        register="register"
        name="bio"
        label="Bio"
        placeholder="Uma frase sobre voce"
      />
      <Input name="contact" label="Contato" placeholder="Opção de Contato" />
      <Input
        name="course_module"
        label="Selecionar módulo"
        placeholder="Primeiro Modulo"
      />

      <Button type="submit">enviar</Button>
    </form>
  );
};
