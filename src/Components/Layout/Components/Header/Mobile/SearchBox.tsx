import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import TopSlider from "../TopSlider";

const SearchBoxMobile = props => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = e => {
    let val = e.target.value;
    setSearchValue(val);
  };

  return (
    <div className="w-full bg-[#326e51] h-[125px] pb-2">
      <div className="w-full px-2 h-[35px] flex items-center">
        <AiOutlineSearch className="absolute left-4 text-xl" />
        <input
          type="text"
          name="q"
          value={searchValue}
          placeholder="Tìm sản phẩm thương hiệu bạn muốn..."
          className="w-full rounded-sm py-2 pl-9 text-[14px] outline-none"
          onChange={e => handleChange(e)}
        />
      </div>
      <TopSlider />
    </div>
  );
};

export default SearchBoxMobile;
