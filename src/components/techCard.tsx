import { type Dispatch, type SetStateAction } from "react";
import type { ITechnologyType } from "../type";
import { Bounce, toast } from "react-toastify";

export interface TechCardProps {
  tech: ITechnologyType;
  addToStack: ITechnologyType[];
  setAddToStack: Dispatch<SetStateAction<ITechnologyType[]>>;
}

const TechCard = ({ tech, addToStack, setAddToStack }: TechCardProps) => {
  const added = addToStack.some((teche) => teche.id === tech.id);
  const handelAddToStack = (tech: ITechnologyType) => {
    const newStack = [...addToStack, tech];
    setAddToStack(newStack);

    toast.success(`${tech.name} Successfully Added`, {
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
      <div
        className={
          added
            ? "bg-[#F1F5F9] p-5 rounded-xl h-69.25 border border-red-300"
            : "bg-[#F1F5F9] p-5 rounded-xl h-69.25"
        }
      >
        <div className="flex items-start justify-between space-y-5">
          <div className="flex h-10 w-8 items-center justify-center rounded-lg bg-blue-50 text text-sm">
            <img src={tech.image} alt="tech-img" />
          </div>
          <p className="rounded-full bg-blue-100 px-2 py-1 text-[8px] font-medium text-blue-500">
            {tech.badge}
          </p>
        </div>
        <h2 className="mt-2 text-sm font-bold text-gray-900">{tech.name}</h2>
        <p className="mt-1 text-[9px] leading-4 text-gray-500">
          {tech.description}
        </p>
        <div className="mt-12 flex item-center justify-between">
          <div className="flex gap-1">
            <p className="rounded bg-gray-100 px-2 py-1 text-[10px] text-gray-600">
              {tech.category}
            </p>
            <p className="rounded bg-gray-100 px-2 py-1 text-[10px] text-gray-600">
              {tech.level}
            </p>
          </div>
          <p className="text-[10px] text-gray-600">⭐{tech.rating}</p>
        </div>
        <button
          onClick={() => handelAddToStack(tech)}
          disabled={added}
          className={
            added
              ? "mt-3 w-full rounded-md bg-red-100 py-2 text-[9px] font-medium text-red-500 disabled:cursor-not-allowed"
              : "mt-3 w-full rounded-md bg-gray-950 py-2 text-[9px] font-medium text-white hover:bg-gray-800 cursor-pointer"
          }
        >
          {added ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </>
  );
};

export default TechCard;
