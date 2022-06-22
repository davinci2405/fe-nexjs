import { Link } from "@Router";
import Image from "next/image";
import { PageConst } from "server/pages";
import SearchBoxMobile from "./SearchBox";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";
import NavBar from "./Left";
import Category from "../Category";

const HeaderMobile = props => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleOpenNavbar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <NavBar showSidebar={showSidebar} onClose={handleOpenNavbar} />
      <div className="md:hidden w-full h-full bg-[#326e51]">
        <div className="flex justify-between items-center px-2 py-1">
          <a>
            <AiOutlineMenu className="text-xl text-white cursor-pointer" onClick={() => handleOpenNavbar()} />
          </a>
          <Link route={PageConst.trang_chu.url}>
            <a className="flex justify-center">
              <Image layout="fixed" width={145} height={45} src="/img/logo-2.svg" alt="" />
            </a>
          </Link>
          <Link route={PageConst.cart.url}>
            <a>
              <AiOutlineShoppingCart className="text-2xl text-white" />
            </a>
          </Link>
        </div>
      </div>
      <SearchBoxMobile {...props} />
      <Category {...props} />
    </>
  );
};

export default HeaderMobile;
