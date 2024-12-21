"use client";

import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import {
  Container,
  StyledForm,
  InputGroup,
  Input,
  Label,
  ErrorText,
  Button,
  Title,
} from "./LoginPageStyles";
import Logo from "../path/to/logo.png"; // 로고 이미지 경로 설정

export default function LoginPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post(`${url}/auth/login`, {
        email: data.email,
        password: data.password,
      })
      .then(() => {
        router.push("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Container>
      <Title>로그인</Title>
      <Image width={180} height={50} src={Logo} alt="logo" />
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <Label htmlFor="id" error={!!errors.email}>
            아이디
          </Label>
          <Input
            placeholder="아이디를 입력해주세요"
            error={!!errors.email}
            id="id"
            type="text"
            {...register("id", {
              required: "아이디를 입력해주세요.",
              pattern: {
                value: /^[a-zA-Z0-9]+$/,
                message: "영어와 숫자만 입력 가능합니다.",
              },
            })}
          />
          {errors.id && <ErrorText>{errors.id.message}</ErrorText>}
        </InputGroup>

        <InputGroup>
          <Label htmlFor="password" error={!!errors.password}>
            비밀번호
          </Label>
          <Input
            placeholder="특수문자를 포함한 8자 이상 12자 이내"
            error={!!errors.password}
            id="password"
            type="password"
            {...register("password", {
              required: "비밀번호를 입력해주세요.",
              pattern: {
                value: /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,12}$/,
                message: "1개 이상 특수문자를 포함 8자 이상 12자 이내",
              },
            })}
          />
          {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
        </InputGroup>

        <Button type="submit">로그인</Button>
      </StyledForm>
    </Container>
  );
}
