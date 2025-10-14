import { ReactNode } from "react";
import { WelcomeModal } from "@/components/ui";

interface Props {
  children: ReactNode;
}

const LayoutHome = ({ children }: Props) => {
  return (
    <div>
      <WelcomeModal />
      {children}
    </div>
  );
};

export default LayoutHome;
