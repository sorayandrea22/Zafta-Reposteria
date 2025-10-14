"use server";

import { FormInputs } from "@/interfaces";
import { getErrorMessage } from "@/lib/error-message";
import { createSupabaseClient } from "@/utils/supabase/server";

export const createAccountAction = async (values: FormInputs) => {
  const { email, password } = values;
  try {
    const { auth } = await createSupabaseClient();
    const { error } = await auth.signUp({
      email,
      password,
      options: {
        data: {
          displayRole: "user",
        },
      },
    });

    if (error) throw error;

    return {
      errorMessage: null,
    };
  } catch (error) {
    return { errorMessage: getErrorMessage(error) };
  }
};
