import type { Dispatch, SetStateAction } from "react";
import type { ITechnologyType } from "../type";
import { Bounce, toast } from "react-toastify";

export interface AddStackCardProps {
  tech: ITechnologyType;
  addToStack: ITechnologyType[];
  setAddToStack: Dispatch<SetStateAction<ITechnologyType[]>>;
}

const AddStackCard = ({
  tech,
  addToStack,
  setAddToStack,
}: AddStackCardProps) => {
  const handelSingleRemove = (tech: ITechnologyType) => {
    const afterRemove = addToStack.filter((teche) => teche.id !== tech.id);
    setAddToStack(afterRemove);

    toast.info(`${tech.name} remove from Stack.`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <>
      <div className="flex justify-between border border-gray-200 py-2 px-5 rounded-lg">
        <div className="flex items-center gap-3">
          <img
            className="h-7 w-7 object-contain"
            src={tech.image}
            alt="tech-img"
          />
          <div>
            <h3 className="text-xs font-semibold text-gray-900">{tech.name}</h3>
            <p className="text-[8px] text-gray-400">{tech.category}</p>
          </div>
        </div>
        <button
          className="text-red-600 cursor-pointer"
          onClick={() => handelSingleRemove(tech)}
        >
          X
        </button>
      </div>
    </>
  );
};

export default AddStackCard;
