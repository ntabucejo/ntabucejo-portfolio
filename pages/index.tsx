import Image from "next/image";
import React from "react";
import Layout from "../components/layouts/layout";

const Home = () => {
  return (
    <Layout>
      <section className="h-[359px] flex justify-center flex-col gap-8">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Hello, I am Nikko Abucejo</h2>
          <h1 className="text-5xl font-bold">
            A <span className="text-cyan-500"> FRONTEND</span> DEVELOPER
          </h1>
        </div>
        <div className="space-x-4">
          <a
            href="https://www.linkedin.com/in/ntabucejo/"
            className="uppercase rounded px-4 py-2 bg-slate-100 text-zinc-900 font-bold">
            Get to know me
          </a>
        </div>
      </section>

      <section className="space-y-40">
        <div className="laptop:flex gap-4 space-y-6">
          <div className="relative h-40 w-80 rounded overflow-hidden">
            <Image
              alt="image"
              src="/twitter-clone.png"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">
              <a href="https://twitter-clone-brd0siwl3-ntabucejo.vercel.app/">
                Twitter Frontend Clone
              </a>
            </h2>

            <a
              className="text-slate-500"
              href="https://github.com/ntabucejo/twitter-clone-one">
              Source Code
            </a>

            <p>
              Created a frontend clone of twitter.com, using ReactJs and
              Tailwindcss.
            </p>
          </div>
        </div>

        <div className="laptop:flex gap-4 space-y-6">
          <div className="relative h-40 w-80 rounded overflow-hidden">
            <Image
              alt="image"
              src="/instagram-clone.png"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">
              <a href="https://instagram-clone-m957t02m4-ntabucejo.vercel.app/">
                Instagram Frontend Clone
              </a>
            </h2>

            <a
              className="text-slate-500"
              href="https://github.com/ntabucejo/instagram-clone-one">
              Source Code
            </a>

            <p>
              Created a frontend clone of instagram.com, using ReactJs and
              Tailwindcss.
            </p>
          </div>
        </div>
        <div className="laptop:flex gap-4 space-y-6">
          <div className="relative h-40 w-80 rounded overflow-hidden">
            <Image
              alt="image"
              src="/unsplash-clone.png"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">
              <a href="https://unsplash-clone-pgpqc51c2-ntabucejo.vercel.app/">
                Unsplash Frontend Clone
              </a>
            </h2>

            <a
              className="text-slate-500"
              href="https://github.com/ntabucejo/unsplash-clone-one">
              Source Code
            </a>

            <p>
              Created a frontend clone of unsplash.com, using ReactJs and
              Tailwindcss.
            </p>
          </div>
        </div>
        <div className="laptop:flex gap-4 space-y-6">
          <div className="relative h-40 w-80 rounded overflow-hidden">
            <Image
              alt="image"
              src="/orbitz.png"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">
              <a href="https://orbitz-h7so2cwdd-ntabucejo.vercel.app/">
                Orbitz
              </a>
            </h2>

            <a
              className="text-slate-500"
              href="hhttps://github.com/ntabucejo/orbitz">
              Source Code
            </a>

            <p>
              A responsive website of a solar system to visualize and simulate
              the Orbitz in 2D.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
