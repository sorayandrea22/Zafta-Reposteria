"use server";

import { FormLoginInputs } from "@/interfaces";
import { getErrorMessage } from "@/lib/error-message";
import { createSupabaseClient } from "@/utils/supabase/server";

export const LoginAction = async (values: FormLoginInputs) => {
  const { email, password } = values;
  try {
    const { auth } = await createSupabaseClient();
    const { error } = await auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    return {
      errorMessage: null,
    };
  } catch (error) {
    return { errorMessage: getErrorMessage(error) };
  }
};
