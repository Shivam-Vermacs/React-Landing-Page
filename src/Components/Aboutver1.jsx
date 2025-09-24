export const About = () => {
  return (
    <>
      <div className="flex bg-[#f3f3f3] px-[250px] pt-[80px] pb-[50px]">
        <div className="pr-[100px]">
          <li className="whitespace-nowrap">About Money</li>
        </div>
        <div>
          <h2 className="pb-7 pt-2 text-4xl font-extralight">
            We are passionate about empowering individuals and businesses to
            take control of their finances and achieve their goals.
          </h2>
          <AboutStats
            numberstat={["95%", "10+", "$10m", "50m"]}
            textinfo={[
              "Complete customer satisfaction",
              "Innovation and valuable insight",
              "Highly efficient financial strategies",
              "User worldwide",
            ]}
          />
        </div>
      </div>
    </>
  );
};

const AboutStats = ({ numberstat, textinfo }) => {
  return (
    <>
      <div className="flex pt-5">
        {numberstat.map((number, index) => (
          <div className="pl-4 pr-8 border-l-2 border-gray-200" key={index}>
            <h3 className="font-semibold text-3xl">{number}</h3>
            <p className="pt-3 text-gray-500 ">{textinfo[index]}</p>
          </div>
        ))}
      </div>
    </>
  );
};
