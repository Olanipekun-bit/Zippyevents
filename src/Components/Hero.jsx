import { Link } from "react-router-dom";
import hero from "../assets/images/hero.jpg";

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${hero})` }}
      >
      </div>
      <div className="absolute inset-0 flex items-center justify-center mb-60">
        <h1 className="mt-20 text-black text-4xl font-bold flex text-center">
          Breaking Barriers in Cloud Automation: <br />
          Optimizing Your Margins with <br />
          Foreign Exchange (FX) Volatility
        </h1>
      </div>
      <div className="absolute inset-0 flex items-center justify-center mt-20">
        <p className="text-black-900 text-center">
          Join industry experts as we explore cutting-edge cloud automation
          strategies and learn <br />
          how to leverage FX volatility to optimize your business margins. This
          exclusive webinar <br />
          will provide actionable insights for modern businesses looking to stay
          ahead in the digital <br />
          transformation era.
        </p>
      </div>
      <div className="absolute inset-0 flex items-center justify-center mt-60">
        {/* <button className="text-blue-500 text-center border-2 px-4 py-2 rounded bg-white border-white">
          <Link to="signup">Register Now</Link>
        </button> */}
      </div>
    </div>
  );
}
