import Image from "next/image";

const Features = () => {
  return (
    <div className="grid ~text-lg/2xl text-center gap-y-16 gap-x-32 xl:grid-cols-3">
      <div className="flex flex-col gap-4 items-center">
        <Image width={56} height={56} src="qr.svg" alt="scan the qr" />
        <p>Seamless Device Pairing</p>
        <p className="font-nunito ~text-base/xl max-w-[30ch]">
          Connect your mobile to your computer with ease—either by entering a
          unique code or scanning a QR code.
        </p>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <Image width={56} height={56} src="paint.svg" alt="scan the qr" />
        <p>Customizable Colors</p>
        <p className="font-nunito ~text-base/xl max-w-[30ch]">
          Choose your preferred colors to personalize your sketches and make
          your problem-solving process even more intuitive.
        </p>
      </div>
      <div className="flex flex-col gap-4 items-center col-span-1 md:col-span-2 xl:col-span-1 ">
        <Image width={59} height={56} src="cloud.svg" alt="scan the qr" />
        <p>Auto-Save & Resume</p>
        <p className="font-nunito ~text-base/xl max-w-[30ch]">
          Your sketches are automatically saved, allowing you to pick up right
          where you left off when you come back online.
        </p>
      </div>
    </div>
  );
};

export default Features;
