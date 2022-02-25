import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBox = props => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = e => {
    let val = e.target.value;
    setSearchValue(val);
  };
  return (
    <div className="w-[720px] flex items-center border-b-2 border-mythical-wine">
      <input
        type="text"
        name="q"
        value={searchValue}
        placeholder="Giảm sập sàn top 100 sản phẩm bán chạy..."
        className="w-full rounded-sm py-2 text-[13px] outline-none"
        onChange={e => handleChange(e)}
      />
      <AiOutlineSearch className="text-2xl ml-2" />
    </div>
  );
};

export default SearchBox;
