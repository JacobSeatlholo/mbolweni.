import Image from "next/image";
import Link from "next/link";

const business = [
  {
    img: "/business.png",
    title: " Feed your employees",
    link: "Create a business account",
  },
  {
    img: "/restaurant.png",
    title: "Your restaurant, delivered",
    link: "Add your restaurant",
  },
  {
    img: "/delivery.png",
    title: "Deliver with Uber Eats",
    link: "Sign up to deliver",
  },
];

export default function BusinessCard() {
  return (
    <main className="bg-white py-20">
      <div className="px-10 ">
        <div className="flex justify-between">
          {business.map((option, id) => (
            <div className="" key={id}>
              <Image
                src={option.img}
                width={400}
                height={400}
                alt="image"
                loading="lazy"
              />
              <h1 className="text-xl font-bold font-montserrat mt-3">
                {option.title}
              </h1>
              <Link href="/" className="text-sm underline">
                {option.link}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
