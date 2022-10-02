import { FC } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";

type BurgerType = {
  isOpen: boolean;
  toggleOpen: () => void;
};

export const Burger: FC<BurgerType> = ({ isOpen, toggleOpen }) => {
  return (
    <div
      onClick={toggleOpen}
      className={`flex items-center self-center justify-center p-2.5 md:hidden text-gray-50 ${
        isOpen ? "bg-slate-700" : ""
      } rounded-md transform active:scale-90 transition-all ease-in-out`}
    >
      {isOpen ? <CgClose /> : <GiHamburgerMenu />}
    </div>
  );
};
