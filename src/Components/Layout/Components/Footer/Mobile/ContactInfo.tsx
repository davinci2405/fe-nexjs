import { FooterData } from "../data";

const ContactInfo = props => {
  return (
    <div className="space-y-5 py-2">
      <div className="space-y-1">
        <div>Hotline: {props?.data.hotline}</div>
        <div>Email: {props?.data.email}</div>
      </div>
      {/* Hệ thống cửa hàng */}
      <div className="space-y-2">
        {props?.data.shopSystem?.map((e, index) => (
          <div key={index} className="space-y-1.5">
            <div>{e?.district}</div>
            <div>{e?.address}</div>
          </div>
        ))}
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: props?.data.companyInfo,
        }}
      />
    </div>
  );
};

export default ContactInfo;
