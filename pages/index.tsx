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
            href="https://github.com/ntabucejo"
            className="uppercase rounded px-4 py-2 bg-slate-100 text-zinc-900 font-bold">
            Get to know me
          </a>
        </div>
      </section>

      <section className="space-y-40">
        <div className="laptop:flex laptop:items-center gap-4 space-y-6">
          <div className="relative h-40 laptop:w-[1500px] w-80 rounded overflow-hidden">
            <Image
              alt="image"
              src="/twitter-clone.png"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="space-y-10">
            <h2 className="text-2xl font-semibold">
              <a href="https://twitter-clone-brd0siwl3-ntabucejo.vercel.app/">
                Twitter Frontend Clone
              </a>
            </h2>

            <a
              className="text-slate-500"
              href="https://github.com/nonexnix/instagram-clone-one">
              Source Code
            </a>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam vero
              possimus in sit sequi exercitationem perferendis velit at! Omnis,
              odio! Veritatis maiores rerum et reprehenderit fuga quae quis
              tempora. Magnam! Provident reiciendis quisquam error obcaecati.
              Nam, velit quia asperiores doloribus iste quos, aut quis, deleniti
              sed totam praesentium? Quibusdam perspiciatis repudiandae culpa,
              voluptate id eum numquam ipsam quasi pariatur fugit!
            </p>
          </div>
        </div>

        <div className="laptop:flex laptop:items-center gap-4 space-y-6">
          <div className="relative h-40 laptop:w-[1500px] w-80 rounded overflow-hidden  laptop:hidden">
            <Image
              alt="image"
              src="/instagram-clone.png"
              layout="fill"
              objectFit="contain"
            />
          </div>

          <div className="laptop:text-right">
            <h2 className="text-2xl font-semibold">
              <a href="https://instagram-clone-m957t02m4-ntabucejo.vercel.app/">
                Instagram Frontend Clone
              </a>
            </h2>

            <a
              className="text-slate-500"
              href="hhttps://github.com/nonexnix/twitter-clone-one">
              Source Code
            </a>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam vero
              possimus in sit sequi exercitationem perferendis velit at! Omnis,
              odio! Veritatis maiores rerum et reprehenderit fuga quae quis
              tempora. Magnam! Provident reiciendis quisquam error obcaecati.
              Nam, velit quia asperiores doloribus iste quos, aut quis, deleniti
              sed totam praesentium? Quibusdam perspiciatis repudiandae culpa,
              voluptate id eum numquam ipsam quasi pariatur fugit!
            </p>
          </div>
          <div className="relative h-40 laptop:w-[1500px] w-80 rounded overflow-hidden hidden laptop:block">
            <Image
              alt="image"
              src="/instagram-clone.png"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div className="laptop:flex laptop:items-center gap-4 space-y-6">
          <div className="relative h-40 laptop:w-[1500px] w-80 rounded overflow-hidden">
            <Image
              alt="image"
              src="/unsplash-clone.png"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="space-y-10">
            <h2 className="text-2xl font-semibold">
              <a href="https://unsplash-clone-pgpqc51c2-ntabucejo.vercel.app/">
                Unsplash Frontend Clone
              </a>
            </h2>

            <a
              className="text-slate-500"
              href="https://github.com/nonexnix/unsplash-clone-one">
              Source Code
            </a>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam vero
              possimus in sit sequi exercitationem perferendis velit at! Omnis,
              odio! Veritatis maiores rerum et reprehenderit fuga quae quis
              tempora. Magnam! Provident reiciendis quisquam error obcaecati.
              Nam, velit quia asperiores doloribus iste quos, aut quis, deleniti
              sed totam praesentium? Quibusdam perspiciatis repudiandae culpa,
              voluptate id eum numquam ipsam quasi pariatur fugit!
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
