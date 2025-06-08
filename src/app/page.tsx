import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full flex flex-col ">
      {/*HERO SECTION*/}
      <section className="h-[700px] bg-red-500 w-full overflow-clip grayscale relative">
        <Image
          src="https://easchangesystems.com/wp-content/uploads/2015/08/130913_munchen_065.jpg"
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
              src="https://easchangesystems.com/wp-content/uploads/2015/08/130913_munchen_065.jpg"
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
            src="https://easchangesystems.com/wp-content/uploads/2015/08/130913_munchen_065.jpg"
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

      <footer className="flex flex-col bg-accent h-72 mt32">
        <section className="h-0 flex-1"></section>
        <h1 className="text-white lg:text-8xl p-10">FOOTER</h1>
      </footer>
    </main>
  );
}
