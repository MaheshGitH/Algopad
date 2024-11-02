import Features from "./Features";

const Feature = () => {
  return (
    <div className="font-laila mt-32 flex flex-col items-center ~gap-12/20 px-1">
      <h3 className="font-semibold text-center ~text-xl/4xl max-w-[30ch]">
        Transform Your Learning Experience with Algopad:{" "}
        <span className="text-secondary">DSA Made Easy!</span>
      </h3>
      <Features />
    </div>
  );
};

export default Feature;
