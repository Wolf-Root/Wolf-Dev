import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact | WolfDev",
  description:
    "Get in touch with Youssef for your next project or collaboration. Let’s build something great together!",
  openGraph: {
    title: "Contact | WolfDev",
    description:
      "Get in touch with Youssef for your next project or collaboration. Let’s build something great together!",
    url: "https://you-div.netlify.app/contact",
    images: [
      {
        url: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
      },
    ],
    type: "website",
  },
};

export default function Contact() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-10">
      <div className="flex-1">
        <Image
          src="/contact.png"
          alt="Contact"
          width={500}
          height={500}
          className="object-cover animate-move"
        />
      </div>

      <div className="flex-1 w-full">
        <form className="w-full bg-base-200 flex justify-center  border-2 rounded-2xl">
          <div className="w-[90%] h-full my-10 flex flex-col items-center gap-5">
            <h1 className="text-3xl font-bold text-center text-success capitalize">
              contact me
            </h1>

            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required
              className="w-full text-xl p-3 border-2 border-[#bbb]"
            />
            <label htmlFor="email" className="sr-only">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              className="w-full text-xl p-3 border-2 border-[#bbb]"
            />

            <textarea
              name="massage"
              id="massage"
              placeholder="Massage"
              rows={8}
              required
              maxLength={1000}
              className="w-full text-xl p-3 border-2 border-[#bbb]"
            />
            <button className="w-fit btn btn-success">send</button>
          </div>
        </form>
      </div>
    </section>
  );
}
