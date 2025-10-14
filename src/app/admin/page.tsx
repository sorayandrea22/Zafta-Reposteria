import { getUser } from "@/utils/supabase/server";
import { PanelAdministrator } from "./components/panel-administrator";

export default async function AdminPage() {
  const users = await getUser();
  console.log({ users });
  return (
    <div className="min-h-screen bg-ivory pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        <PanelAdministrator />
      </div>
    </div>
  );
}
