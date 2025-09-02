import image2 from "../assets/images/image2.png";
import { Link } from "react-router-dom";
export default function About() {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 justify-center gap-8 mt-10.5 p-5 place-content-center items-center">
      <div>
        <h2 className="text-blue-500 italic">ABOUT US</h2>
        <p className="text-black font-bold text-2xl">
          We help businesses organize and
          <span className="text-center">manage events.</span>
        </p>
        <p>
          From corporate conferences to team-building retreats, we 
          take care of the details so you can focus on your goals. Our 
          tailored event management services ensure smooth planning, 
          flawless execution, and memorable experiences that reflect 
          your brand’s identity.
        </p>
        <div className=" mt-10 mb-10 bg-yellow-50  pt-2.5 pb-2.5">
          <div className=" flex justify-between px-5">
            <p className="text-center">
              <span className="text-2xl font-semibold ">2025</span> <br />
              ESTABLISHED
            </p>
            <p className="text-center">
              <span className="text-2xl font-semibold ">50</span> <br />
              EMPLOYEES
            </p>
          </div>
        </div>
      </div>
        <img
          src={image2}
          alt=""
          className="w-2xl h-81 object-cover rounded-lg mt-4.5 mx-auto"
        />
      </div>
  );
}
