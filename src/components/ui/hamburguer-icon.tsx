import { useUIStore } from "@/store/ui/ui.store";

export const HamburguerIcon = () => {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  return (
    <button
      className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
      onClick={() => isSideMenuOpen()}
    >
      Menu
    </button>
  );
};
