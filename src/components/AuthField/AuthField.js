"use client";

import { useState } from "react";
import Image from "next/image";

import eyeOpenIcon from "@/accets/svg/eyeOpen.svg";
import eyeClosedIcon from "@/accets/svg/eyeClosed.svg";

export const AuthField = ({ name, type, placeholder = "", labelName }) => {
  const [visible, setVisible] = useState(false);

  const onIconBtnCLick = () => {
    setVisible((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col gap-1 grow relative">
      <label className="leading-5">
        {labelName} <sup className="text-error">*</sup>
      </label>
      <input
        className="px-3.5 py-3 text-base text-Gray_60 border border-solid divide-Gray_60 hover:text-text divide-text focus:border-2 divide-primary_main focus-visible:outline-0"
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
      />
      {type === "button" && (
        <button
          className="flex align-center justify-center absolute bottom-4 left-3  focus-visible:outline-0 w-6.25 h-6.25"
          type="button"
          onClick={onIconBtnCLick}
        >
          {visible ? (
            <Image
              src={eyeClosedIcon}
              width={24}
              height={24}
              alt="Eye closed icon"
            />
          ) : (
            <Image
              src={eyeOpenIcon}
              width={24}
              height={24}
              alt="Eye open icon"
            />
          )}
        </button>
      )}
    </div>
  );
};
