import cx from "clsx";

interface IImg {
  src: string;
  className?: string;
  title?: string;
  classNameTitle?: string;
}

const Img = (props: IImg) => {
  return (
    <>
      <div className="flex items-center justify-center">
        <img src={props?.src} className={cx("", props?.className)} alt="" />
      </div>
      {props?.title && <p className={cx("pt-1", props?.classNameTitle)}>{props?.title}</p>}
    </>
  );
};

export default Img;
