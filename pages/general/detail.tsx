import DetailPageContainer from "@Containers/General/Detail";
import { WithMainLayout } from "@Hocs";

const Detail = (props) => {
  return <DetailPageContainer {...props} />;
};

Detail.getLayout = WithMainLayout;

export default Detail;
