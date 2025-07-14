import Button from "@/components/mainButton/Button";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Me | WolfDev",
  description:
    "Learn more about Youssef – front-end developer passionate about clean design, performance, and user experience.",
  openGraph: {
    title: "About Me | WolfDev",
    description:
      "Learn more about Youssef – front-end developer passionate about clean design, performance, and user experience.",
    url: "https://you-div.netlify.app/about",
    siteName: "WolfDev",
    images: [
      {
        url: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      },
    ],
    type: "profile",
  },
};

export default function About() {
  return (
    <section className="flex flex-col justify-center gap-10">
      <div className="w-full h-[300] relative">
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="About Us"
          fill={true}
          className="absolute object-cover rounded-md grayscale"
        />
        <div className="absolute bg-success p-2 bottom-0 left-0 md:bottom-5 md:left-5">
          <h1 className="text-3xl font-bold">Digital Storytellers</h1>
          <p className="text-2xl font-semibold">
            Handcrafting award winning digital experiences
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex-1 flex flex-col text-xl gap-5">
          <h2>Who Are We?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
          </p>
          <p>
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?
          </p>
        </div>

        <div className="flex-1 flex flex-col text-xl gap-5">
          <h2>What We Do?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
            Creative Illustrations
          </p>
          <ul>
            <li>- Dynamic Websites</li>
            <li>- Fast and Handy</li>
            <li>- Mobile Apps</li>
          </ul>
          <Button link="/contact" text="Contact" />
        </div>
      </div>
    </section>
  );
}
