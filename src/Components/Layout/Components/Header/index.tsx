import { Link } from "@Router";
import Image from "next/image";
import { PageConst } from "server/pages";
import HeaderMobile from "@Components/Layout/Components/Header/Mobile";
import MenuLayout from "@Components/Layout/Components/Menu";
import MenuLayoutMobile from "@Components/Layout/Components/Menu/Mobile";
import SearchBox from "@Components/Layout/Components/Header/SearchBox";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { BsBag } from "react-icons/bs";

const Header = props => {
  const { isMobile } = props;
  return (
    <header>
      {isMobile ? (
        <HeaderMobile {...props} />
      ) : (
        <div className="border-b">
          <div className="wp-container h-[105px] flex items-center gap-2">
            <div className="w-1/6">
              <Link route={PageConst.trang_chu.url}>
                <Image className="cursor-pointer" width="75px" height="75px" src="/img/logo.webp" alt="" />
              </Link>
            </div>
            <SearchBox {...props} />
            <div className="text-[14px] px-2">Hotline: 0337934747</div>
            <div className="flex items-center gap-3 pl-2 border-l">
              <div>
                <AiOutlineUser className="text-2xl" />
              </div>
              <div>
                <AiOutlineHeart className="text-2xl" />
              </div>
              <div>
                <BsBag className="text-2xl" />
              </div>
            </div>
          </div>
        </div>
      )}
      {isMobile ? <MenuLayoutMobile {...props} /> : <MenuLayout {...props} />}
    </header>
  );
};

export default Header;
