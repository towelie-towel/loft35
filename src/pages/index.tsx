import { type NextPage } from "next";
import Head from "next/head";
import Header from "../containers/Header";
import Footer from "../containers/Footer";
import ProductsSroll from "../containers/Product_Scroll";
import data from "../utils/data";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Loft 35</title>
        <meta name="description" content="Loft-35 Store Sales Sistem" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="container m-auto">
        <div className="m-auto flex w-11/12 items-center justify-center bg-[var(--secondary-bg-color)] pt-4 pb-5 text-center">
          <h3 className="h-min max-w-[80%] rounded-md bg-[var(--light-gray-1)] p-2 text-[0.8rem] font-medium text-[var(--font-secondary-color)] shadow-md">
            Click aquí para stalkear nuestro Instagram ;)
          </h3>
        </div>
        <ProductsSroll products={data.products} />
      </main>
      <Footer />
    </>
  );
};

export default Home;
