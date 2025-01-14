

const Hovertext = ({ label, active = false}) => {
 
  const textColor = active ? "text-white" : "text-gray-500";

  return (
    <div className="flex items-center justify-start p-2  cursor-pointer ">
      <div className={`${textColor} hover:text-white font-semibold text-lg` }>{label}</div>
    </div>
  );
};

export default Hovertext;
