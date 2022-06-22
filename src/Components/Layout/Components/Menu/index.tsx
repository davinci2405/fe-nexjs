import { MenuData } from "./data";

const Menu = props => {
  return (
    <div className="">
      <div className="menu-border scrollbar-hide h-12 flex items-center space-x-6 pl-4 overflow-y-auto whitespace-nowrap">
        {MenuData?.map((e, index) => (
          <div key={index} className="min-w-max text-center text-[13px] uppercase font-bold">
            {e?.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
