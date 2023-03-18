import { type NextPage } from "next";
import Head from "next/head";
import Header from "~/containers/Header";
import Footer from "~/containers/Footer";
import ProductsSroll from "~/containers/ProductScroll";
import data from "~/utils/data";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Loft 35</title>
        <meta name="description" content="Loft-35 Store" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="container m-auto">
        <div className="m-auto flex w-[95%] items-center justify-center bg-[var(--secondary-bg-color)] pt-4 pb-5 text-center">
          <button className="h-min max-w-[80%] rounded-md bg-[var(--light-gray-1)] p-2 text-[0.8rem] font-medium text-[var(--font-secondary-color)] shadow-md">
            Click aquí para stalkear nuestro Instagram ;)
          </button>
        </div>
        <ProductsSroll products={data.products} />
      </main>
      <Footer />
    </>
  );
};

export default Home;
