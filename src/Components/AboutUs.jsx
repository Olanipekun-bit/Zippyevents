import image2 from "../assets/images/image2.png"
export default function AboutUs() {
  return (
    <div className="flex ml-18.5 mt-10.5">
         <div>
                <h2 className="text-blue-500 italic ml-29">ABOUT US</h2>
      <p className="text-black font-bold text-2xl">
        We help businesses organize and <br />
        <span className="text-center">manage events.</span>
      </p>
      <p>
        From corporate conferences to team-building retreats, we <br />
        take care of the details so you can focus on your goals. Our <br />
        tailored event management services ensure smooth planning, <br />
        flawless execution, and memorable experiences that reflect <br />
        your brand’s identity.
      </p>
      <div className="flex space-x-25 mt-10 mb-10 bg-yellow-50 w-108 pt-2.5 pb-2.5">
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
         <div className="absolute right-0">
            <img src={image2}
         alt="" className="w-2xl h-81 object-cover rounded-lg mr-5.5 mt-4.5"/>
         </div>
    </div>
  );
}
