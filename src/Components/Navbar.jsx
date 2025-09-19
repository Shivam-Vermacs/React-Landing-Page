export const Navbar = () => {
  return (
    <>
      <div className="flex justify-between mx-8 ">
        <Logo />
        <NavElements navelements={["Home", "About", "Contact", "More Links"]} />
        <Button />
      </div>
    </>
  );
};

const Logo = () => {
  return (
    <>
      <div className="p-3 m-1">
        <div>
          <img
            height={"40px"}
            width={"40px"}
            src="src\assets\reshot-icon-money-BTKWYNM52F.svg"
            alt="logo svg"
          />
        </div>
      </div>
    </>
  );
};

const Button = () => {
  return (
    <>
      <div className="p-3 m-1">
        <button className="p-2 text-white bg-[#5d59ff] rounded-md">
          Get Started
        </button>
      </div>
    </>
  );
};

const NavElements = ({ navelements }) => (
  <div className="flex m-3 p-3 space-x-6">
    {navelements.map((elmnt, index) => (
      <div
        key={index}
        className="cursor-pointer transition-colors duration-300 hover:text-blue-600"
      >
        {elmnt}
      </div>
    ))}
  </div>
);
