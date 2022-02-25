import { Disclosure, Transition } from "@headlessui/react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export const DropDownFooter = props => {
  const { title, childComponent, className } = props;

  const handleScrollBottom = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };

  return (
    <div className={className}>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="w-full bg-black-lead text-white flex items-center justify-between px-4 py-3 border-none text-[13px] uppercase font-bold">
              <span>{title}</span>
              {open ? <AiOutlineMinus className="text-lg" /> : <AiOutlinePlus className="text-lg" />}
              {open && handleScrollBottom()}
            </Disclosure.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="px-4 pb-3 space-y-2 text-[13px]">{childComponent}</Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
};
