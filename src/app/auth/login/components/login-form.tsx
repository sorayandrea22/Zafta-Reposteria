"use client";

import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormLoginInputsSchema } from "@/schema";
import { useTransition } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { FormLoginInputs } from "@/interfaces";
import { motion } from "motion/react";
import { LoginAction } from "@/actions";

export const LoginForm = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const { register, handleSubmit } = useForm<FormLoginInputs>({
    resolver: zodResolver(FormLoginInputsSchema),
  });

  const onSubmit: SubmitHandler<FormLoginInputs> = async (data) => {
    startTransition(async () => {
      const { errorMessage } = await LoginAction(data);

      if (errorMessage) {
        toast.error(errorMessage);
      } else {
        router.push("/admin");
        toast.success("Inicio de sesión correcto.");
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
        <h1 className="font-lust text-3xl text-burgundy mb-2">
          Iniciar sesión
        </h1>
        <p className="text-navy/70 font-fredoka">Únete a la familia Zafta 🧁</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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

        <motion.button
          type="submit"
          disabled={isPending}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-burgundy text-ivory font-fredoka font-semibold py-3 rounded-lg hover:bg-burgundy/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex justify-center"
        >
          {isPending ? "Iniciando sesión..." : "Iniciar sesión"}
        </motion.button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-navy/70 font-fredoka">
          ¿Necesitar registrarte?{" "}
          <Link
            href="/auth/register"
            className="text-burgundy hover:underline font-semibold"
          >
            Crear cuenta
          </Link>
        </p>
      </div>
    </motion.div>
  );
};
