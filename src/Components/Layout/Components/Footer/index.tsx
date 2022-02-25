import { Link } from "@Router";
import { PageConst } from "server/pages";
import FooterMobile from "./Mobile";

const Footer = props => {
  const { isMobile } = props;
  return (
    <footer>
      <div className="w-full bg-black-lead">
        {isMobile ? <FooterMobile {...props} /> : <div className="container">PC</div>}
        <div className="text-white text-center py-4 border-t text-[13px]">
          © 2022 Copyright&nbsp;
          <Link route={PageConst.trang_chu.url}>
            <a className="text-white">Lotus Cosmetics</a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
