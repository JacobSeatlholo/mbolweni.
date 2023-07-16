import SubNavbar from "@/app/components/sub-navbar";
import Button from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { BsApple } from "react-icons/bs";

export default function Page() {
  return (
    <main className="">
      <SubNavbar />
      <section className="flex justify-center items-center  flex-col h-screen w-[300px] space-y-5 ">
        <h2>
          What's your phone number or <br />
          email?
        </h2>
        <input
          type="text"
          placeholder="Enter phone number or email"
          className="bg-[#eee] text-[#777] px-4 py-3 w-[300px] outline-none rounded-md text-sm"
        />
        <Button className="rounded-[10px] px-20 py-2 text-xs">Continue</Button>
        <Separator className="bg-[#afafaf]" />
        <div className="space-y-2">
          <Button className="rounded-[10px] px-20 py-2 text-xs flex ">
            <Image
              width={20}
              height={20}
              src="/icons8-google.svg"
              alt="google"
            />
            <p>Continue with Google</p>
          </Button>

          <Button className="rounded-[10px] px-20 py-2 text-xs">
            <BsApple /> <p>Continue with Apple</p>
          </Button>
          <Button className="rounded-[10px] px-20 py-4 text-xs">
            <p>Continue with Facebook</p>
          </Button>
        </div>
        <Separator className="bg-[#afafaf]" />
        <div className="flex justify-center items-center gap-1">
          <svg
            width="15"
            height="14"
            viewBox="0 0 15 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.835938 0.332031L0.835938 13.6654L14.1693 13.6654L14.1693 0.332031L0.835938 0.332031ZM11.5026 4.9987H9.5026V2.9987L11.5026 2.9987V4.9987ZM9.5026 6.9987V4.9987H7.5026L7.5026 2.9987L3.5026 2.9987L3.5026 6.9987L5.5026 6.9987V8.9987H3.5026L3.5026 10.9987H5.5026V8.9987H7.5026V10.9987L11.5026 10.9987L11.5026 6.9987H9.5026ZM7.5026 6.9987H5.5026V4.9987H7.5026V6.9987ZM7.5026 6.9987H9.5026L9.5026 8.9987L7.5026 8.9987V6.9987Z"
              fill="black"
            ></path>
          </svg>
          <p className="font-semibold text-sm">Log in with QR code</p>
        </div>
        <div>
          {" "}
          <p className="text-xs text-[#777] w-[245px]">
            By proceeding, you consent to get calls, WhatsApp or SMS messages,
            including by automated means, from Uber and its affiliates to the
            number provided. This site is protected by reCAPTCHA and the Google
            <span>Privacy Policy</span> and <span>Terms of Service</span> apply.
          </p>
        </div>
      </section>
    </main>
  );
}
