import Title from "../../ui/Title";
import { FiSend } from "react-icons/fi";
import BarChart from "./BarChart";

const Balance = ({darkMode}) => {
  return (
    <div className="bg-white p-5 rounded-2xl dark:bg-gray-600 dark:text-gray-300 flex-1">
      <div className="flex justify-between items-center">
        <Title>Balance</Title>
        <FiSend className="bg-gray-500 px-2 rounded-full text-gray-100 w-8 h-8" />
      </div>
      <div>
        <h1 className="font-bold text-2xl">
          $600,000<span className="font-medium text-xl">(USD)</span>
        </h1>
        <span>On July 2023</span>
      </div>
      <BarChart darkMode={darkMode} />
    </div>
  );
};

export default Balance;
