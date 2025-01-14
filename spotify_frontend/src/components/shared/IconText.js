import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const IconText = ({ iconName, label, active, width = 24, height = 24 ,targetLink}) => {
  const iconColor = active ? "white" : "gray";
  const textColor = active ? "text-white" : "text-gray-500";

  return (
  <Link to={targetLink} className="block">
    <div className="flex items-center justify-start p-3 font-semibold cursor-pointer ">
      <div className="mr-3">
        <Icon icon={iconName} width={width} height={height} color={iconColor} />
      </div>
      <div className={`${textColor} hover:text-white` }>{label}</div>
    </div>
  </Link>
  );
};

export default IconText;
