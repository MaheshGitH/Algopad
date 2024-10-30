interface Props {
  heading: string;
  description: string;
  direction: string;
}

const LayoutHIW = ({ heading, description, direction }: Props) => {
  return (
    <div className="font-laila text-xl flex flex-col gap-4 lg:flex-row justify-between ">
      <div className="lg:hidden ~text-xl/2xl">
        <p>{heading}</p>
        <p className="font-nunito ~text-base/xl mt-4">{description}</p>
      </div>

      <div className="h-32 mt-4 rounded-lg lg:hidden bg-white" />

      {direction === "left" ? (
        <>
          <div className="w-1/2 pt-4 space-y-2 max-lg:hidden ~text-lg/xl">
            <p>{heading}</p>
            <p className="font-nunito ~text-base/lg">{description}</p>
          </div>
          <span className="border border-primaryLinted max-lg:hidden" />
          <div className="h-32 w-1/2 mt-4 rounded-lg bg-white max-lg:hidden" />
        </>
      ) : (
        <>
          <div className="h-32 w-1/2 mt-4 rounded-lg bg-white max-lg:hidden" />
          <span className="border border-primaryLinted max-lg:hidden" />
          <div className="w-1/2 pt-4 space-y-2 max-lg:hidden ~text-lg/xl">
            <p>{heading}</p>
            <p className="font-nunito ~text-base/lg">{description}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default LayoutHIW;
