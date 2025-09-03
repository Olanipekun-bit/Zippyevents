import Rectangle28 from "../assets/images/Rectangle28.png";

const PortfolioItem = () => (
  <div className="shadow-lg rounded-lg p-6 ">
    <img
      src={Rectangle28}
      alt=""
      className="w-full object-cover object-center"
    />
    <h1 className="font-bold text-black mt-3">
      Breaking Barriers in Cloud Automation: Optimimizing Your Margins with
      Foreign Exchange (FX) Volatility
    </h1>
    <p className="ml-5 mt-3">
      Join industry experts as we explore cutting-edge cloud automation
      strategies and learn how to leverage FX volatility to optimize your
      business margins. This exclusive webinar will provide actionable insights
      for modern businesses looking to stay ahead in the digital transformation
      era.
    </p>
    <div className="border-l-4 border-blue-500 pl-4 ml-5 mt-5">
      <p className="italic text-gray-700">
        Ideal for co-parents, busy families, or caregivers who all want to stay
        involved.
      </p>
    </div>
  </div>
);

export default function PortfolioGrid() {
  return (
    <div className="mt-9 overflow-hidden">
      <h2 className="text-blue-500 italic text-center">PORTFOLIO</h2>
      <h1 className="text-3xl text-black text-center font-bold">Past Events</h1>

      <div className="grid lg:grid-cols-2 grid-cols-1 p-5 gap-4">
        <PortfolioItem />

        <PortfolioItem />

        <PortfolioItem />

        <PortfolioItem />
      </div>
    </div>
  );
}
