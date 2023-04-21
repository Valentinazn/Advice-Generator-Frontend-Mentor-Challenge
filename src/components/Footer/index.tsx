const Footer = () => {
  return (
    <div className="bg-GrayishBlue text-LightCyan w-[100%] mt-auto flex justify-center h-12 items-center p-2">
      <p className="font-normal text-xs tracking-wide">
        Challenge by
        <a
          className="hover:underline text-[#7b7bf7]"
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by
        <a
          className="hover:underline text-[#7b7bf7]"
          href="https://github.com/Valentinazn"
        >
          Valentina Zanisi
        </a>
        .
      </p>
    </div>
  );
};

export default Footer;
