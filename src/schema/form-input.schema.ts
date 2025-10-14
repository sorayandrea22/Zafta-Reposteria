import z from "zod";

export const FormInputsSchema = z
  .object({
    name: z.string().min(1, "El nombre es obligatorio"),
    email: z.email("El correo no es valido"),
    password: z
      .string()
      .min(6, "La contraseña debe tener al menos 6 caracteres"),
    confirmPassword: z
      .string()
      .min(6, "La contraseña debe tener al menos 6 caracteres"),
  })
  .refine((input) => input.password === input.confirmPassword, {
    message: "Las contraseñas no coinciden",
  });

export const FormLoginInputsSchema = z.object({
  email: z.email("El email no es valido").min(1, "El email es obligatorio"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});
