const CTA = () => {
  return (
    <div className="border-2 border-primary font-nunito text-base flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 rounded-2xl px-8 py-9 mx-4 max-w-5xl lg:w-full lg:mx-auto">
      <div className="space-y-6 lg:max-w-lg">
        <p className="font-laila font-semibold ~text-xl/2xl">
          Try Algopad for Free
        </p>
        <p className="~text-base/lg">
          Experience the full power of AlgoPad without signing up. Start solving
          DSA problems instantly with our demo account!
        </p>
      </div>

      <button className="px-8 py-4 bg-gradient hover:bg-gradientFlip rounded-lg mt-3 h-fit w-fit ~text-base/lg lg:text-nowrap">
        Try It Now
      </button>
    </div>
  );
};

export default CTA;
