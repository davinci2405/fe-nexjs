import { Link } from "@Router";

const Categories = (props) => {
  return (
    <div className="space-y-3">
      {props?.data?.map((e, index) => (
        <div key={index}>
          <Link href={`${e?.url}`}>
            <a className="text-white no-underline">{e?.name}</a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Categories;
