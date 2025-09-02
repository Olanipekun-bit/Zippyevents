import image83 from "../assets/images/image83.png";
import image85 from "../assets/images/image85.png";
import companypicnic from "../assets/images/companypicnic.png";
function OurServices() {
  return (
    <>
      <div>
        <h2 className="text-blue-500 italic mt-20 text-center">Our Services</h2>
        <p className="font-bold text-center font-black ">
          Corporate Event Management
        </p>
        <div className="mt-3.5 grid md:grid-cols-3 grid-cols-2 gap-3.5 px-3.5 justify-center items-center">
          <div>
            <img src={image83} alt="" className="w-full object-center object-cover"/>
            <h2 className="font-black ">Event Management</h2>
            <p>
              Tempor sit dictum volutpat tortor. Mauris eleifend commodo mi{" "}
              pharetra aliquam sed. Commodo odio quis neque.
            </p>
          </div>
          <div>
            <img src={image85} alt="" className="w-full object-center object-cover"/>
            <h2 className="font-black ">School Picnic</h2>
            <p>
              Donec lectus maecenas odio pretium erat. Sed netus sit amet,{" "}
              fames fermentum. Sed in nulla a nisl leo.
            </p>
          </div>
          <div>
            <img src={companypicnic} alt=""className="w-full object-center object-cover" />
            <h2 className="font-black ">Company Picnic</h2>
            <p>
              Habitant mauris, est massa dignissim nulla et porttitor erat
            
              sed platea morbi tortor dignissim cursus.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-blue-100 to-white text-center py-16 mt-10">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Let's Make Your Event Memorable!
          </h2>
          <p className="text-gray-700 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className="flex justify-center space-x-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md shadow hover:bg-blue-700 transition">
            Create an Event
          </button>
          <button className="text-blue-600 border border-blue-600 px-6 py-2 rounded-md">
            Register Now
          </button>
        </div>
      </div>
    </>
  );
}
export default OurServices;
