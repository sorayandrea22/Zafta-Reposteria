import { getUser } from "@/utils/supabase/server";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default async function AuthLayout({ children }: Props) {
  const user = await getUser();
  console.log({ user });
  return <>{children}</>;
}
