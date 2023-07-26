import Link from "next/link";
import Image from "next/image";

import googleIcon from "@/accets/svg/google.svg";
import facebookIcon from "@/accets/svg/facebook.svg";

export const LoginByGoogle = () => {
  return (
    <div className=" container flex justify-center items-center mt-11">
      <p className="text-base mr-5">Увійти за допомогою:</p>
      <div className="flex justify-center items-center gap-6">
        <Link href="/" className="flex w-full  cursor-pointer">
          <Image src={googleIcon} width={32} height={32} alt="Google icon" />
        </Link>
        <Link href="/" className="flex w-full cursor-pointer">
          <Image
            src={facebookIcon}
            width={32}
            height={32}
            alt="Facebook icon"
          />
        </Link>
      </div>
    </div>
  );
};
