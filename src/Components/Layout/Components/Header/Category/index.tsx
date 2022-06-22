import Img from "@Components/Hocs/Img";

const Category = props => {
  const data = [
    { src: "https://media.hasaki.vn/hsk/icon/menu-category.png", title: "Danh mục" },
    { src: "https://media.hasaki.vn/hsk/icon/menu-deals.png", title: "Deals" },
    { src: "https://media.hasaki.vn/hsk/icon/now-free-mobile.gif", title: "Giao 2H" },
    { src: "https://media.hasaki.vn/hsk/icon/menu-spa.png", title: "Clinic & S.P.A" },
    { src: "https://media.hasaki.vn/hsk/icon/menu-spa-services.png", title: "Bảng giá" },
    { src: "https://media.hasaki.vn/hsk/icon/track-order-70.png", title: "Tra cứu đơn hàng" },
    { src: "https://media.hasaki.vn/hsk/icon/icon-covid.png", title: "Covid" },
    { src: "https://media.hasaki.vn/hsk/icon/menu-bestseller.png", title: "Bán chạy" },
    { src: "https://media.hasaki.vn/hsk/icon/menu-booking.png", title: "Đặt hẹn" },
    { src: "https://media.hasaki.vn/hsk/icon/menu-blog.png", title: "Cẩm nang" },
  ];

  return (
    <div className="mt-20 w-full">
      <div className="w-full py-2">
        <div className="w-full grid grid-cols-5 gap-2">
          {data.map((e, i) => (
            <div key={i} className="flex flex-col items-center">
              <Img
                src={e?.src}
                className="w-[45px] h-[45px] mb-[5px] rounded-md"
                title={e?.title}
                classNameTitle="text-[13px] text-center text-ellipsis"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
