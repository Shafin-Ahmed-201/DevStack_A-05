import { use, useState } from "react";
import type { ITechnologyType } from "../type";
import TechCard from "./techCard";
import AddStackCard from "./addStackCard";
import { Bounce, toast } from "react-toastify";

export interface TechnologiesProps {
  techpromise: Promise<ITechnologyType[]>;
}

const Technologies = ({ techpromise }: TechnologiesProps) => {
  const technologies = use(techpromise);
  const [addToStack, setAddToStack] = useState<ITechnologyType[]>([]);
  const handelRemoveAll = () => {
    setAddToStack([]);
    toast.info("Stack Clear!", {
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
      <div className="text-center md:text-left container mx-auto mt-15 space-y-1">
        <h2 className="text-4xl font-semibold">
          Explore the{" "}
          <span className="bg-linear-to-r from-[#F97316] to-[#EC4899] bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>
        <p className="text-gray-400">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="grid gap-5 md:grid md:grid-cols-12 md:gap-5 container mx-auto mt-10">
        <div className="grid gap-5 md:col-span-9 md:grid md:grid-cols-3 md:gap-7">
          {technologies.map((tech) => (
            <TechCard
              key={tech.id}
              tech={tech}
              addToStack={addToStack}
              setAddToStack={setAddToStack}
            ></TechCard>
          ))}
        </div>

        <div className="md:col-span-3">
          <div className="w-full rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <h2 className="text-xl font">Your Stack</h2>
            <p className="text-gray-400">
              {addToStack.length > 0
                ? `${addToStack.length} Technology Selected`
                : "No technologies selected yet."}
            </p>
          </div>
          <div className="flex flex-col gap-3 justify-between rounded-lg border border-gray-200 px-3 py-2.5">
            {addToStack.length > 0 ? (
              addToStack.map((tech) => (
                <AddStackCard
                  key={tech.id}
                  tech={tech}
                  addToStack={addToStack}
                  setAddToStack={setAddToStack}
                ></AddStackCard>
              ))
            ) : (
              <p className="border-gray-200 py-2 px-5 text-gray-400 text-center">
                Your stack is empty.
              </p>
            )}
          </div>
          <div>
            {addToStack.length > 0 ? (
              <button
                onClick={handelRemoveAll}
                className="mt-12 w-full rounded-lg border border-red-300 py-1.5 text-sm font-semibold text-red-500 cursor-pointer hover:bg-red-50"
              >
                Remove All
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Technologies;
