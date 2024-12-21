"use client";

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import {
  Container,
  StyledForm,
  InputGroup,
  Input,
  Label,
  ErrorText,
  Button,
  Title,
} from "./styles";

export default function SignUpPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    birthdate: "",
    id: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name || !/^[a-zA-Z가-힣]+$/.test(formData.name)) {
      newErrors.name = "영어와 한글만 입력 가능합니다.";
    }
    if (
      !formData.birthdate ||
      !/^\d{4}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/.test(formData.birthdate)
    ) {
      newErrors.birthdate = "올바른 형식(YYYYMMDD)으로 입력해주세요.";
    }
    if (!formData.id || !/^[a-zA-Z0-9]+$/.test(formData.id)) {
      newErrors.id = "영어와 숫자만 입력 가능합니다.";
    }
    if (
      !formData.password ||
      !/^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,12}$/.test(formData.password)
    ) {
      newErrors.password =
        "특수문자를 포함한 8자 이상 12자 이내로 입력해주세요.";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "비밀번호가 일치하지 않습니다.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    axios
      .post(`${url}/auth/signup`, {
        name: formData.name,
        birthdate: formData.birthdate,
        id: formData.id,
        password: formData.password,
      })
      .then(() => {
        router.push("/login");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Container>
      <Title>회원가입</Title>
      <StyledForm onSubmit={handleSubmit}>
        {/* 이름 */}
        <InputGroup>
          <Label htmlFor="name" error={!!errors.name}>
            이름
          </Label>
          <Input
            id="name"
            type="text"
            placeholder="이름을 입력해주세요"
            error={!!errors.name}
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <ErrorText>{errors.name}</ErrorText>}
        </InputGroup>

        {/* 생년월일 */}
        <InputGroup>
          <Label htmlFor="birthdate" error={!!errors.birthdate}>
            생년월일
          </Label>
          <Input
            id="birthdate"
            type="text"
            placeholder="ex) 19000101"
            error={!!errors.birthdate}
            value={formData.birthdate}
            onChange={handleChange}
          />
          {errors.birthdate && <ErrorText>{errors.birthdate}</ErrorText>}
        </InputGroup>

        {/* 아이디 */}
        <InputGroup>
          <Label htmlFor="id" error={!!errors.id}>
            아이디
          </Label>
          <Input
            id="id"
            type="text"
            placeholder="아이디를 입력해주세요"
            error={!!errors.id}
            value={formData.id}
            onChange={handleChange}
          />
          {errors.id && <ErrorText>{errors.id}</ErrorText>}
        </InputGroup>

        {/* 비밀번호 */}
        <InputGroup>
          <Label htmlFor="password" error={!!errors.password}>
            비밀번호
          </Label>
          <Input
            id="password"
            type="password"
            placeholder="특수문자를 포함한 8자 이상 12자 이내"
            error={!!errors.password}
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <ErrorText>{errors.password}</ErrorText>}
        </InputGroup>

        {/* 비밀번호 확인 */}
        <InputGroup>
          <Label htmlFor="confirmPassword" error={!!errors.confirmPassword}>
            비밀번호 재입력
          </Label>
          <Input
            id="confirmPassword"
            type="password"
            placeholder="비밀번호를 다시 입력해주세요"
            error={!!errors.confirmPassword}
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <ErrorText>{errors.confirmPassword}</ErrorText>
          )}
        </InputGroup>

        <Button type="submit">회원가입</Button>
      </StyledForm>
    </Container>
  );
}
