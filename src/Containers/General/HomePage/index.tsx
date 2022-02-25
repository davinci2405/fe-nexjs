import TopSlider from "./TopSlider";

const HomePageContainer = props => {
  const { isMobile } = props;
  return (
    <div className="lg:w-[1230px] lg:mx-auto h-screen">
      <TopSlider />
    </div>
  );
};

export default HomePageContainer;
