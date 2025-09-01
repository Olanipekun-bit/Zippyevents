import { useState } from "react";

const testimonials = [
  {
    text: `"Zippy Events completely transformed the way we handle company events. The app made it easy to manage all the day’s activities while also providing real-time updates on every registered participant."`,
    name: "Abdurahman Abolaji",
    role: "Cloud DevOps Engineer, CloudVantage",
  },
  {
    text: `"Zippy Events helped me organize my workflow seamlessly. It’s intuitive and makes collaboration much smoother."`,
    name: "Feyisayo",
    role: "Product Designer, EthicaMFB",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="bg-amber-50 rounded-xl shadow-md p-8 text-center w-350 ml-12 mt-10 overflow-hidden">
      <h3 className="text-blue-500 font-semibold mb-2">TESTIMONIALS</h3>
      <h2 className="text-2xl font-bold mb-6">
        Trusted by Early Adopters Worldwide
      </h2>

      <p className="text-lg italic text-gray-700 mb-6">
        {testimonials[current].text}
      </p>

      <h4 className="font-bold">{testimonials[current].name}</h4>
      <p className="text-gray-600 text-sm">{testimonials[current].role}</p>

      {/* Dots */}
      <div className="flex justify-center gap-3 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>

      {/* Prev & Next */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() =>
            setCurrent((prev) =>
              prev === 0 ? testimonials.length - 1 : prev - 1
            )
          }
          className="bg-black text-white px-4 py-2 rounded-md"
        >
          Prev
        </button>
        <button
          onClick={() =>
            setCurrent((prev) => (prev + 1) % testimonials.length)
          }
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
