const NavBar = props => {
  const { showSidebar, onClose } = props;

  return (
    showSidebar && (
      <div className="flex w-full h-screen absolute top-0 left-0 z-50">
        <div className="w-2/3 h-screen bg-white transition delay-150 duration-300">
          <div>NavBar</div>
        </div>
        <div className="w-1/3 h-screen bg-nav-bar cursor-pointer" onClick={() => onClose()}></div>
      </div>
    )
  );
};

export default NavBar;
