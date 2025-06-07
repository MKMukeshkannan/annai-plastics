import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col ">
      {/*HERO SECTION*/}
      <section className="bg-red-500 h-0 flex-1 w-full max-h-[700px] overflow-clip  grayscale">
        <section className="absolute bottom-[50px] bg-black text-white p-5">
          <h1 className="font-black text-8xl ">
            ANNAI PLASTICS
          </h1>
          <p className="text-white text-right">experts in plastic injection and molding</p>
        </section>
        <Image
          src="https://easchangesystems.com/wp-content/uploads/2015/08/130913_munchen_065.jpg"
          width={1000}
          height={1000}
          className="w-full "
          alt="plastic injection molding machine"
        />
      </section>
      <section className="h-screen bg-yellow-500"></section>
    </main>
  );
}
