import Rectangle28 from "../assets/images/Rectangle28.png"

const PortfolioItem = () => (
  <div className="ml-7 mt-5">
    <img src={Rectangle28} alt="" />
    <h1 className="ml-5 font-bold text-black mt-3">
      Breaking Barriers in Cloud Automation: Optimimizing Your Margins with{" "}
      <br />
      Foreign Exchange (FX) Volatility
    </h1>
    <p className="ml-5 mt-3">
      Join industry experts as we explore cutting-edge cloud automation
      strategies and <br />
      learn how to leverage FX volatility to optimize your business margins.
      This exclusive <br />
      webinar will provide actionable insights for modern businesses looking
      to stay ahead <br />
      in the digital transformation era.
    </p>
    <div className="border-l-4 border-blue-500 pl-4 ml-5 mt-5">
      <p className="italic text-gray-700">
        Ideal for co-parents, busy families, or caregivers who all want to stay involved.
      </p>
    </div>
  </div>
);

export default function PortfolioGrid() {
  return (
    <div>
      <h2 className="text-blue-500 italic text-center">PORTFOLIO</h2>
      <h1 className="text-3xl text-black text-center font-bold">Past Events</h1>
      
      <div className="grid grid-cols-2">
        {/* Top left - Original */}
        <div className="w-3xl">
          <PortfolioItem />
        </div>
        
        {/* Top right - Beside the original */}
        <div className="w-3xl mr-40">
          <PortfolioItem />
        </div>
        
        {/* Bottom left - Under the original */}
        <div className="w-full">
          <PortfolioItem />
        </div>
        
        {/* Bottom right - Under the second one */}
        <div className="w-full">
          <PortfolioItem />
        </div>
      </div>
    </div>
  );
}