export const HeroSection = () => {
  return (
    <>
      <div className="flex ml-8 mr-8 p-20">
        <TextCard />
        <ImageCard />
      </div>
    </>
  );
};

const ImageCard = () => {
  return (
    <>
      <div className="inline-block">
        <img
          height={600}
          width={600}
          src="src\assets\pexels-nguyen-ngoc-tien-1321490019-29193075.jpg"
          alt="office lady"
          className="block rounded-lg border-2 border-gray-300"
        />
      </div>
    </>
  );
};

const TextCard = () => {
  return (
    <>
      <div className="flex flex-col items-start">
        <div className="pr-10 pt-10 pb-10">
          <h1 className="max-w-2xl text-8xl font-bold">
            Build & growth with scalable tools
          </h1>
        </div>
        <div className="max-w-2xl">
          <p>
            Easily adapt to changes and scale your operations with our flexible
            infrastructure, designed to support your business growth
          </p>
        </div>
        <div className="mt-8">
          <button className="p-2 text-white bg-[#5d59ff] rounded-md">
            Get Started
          </button>
        </div>
        <div className="pt-[68px]">
          <img
            className="h-10 w-xl"
            src="src\assets\Screenshot 2025-09-19 130901.png"
            alt=""
          />
          <p className="text-gray-500 ml-2 pt-1">
            10.000+ have already joined the advisory{" "}
          </p>
        </div>
      </div>
    </>
  );
};
