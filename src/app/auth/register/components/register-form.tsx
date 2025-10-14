"use client";

import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormInputsSchema } from "@/schema";
import { useTransition } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { FormInputs } from "@/interfaces";
import { createAccountAction } from "@/actions/auth";
import { motion } from "motion/react";
import { LucideLoader2 } from "lucide-react";

export const RegisterForm = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const { register, handleSubmit } = useForm<FormInputs>({
    resolver: zodResolver(FormInputsSchema),
  });

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    startTransition(async () => {
      const { errorMessage } = await createAccountAction(data);

      if (errorMessage) {
        toast.error(errorMessage);
      } else {
        router.push("/auth/login");
        toast.success(
          "Verifica el link que se le estara enviado por el correo",
        );
      }
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8"
    >
      <div className="text-center mb-8">
        <h1 className="font-lust text-3xl text-burgundy mb-2">Crear Cuenta</h1>
        <p className="text-navy/70 font-fredoka">Únete a la familia Zafta 🧁</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block font-fredoka font-semibold text-navy mb-2"
          >
            Nombre completo
          </label>
          <input
            disabled={isPending}
            {...register("name")}
            type="text"
            required
            className="w-full px-4 py-3 border border-rosegold/30 rounded-lg focus:border-burgundy focus:outline-none focus:ring-2 focus:ring-burgundy/20 transition-colors"
            placeholder="Tu nombre completo"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block font-fredoka font-semibold text-navy mb-2"
          >
            Email
          </label>
          <input
            {...register("email")}
            disabled={isPending}
            type="email"
            className="w-full px-4 py-3 border border-rosegold/30 rounded-lg focus:border-burgundy focus:outline-none focus:ring-2 focus:ring-burgundy/20 transition-colors"
            placeholder="tu@email.com"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block font-fredoka font-semibold text-navy mb-2"
          >
            Contraseña
          </label>
          <input
            {...register("password")}
            disabled={isPending}
            type="password"
            minLength={8}
            className="w-full px-4 py-3 border border-rosegold/30 rounded-lg focus:border-burgundy focus:outline-none focus:ring-2 focus:ring-burgundy/20 transition-colors"
            placeholder="Mínimo 8 caracteres, 1 mayúscula, 1 número, 1 símbolo"
          />
        </div>

        <div>
          <label
            htmlFor="confirmPassword"
            className="block font-fredoka font-semibold text-navy mb-2"
          >
            Confirmar contraseña
          </label>
          <input
            {...register("confirmPassword")}
            disabled={isPending}
            type="password"
            required
            minLength={8}
            className="w-full px-4 py-3 border border-rosegold/30 rounded-lg focus:border-burgundy focus:outline-none focus:ring-2 focus:ring-burgundy/20 transition-colors"
            placeholder="Repetir contraseña"
          />
        </div>

        <motion.button
          type="submit"
          disabled={isPending}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-burgundy text-ivory font-fredoka font-semibold py-3 rounded-lg hover:bg-burgundy/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex justify-center"
        >
          {isPending ? "Creando cuenta..." : "Crear cuenta"}
        </motion.button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-navy/70 font-fredoka">
          ¿Ya tienes cuenta?{" "}
          <Link
            href="/auth/login"
            className="text-burgundy hover:underline font-semibold"
          >
            Inicia sesión
          </Link>
        </p>
      </div>
    </motion.div>
  );
};
