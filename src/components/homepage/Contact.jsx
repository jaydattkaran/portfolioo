import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";

export default function Contact() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  });

  return (
    <section
      id="contact"
      className="mt-20 overflow-hidden"
      aria-label="contact me"
    >
      <div className="section-heading ">
        <div className="heading flex translate-y-28 items-center justify-center space-x-3">
          <svg
            className="scale-90 sm:scale-125"
            width="20"
            height="20"
            viewBox="0 0 32 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.39876e-06 -2.79753e-06C6.26248e-07 8.83656 7.16352 16 16 16C24.8366 16 32 8.83656 32 0L1.39876e-06 -2.79753e-06Z"
              fill="#8C8C73"
            />
          </svg>
          <h2 className="w-fit text-center text-heading-2 font-medium uppercase text-secondary-600">
            Contact me
          </h2>
          <svg
            className="scale-90 sm:scale-125"
            width="20"
            height="20"
            viewBox="0 0 32 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.39876e-06 -2.79753e-06C6.26248e-07 8.83656 7.16352 16 16 16C24.8366 16 32 8.83656 32 0L1.39876e-06 -2.79753e-06Z"
              fill="#8C8C73"
            />
          </svg>
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-20 md:grid md:grid-cols-6 md:px-12">
        <div className="col-span-4">
          <h3 className="max-w-lg text-heading-3 font-semibold leading-tight">
            Have an awesome idea? Let&apos;s bring it to life.
          </h3>
          <p className="mt-4 max-w-md text-body-2 text-accent-100">
            I am looking for freelance opportunities or internships in startups,
            agencies, and design studios.
          </p>
          <form
            name="contact"
            autoComplete="off"
            // eslint-disable-next-line react/no-unknown-property
            className="mt-10 font-grotesk"
            method="POST" 
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="contact"></input>
            <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2">
              <div className="relative z-0">
                  <input
                    required
                    type="text"
                    id="name"
                    name="name"
                    className="peer block w-full appearance-none border-0 border-b border-accent-100 bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                <label
                  htmlFor="name"
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-body-3 text-secondary-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75"
                >
                  Your name
                </label>
              </div>
              <div className="relative z-0">
                <input
                  required
                  type="text"
                  name="email"
                  id="email"
                  className="peer block w-full appearance-none border-0 border-b border-accent-100 bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-body-3 text-secondary-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75"
                >
                  Your email
                </label>
              </div>
              <div className="relative z-0 sm:col-span-2">
                <textarea
                  required
                  id="message"
                  name="message"
                  rows="5"
                  className="peer block w-full appearance-none border-0 border-b border-accent-100 bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0"
                  placeholder=" "
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-body-3 text-secondary-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75"
                >
                  Your message
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="button group mt-10 border duration-200 hover:border-accent-400 hover:bg-transparent"
            >
              <span className="relative">
                <span className="absolute bottom-2 h-1 w-0 bg-secondary-700 opacity-90 duration-300 ease-out group-hover:w-full"></span>
                <span className="group-hover:text-accent-400">
                  Send Message
                </span>
              </span>
            </button>
          </form>
        </div>
        <div className="col-span-2 grid grid-cols-1 gap-x-4 gap-y-8 text-accent-300 sm:grid-cols-2 sm:gap-y-0 md:grid-cols-1">
          <div className="space-y-3 ">
            <h4 className="text-body-1 font-semibold">Contact Details</h4>
            <div className="flex flex-col space-y-3 text-body-2">
              <a
                href="mailto:hello@huyng.xyz"
                className="group relative w-fit cursor-pointer"
              >
                <span>hello@huyng.xyz</span>
                <span className="absolute bottom-0 left-0 h-[0.10em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
              </a>
              <a
                href="tel:+61 435 107 203"
                className="group relative w-fit cursor-pointer"
              >
                <span>+61 435 107 203</span>
                <span className="absolute bottom-0 left-0 h-[0.10em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
              </a>
            </div>
          </div>
          <div className="space-y-3 ">
            <h4 className="text-body-1 font-semibold">My Digital Spaces</h4>
            <div className="space-y-3 text-body-2">
              <a
                href="https://bento.me/huyng"
                className="group flex items-center space-x-2"
              >
                <Icon icon="simple-icons:bento" color="#666" />
                <div className="relative">
                  <span>Bento</span>
                  <span className="absolute bottom-0 left-0 h-[0.10em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
                </div>
              </a>
              <a
                href="https://github.com/cheesezzzz"
                className="group flex items-center space-x-2"
              >
                <Icon icon="mdi:github" color="#666" />
                <div className="relative">
                  <span>Github</span>
                  <span className="absolute bottom-0 left-0 h-[0.12em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/huyng03/"
                className="group group flex w-fit items-center space-x-2"
              >
                <Icon icon="mdi:linkedin" color="#666" />
                <div className="relative">
                  <span>LinkedIn</span>
                  <span className="absolute bottom-0 left-0 h-[0.10em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
                </div>
              </a>
              <a
                href="https://www.youtube.com/channel/UCBOAB9RV647G93GxLhEXleA"
                className="group flex items-center space-x-2"
              >
                <Icon icon="mdi:youtube" color="#666" />
                <div className="relative">
                  <span>YouTube</span>
                  <span className="absolute bottom-0 left-0 h-[0.10em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
                </div>
              </a>
            </div>
          </div>
          <div className="space-y-3 ">
            <h4 className="text-body-1 font-semibold">Location</h4>
            <div className="space-y-2 text-body-2">
              <p>
                Melbourne, Australia <br></br>
                {time}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
