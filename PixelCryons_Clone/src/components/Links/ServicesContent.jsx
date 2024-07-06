import { FaHome } from "react-icons/fa";

const ServicesContent = () => {
  return (
    <div className="w-[20vw] flex flex-col bg-white p-6 shadow-xl">
      <div className="w-[100%] flex justify-between items-center p-2">
        <div className="text-3xl">
          <FaHome />
        </div>
        <div className="flex flex-col hover:text-blue-600 hover:underline">
          <h3 className="text-lg ">Software Engineer</h3>
          <h6 className="text-sm">Code your business success</h6>
        </div>
      </div>

      <div className="w-[100%] flex justify-between items-center p-2">
        <div className="text-3xl">
          <FaHome />
        </div>
        <div className="flex flex-col hover:text-blue-600 hover:underline">
          <h3 className="text-lg ">eCommerce</h3>
          <h6 className="text-sm">Unlock online retail potential</h6>
        </div>
      </div>

      <div className="w-[100%] flex justify-between items-center p-2">
        <div className="text-3xl">
          <FaHome />
        </div>
        <div className="flex flex-col hover:text-blue-600 hover:underline">
          <h3 className="text-lg ">Software Engineer</h3>
          <h6 className="text-sm">Code your business success</h6>
        </div>
      </div>

      <div className="w-[100%] flex justify-between items-center p-2">
        <div className="text-3xl">
          <FaHome />
        </div>
        <div className="flex flex-col hover:text-blue-600 hover:underline">
          <h3 className="text-lg ">Software Engineer</h3>
          <h6 className="text-sm">Code your business success</h6>
        </div>
      </div>
    </div>
  );
};

export default ServicesContent;
