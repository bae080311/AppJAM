"use client";

import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

const url = ""

interface SignUpFormInputs {
  email: string;
  password: string;
  confirmPassword: string;
}

export default function SignUpPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SignUpFormInputs>();

  const onSubmit: SubmitHandler<SignUpFormInputs> = (data) => {
    axios
      .post(`${url}/auth/signup`, {
        email: data.name,
        password: data.password,
      })
      .then(() => {
        router.push("/login");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const password = watch("password");

  return (
    <div className="flex justify-center items-center h-screen">
      <div
        style={{ border: "1px solid #A6A6A6" }}
        className=" flex flex-col items-center gap-20 rounded-lg py-12 px-10"
      >
        <Image width={180} height={50} src={Logo} alt="logo" />
        <h1 className="text-2x1 font-semibold">회원가입</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-8 items-center"
        >
          <div className="flex flex-col gap-2">
            <label
              className={errors.name?.message && "text-red-500"}
              htmlFor="name"
            >
              이름
            </label>
            <input
              placeholder="이름을 입력해주세요"
              style={{ border: errors.email ? "1px solid red" : "" }}
              id="name"
              type="text"
              className={`border rounded-md px-4 py-2 w-[400px] ${
                errors.email ? "text-red-500" : ""
              }`}
              {...register("name", {
                required: "이름을 입력해주세요.",
                pattern: {
                    value: /^[a-zA-Z가-힣]+$/,
                    message: "영어와 한글만 입력 가능합니다.",
                  }
              })}
            />
            {errors.name && (
              <span className="text-red-500 text-[12px]">
                {errors.name.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label
              className={errors.name?.message && "text-red-500"}
              htmlFor="birthdate"
            >
              생년월일
            </label>
            <input
              placeholder="ex) 19000101"
              style={{ border: errors.email ? "1px solid red" : "" }}
              id="birthdate"
              type="text"
              className={`border rounded-md px-4 py-2 w-[400px] ${
                errors.email ? "text-red-500" : ""
              }`}
              {...register("birthdate", {
                required: "생년월일을 입력해주세요.",
                pattern: {
                    value: /^\d{4}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/,
                    message: "올바른 형식(YYYYMMDD)으로 입력해주세요.",
                  }
              })}
            />
            {errors.birthdate && (
              <span className="text-red-500 text-[12px]">
                {errors.birthdate.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label
              className={errors.id?.message && "text-red-500"}
              htmlFor="id"
            >
              아이디
            </label>
            <input
              placeholder="아이디를 입력해주세요"
              style={{ border: errors.id ? "1px solid red" : "" }}
              id="id"
              type="text"
              className={`border rounded-md px-4 py-2 w-[400px] ${
                errors.id ? "text-red-500" : ""
              }`}
              {...register("id", {
                required: "아이디를 입력해주세요.",
                pattern: {
                    value: /^[a-zA-Z0-9]+$/,
                    message: "영어와 숫자만 입력 가능합니다.",
                  }
              })}
            />
            {errors.id && (
              <span className="text-red-500 text-[12px]">
                {errors.id.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label
              className={errors.password?.message && "text-red-500"}
              htmlFor="password"
            >
              비밀번호
            </label>
            <input
              placeholder="특수문자를 포함한 8자 이상 12자 이내"
              style={{ border: errors.password ? "1px solid red" : "" }}
              id="password"
              type="password"
              className={`border rounded-md px-4 py-2 w-[400px] ${
                errors.password ? "text-red-500" : ""
              }`}
              {...register("password", {
                required: "비밀번호를 입력해주세요.",
                pattern: {
                  value: /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,12}$/,
                  message: "1개 이상 특수문자를 포함 8자 이상 12자 이내",
                },
              })}
            />
            {errors.password && (
              <span className="text-red-500 text-[12px]">
                {errors.password.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label
              className={errors.confirmPassword?.message && "text-red-500"}
              htmlFor="confirmPassword"
            >
              비밀번호 재입력
            </label>
            <input
              placeholder="비밀번호를 다시 입력해주세요"
              style={{ border: errors.confirmPassword ? "1px solid red" : "" }}
              id="confirmPassword"
              type="password"
              className={`border rounded-md px-4 py-2 w-[400px] ${
                errors.confirmPassword ? "text-red-500" : ""
              }`}
              {...register("confirmPassword", {
                required: "비밀번호를 확인해주세요.",
                validate: (value) =>
                  value === password || "비밀번호가 일치하지 않습니다.",
              })}
            />
            {errors.confirmPassword && (
              <span className="text-red-500 text-[12px]">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>

          <Button label="회원가입" />
        </form>
      </div>
    </div>
  );
}