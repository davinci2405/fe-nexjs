import { WithMainLayout } from "@Hocs";
import HomePageContainer from "@Containers/General/HomePage";

const Home = (props) => {
  return <HomePageContainer {...props} />;
};

Home.getLayout = WithMainLayout;

export default Home;
