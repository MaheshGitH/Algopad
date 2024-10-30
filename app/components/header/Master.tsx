const Master = () => {
  return (
    <div className="w-full flex flex-col ~gap-8/14 items-center self-center text-center">
      <h1 className="font-laila ~text-2xl/5xl font-semibold sm:max-w-[22ch]">
        Master DSA with <span className="text-primary">AlgoPad</span>{" "}
        Efficiently
      </h1>
      <h2 className="font-nunito ~text-base/xl sm:max-w-[50ch] ">
        AlgoPad transforms your mobile and computer into a powerful DSA learning
        tool. Use your mobile as a trackpad and your computer as a canvas to
        sketch out solutions before diving into code.
      </h2>
      <a
        href="/canva"
        className="border-primary font-nunito border ~text-base/xl text-primary py-4 px-8 rounded-full hover:bg-primary duration-200 hover:text-white"
      >
        Try now
      </a>
    </div>
  );
};

export default Master;
