import { Link } from "@Router";
import Image from "next/image";
import { PageConst } from "server/pages";
import SearchBoxMobile from "./SearchBox";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

const HeaderMobile = props => {
  return (
    <div className="w-full flex items-center space-x-2 p-2">
      <div className="cursor-pointer w-[50px] h-[50px]">
        <Link route={PageConst.trang_chu.url}>
          <a>
            <Image layout="fixed" width={50} height={50} src="/img/logo.webp" alt="" />
          </a>
        </Link>
      </div>
      <SearchBoxMobile {...props} />
      <div className="flex items-center">
        <Link route={PageConst.wish_list.url}>
          <a>
            <AiOutlineHeart className="text-2xl text-black" />
          </a>
        </Link>
        <Link route={PageConst.cart.url}>
          <a>
            <AiOutlineShoppingCart className="text-2xl text-black ml-2" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default HeaderMobile;
