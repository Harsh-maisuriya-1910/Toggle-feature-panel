import { FaChevronDown } from "react-icons/fa";

export const AccordionItem = ({ item, onToggle }) => {
    if (!item) return null;
  return (
    <div className="mb-4 rounded-2xl overflow-hidden border border-gray-700 shadow-md bg-[#1E1B2E]">

      {/* Header */}
      <div
        onClick={() => onToggle(item.id)}
        className="flex justify-between items-center px-5 py-4 cursor-pointer transition-all duration-300 hover:bg-[#2A2540]"
      >
        <span className="text-white font-medium tracking-wide">
          {item.name}
        </span>

        <FaChevronDown
          className={`text-gray-300 transition-transform duration-300 ${
            item.isOpen ? "rotate-180 text-white" : ""
          }`}
        />
      </div>

      {/* Content */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          item.isOpen ? "max-h-40 px-5 pb-4 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="text-gray-300 text-sm leading-relaxed border-t border-gray-700 pt-3">
          This is content for {item.name}. You can add anything here like text,
          forms, or API data.
        </div>
      </div>
    </div>
  );
};

