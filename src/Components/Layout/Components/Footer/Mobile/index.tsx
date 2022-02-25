import { DropDownFooter } from "@Components/Common/Dropdown";
import Image from "next/image";
import { useRef, useState } from "react";
import { FooterData } from "../data";
import AboutUs from "./AboutUs";
import Categories from "./Categories";
import ContactInfo from "./ContactInfo";
import { AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai";

const FooterMobile = () => {
  const { listPayment, contactInfo, categories, aboutUs } = FooterData;
  const [emailInput, setEmailInput] = useState("");
  const handleChange = e => {
    let val = e.target.value;
    setEmailInput(val);
  };

  return (
    <div className="w-full grid grid-cols-1 py-4">
      <div className="space-y-4 text-white">
        <div className="text-center">Contact with us ❤️</div>
        <div className=" text-white px-4">
          <input
            className="w-full rounded-sm py-1 bg-black-lead text-white font-medium text-[13px] border-b border-mythical-wine outline-none"
            type="text"
            placeholder="Email"
            value={emailInput}
            onChange={e => handleChange(e)}
          />
        </div>
        <div className="flex items-center gap-2 px-4 py-2">
          {listPayment?.map((e, index) => (
            <a key={index} href="#" target="_blank">
              <Image src={`/img/payment/${e}.webp`} alt="" height="35px" width="35px" className="rounded-md" />
            </a>
          ))}
        </div>
        <div className="w-full">
          <DropDownFooter
            title="Thông tin liên hệ"
            childComponent={<ContactInfo data={contactInfo} />}
            className="border-t"
          />
          <DropDownFooter title="Danh mục" childComponent={<Categories data={categories} />} className="border-y" />
          <DropDownFooter title="Về chúng tôi" childComponent={<AboutUs data={aboutUs} />} className="border-b" />
        </div>
        <div className="flex items-center justify-between px-4">
          <div className="flex items-center gap-2 text-2xl">
            <AiOutlineInstagram />
            <AiOutlineFacebook />
          </div>
          <Image src="/img/bct-icon.webp" alt="" width="125px" height="47px" />
        </div>
      </div>
    </div>
  );
};

export default FooterMobile;
