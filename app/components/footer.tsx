import Image from "next/image";
import Link from "next/link";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import { Languages } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-white py-20 px-10 text-[#696969]">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between mb-10">
          <div className="w-1/3 relative">
            <Link href="/">
              <Image src="/uber-logo.svg" alt="logo" width={140} height={120} />
            </Link>

            <div className="flex absolute bottom-0  gap-2">
              <Image
                src="/appstore.svg"
                width={140}
                height={30}
                alt="app-store"
              />
              <Image
                src="/googleplay.png"
                width={140}
                height={30}
                alt="app-store"
              />
            </div>
          </div>

          <div className="flex flex-col text-sm space-y-3">
            <Link href="#">Get Help</Link>
            <Link href="#">Buy gift cards</Link>
            <Link href="#">Add your restaurant</Link>
            <Link href="#">Sign up to deliver</Link>
            <Link href="#">Create a business account</Link>
            <Link href="#">Promotions</Link>
          </div>

          <div className="flex flex-col text-sm space-y-3">
            <Link href="#">Restaurant near me</Link>
            <Link href="#">View all cities</Link>
            <Link href="#">View all countries</Link>
            <Link href="#">Pickup near me</Link>
            <Link href="#">About Uber Eats</Link>

            <div className="flex gap-2">
              <Languages />
              <Link href="#">English</Link>
            </div>
          </div>
        </div>
        {/* icons */}
        <div className="flex justify-between">
          <div className="flex gap-4 text-black">
            <AiFillFacebook />
            <AiOutlineTwitter />
            <AiOutlineInstagram />
          </div>

          <div className="text-xs space-y-2">
            <div className="flex gap-5 justify-end">
              <Link href="#">Privacy</Link>
              <Link href="#">Terms</Link>
              <Link href="#">Pricing</Link>
              <Link href="#">Do not sell or share my personal information</Link>
            </div>
            <div className="flex gap-3">
              <p className="">
                This site is protected by reCAPTCHA and the Google Privacy
                Policy and Terms of Service apply.
              </p>
              <p>© 2023 Uber Technologies Inc.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
