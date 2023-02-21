import { type NextPage } from "next";
import Head from "next/head";
import Header from "../containers/Header";
import Footer from "../containers/Footer";
import ProductsSroll from "../containers/Product_Scroll";
import data from "../utils/data";
import CardSlider from "../components/Carousel-D";

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
        <CardSlider images={data.products.map((product) => product.image)} />
        <ProductsSroll products={data.products} />
      </main>
      <Footer />
    </>
  );
};

export default Home;
