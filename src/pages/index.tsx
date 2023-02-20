import { type NextPage } from "next";
import Head from "next/head";
import Header from "../containers/Header";
import Footer from "../containers/Footer";
import ProductsSroll from "../containers/Product_Scroll";
import data from "../utils/data";
import HorizontalImageScroll from "../components/Carousel-B";
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
        <h1>HorizontalImageScroll</h1>
        <HorizontalImageScroll
          images={data.products.map((product) => product.image.src)}
        />

        <h1>CardSlider</h1>
        <CardSlider images={data.products.map((product) => product.image)} />

        <h1>ProductsSroll</h1>
        <ProductsSroll products={data.products} />
      </main>
      <Footer />
    </>
  );
};

export default Home;
