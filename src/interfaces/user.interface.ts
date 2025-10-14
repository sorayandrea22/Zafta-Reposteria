export interface FormInputs {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export type FormLoginInputs = Pick<FormInputs, "email" | "password">;
