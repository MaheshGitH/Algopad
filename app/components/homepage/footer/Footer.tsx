import Image from "next/image";

const Footer = () => {
  return (
    <div className="lg:mx-auto">
      <div className="flex flex-col md:flex-row ~gap-10/36 px-6 py-8 border-b-2 bg-black max-w-5xl border-primaryLinted md:rounded-t-2xl ">
        <Image width={48} height={44} src="coloredlogo.svg" alt="app logo" />
        <div className="flex flex-col gap-6">
          <p className="font-laila font-medium text-2xl text-primary">
            Resources
          </p>
          <a
            href=""
            className="font-nunito text-base w-fit hover:text-white/65 duration-150"
          >
            Blog
          </a>
        </div>
        <div className="flex flex-col gap-6">
          <p className="font-laila font-medium text-2xl text-primary md:text-nowrap">
            Social links
          </p>
          <a
            href=""
            className="font-nunito text-base w-fit hover:text-white/65 duration-150"
          >
            Twitter
          </a>
          <a
            href=""
            className="font-nunito text-base w-fit hover:text-white/65 duration-150"
          >
            LinkedIn
          </a>
        </div>
        <div className="flex flex-col gap-6">
          <p className="font-laila font-medium text-2xl text-primary">
            Contact
          </p>
          <a
            href=""
            className="font-nunito text-base w-fit hover:text-white/65 duration-150"
          >
            Email:{" "}
            <span className="text-secondary underline">mahesh@deeev.com</span>
          </a>
        </div>
      </div>

      <div className="flex gap-2 ml-4 my-4 mb-10 font-nunito ~text-xs/base">
        <p>&copy;&nbsp;&nbsp;&nbsp;2024 Mahesh. All Rights Reserved</p>
        <span className="border border-primaryLinted rounded-full" />
        <a href="#TOS" className="underline">
          Terms of service
        </a>
      </div>
    </div>
  );
};

export default Footer;
