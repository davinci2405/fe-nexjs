import CartPageContainer from "@Containers/Cart";
import { WithMainLayout } from "@Hocs";

const Detail = props => {
  return <CartPageContainer {...props} />;
};

Detail.getLayout = WithMainLayout;

export default Detail;
