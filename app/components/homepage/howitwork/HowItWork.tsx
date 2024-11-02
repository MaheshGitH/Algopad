import LayoutHIW from "./LayoutHIW";
import { steps } from "./content";

const HowItWork = () => {
  return (
    <div className="max-w-2xl lg:max-w-4xl w-full mx-auto ">
      <h3 className="font-laila font-semibold ~text-2xl/4xl text-center">
        How it works
      </h3>
      <div className="flex flex-col max-lg:gap-10 px-4 py-6 border-2 border-primaryLinted mx-3 shadow-howitwork rounded-2xl ~mt-6/12">
        {steps.map((step, index) => (
          <LayoutHIW
            key={index}
            heading={step.heading}
            description={step.description}
            direction={step.direction}
          />
        ))}
      </div>
    </div>
  );
};

export default HowItWork;
