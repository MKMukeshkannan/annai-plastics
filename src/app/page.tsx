import { IconBrandFacebookFilled, IconBrandLinkedin, IconBrandXFilled } from "@tabler/icons-react";
import Image from "next/image";
import HeroMachine from "../../public/hero-section.webp";
import AboutMachine from "../../public/about-section.webp";

import GoDown from "../../public/godown.webp";
import Grinder from "../../public/grinder.webp";
import Material from "../../public/material.webp";
import Mold from "../../public/material-bags.webp";
import Operation from "../../public/mold.webp";
import MaterialBags from "../../public/operation.webp";


export default function Home() {
  return (
    <main className="w-full flex flex-col ">
      {/*HERO SECTION*/}
      <section className="h-[700px] bg-red-500 w-full overflow-clip grayscale relative">
        <Image
          src={HeroMachine}
          width={1000}
          height={1000}
          className=" w-full h-full object-cover"
          alt="plastic injection molding machine"
        />
        <section className="absolute bottom-[50px] bg-accent text-white p-5">
          <h1 className="font-black text-6xl md:text-8xl ">ANNAI PLASTICS</h1>
          <p className="text-white text-right">
            experts in plastic injection and molding
          </p>
        </section>
      </section>

      <section className=" bg-white p-10 lg:p-24 flex xl:flex-row flex-col space-x-5">
        <section className="">
          <h1 className="text-7xl font-black pb-5">About Us</h1>
          <section className="block lg:hidden w-full bg-amber-800 lg:min-w-xl mb-2">
            <Image
              src={AboutMachine}
              width={1000}
              height={1000}
              className=" w-full h-full object-cover"
              alt="plastic injection molding machine"
            />
          </section>
          <p className="wxl text-lg">
            Established in 2000, we are a trusted name in plastic injection and
            molding, specializing in the production of cylindrical cores for
            bill rolls and other custom plastic components. With over two
            decades of experience and more than 100 satisfied customers, we’ve
            built a reputation for delivering high-quality, cost-effective
            solutions that meet the evolving needs of businesses across
            industries.
            <br />
            <br />
            <span className="hidden md:block">
              At the heart of our work is a commitment to customer satisfaction
              and environmental responsibility. By using recycled plastics in
              our manufacturing processes, we help clients reduce costs while
              supporting a more sustainable future. Our team combines technical
              expertise with a hands-on approach , ensuring every product we
              deliver meets the highest standards of quality, precision , and
              reliability.
            </span>
          </p>
        </section>
        <section className="hidden lg:block w-full  lg:min-w-xl ">
          <Image
            src={AboutMachine}
            width={1000}
            height={1000}
            className=" w-full h-full object-cover"
            alt="plastic injection molding machine"
          />
        </section>
      </section>

      {/* QOUTE SECTION */}
      <section className=" bg-accent text-white p-10 py-20 md:p-32 rounded-b-3xl">
        <h1 className="text-4xl lg:text-7xl font-black text-center">
          We simplify plastic production through expert molding solutions.
        </h1>
        <p className="text-center p-5 md:text-xl font-light">
          Annai Plastics values its customers, Because your business deserves
          more than just parts.
        </p>
      </section>

      <section className=" rounded-b-3xl my-20">
        <h1 className="text-4xl lg:text-7xl font-black text-center">
          Why Choose Us ?
        </h1>

        <section className="flex flex-col md:flex-row w-full items-center justify-center space-y-5 space-x-0 md:space-x-5 md:space-y-0 mt-10 ">
          {/*  ECO FRIENDLY CARD */}
          <section className="flex flex-col items-center justify-center border p-5 border-accent rounded-xl w-full max-w-[300px] hover:-translate-y-2 transition pb-20">
            <Image
              className="my-8"
              src={"/recycle-svgrepo-com.svg"}
              width={100}
              height={100}
              alt=""
            />
            <h1 className="text-4xl">Eco-Friendly</h1>
            <article className="text-center">
              We use recycled plastics in our manufacturing to reduce waste and
              lower costs, offering sustainable products without compromising on
              quality.
            </article>
          </section>

          {/*  AfFFOdABLE CARD */}
          <section className="flex flex-col items-center justify-center border p-5 border-white rounded-xl w-full max-w-[300px] hover:-translate-y-2 transition bg-accent text-white pb-20">
            <Image
              className="my-8"
              src={"/coin.svg"}
              width={100}
              height={100}
              alt=""
            />
            <h1 className="text-4xl">Affordable</h1>
            <article className="text-center">
              We offer competitive pricing by optimizing production and using
              recycled materials, giving you high-quality products at lower
              costs. quality.
            </article>
          </section>

          {/*  DELIVERY CARD */}
          <section className="flex flex-col items-center justify-center border p-5 border-accent rounded-xl w-full max-w-[300px] hover:-translate-y-2 transition pb-20">
            <Image
              className="my-8"
              src={"/delivery-fast-solid-svgrepo-com.svg"}
              width={100}
              height={100}
              alt=""
            />
            <h1 className="text-4xl text-center">Delivery</h1>
            <article className="text-center">
              We pride ourselves on reliable, on-time delivery, ensuring your
              products arrive as scheduled to keep your operations running
              smoothly.
            </article>
          </section>
        </section>
      </section>

      <section className="w-full bg-white p-10">
        <h1 className="text-6xl lg:text-8xl font-black ">Our Factory</h1>
        <p className="pb-10">This is where we produce our products.</p>

        <section className="columns-1 lg:columns-3 [&>img:not(first-child)]:mb-5 flex lg:block flex-col items-center justify-center">
          <Image
            width={600}
            height={400}
            alt=""
            src={GoDown}
            className="hidden lg:block"
          />
          <Image
            width={600}
            height={400}
            alt=""
            src={Mold}
          />
          <Image
            width={500}
            height={300}
            alt=""
            src={Operation}
          />
          <Image
            width={500}
            height={400}
            alt=""
            src={Material}
          />
          <Image
            width={600}
            height={400}
            alt=""
            src={MaterialBags}
          />
          <Image
            width={600}
            height={400}
            alt=""
            src={Grinder}
            className="hidden lg:block"
          />
        </section>
      </section>

      <section className="h-[700px] w-full p-10 flex flex-col xl:flex-row">

        <section className="xl:pr-24 flex flex-col" >
          <h1 className="text-5xl xl:text-8xl font-bold">Contact Us</h1>
          <p className="pb-5 xl:pt-10 xl:pl-2 text-xl font-light">
            Get in touch with us for any enquires and questions.
          </p>
          <section className="h-0 flex-1" />

          <section className="items-center space-x-5 font-light hidden xl:flex">
            <h1 className="border py-1 px-2 cursor-pointer hover:bg-accent hover:text-white bg-white text-accent">FACEBOOK</h1>
            <h1 className="border py-1 px-2 cursor-pointer hover:bg-accent hover:text-white bg-white text-accent">LINKEDIN</h1>
          </section>
        </section>

        <section className="flex flex-col w-full h-full">
          <section className="grid grid-cols-1 xl:grid-cols-2 pb-5 gap-5">
            <section>
              <h2 className="text-xl text-zinc-500">mobile number</h2>
              <p className="text-xl xl:text-2xl font-bold">91+ 9150300887</p>
            </section>
            <section>
              <h2 className="text-xl text-zinc-500">email</h2>
              <p className="text-xl xl:text-2xl font-bold">enquiry@annaiplastics.com</p>
            </section>
            <section>
              <h2 className="text-xl text-zinc-500">address</h2>
              <p className="text-xl xl:text-2xl font-bold">33/A, Janani Nagar Annex, <br/> Mangadu, Chennai - 600122</p>
            </section>
          </section>

          <section className="bg-red-300 w-full h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m11!1m3!1d4787.97668593785!2d80.09498037591588!3d13.031350087289578!2m2!1f0!2f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528a7ff2a4bf09%3A0x9e43e301de7256bb!2sAnnai%20Plastics-Experts%20in%20Plastic%20Moulding!5e1!3m2!1sen!2sin!4v1749390778849!5m2!1sen!2sin"
              className="w-full h-full"
              width="600"
              height="450"
              loading="lazy"
            ></iframe>
          </section>
        </section>
      </section>

      <footer className="flex xl:flex-row flex-col bg-accent h-72 p-10">
        <section className="flex items-center justify-center xl:justify-start xl:items-start  w-full h-full">
            <h1 className="text-3xl xl:text-7xl font-bold text-white">ANNAI PLASTICS</h1>
        </section>

        <section className="text-white w-full h-full flex flex-col items-center justify-center xl:items-end xl:justify-end"> 
            <h1 className="text-xl font-light">follow us on</h1>
            <section className=" flex space-x-2">
                <IconBrandFacebookFilled />
                <IconBrandLinkedin />
                <IconBrandXFilled />
            </section>
        </section>
      </footer>

      <footer className="w-full h-10 bg-[#000] text-white flex items-center justify-center font-light text-sm">
        <p>Copyright © 2025 Annai Plastics. All rights reserved.</p>
      </footer>
    </main>
  );
}
