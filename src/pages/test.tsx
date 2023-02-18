import { type NextPage } from "next";
import Head from "next/head";
import ProductsSroll from "../containers/Product_Scroll";
import data from "../utils/data";
import TestComponent from "../test/Test_Component";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Testing Screen</title>
        <meta
          name="description"
          content="If you are not a creator of this page, get out"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container m-auto">
        hi this are the test
        <TestComponent />
        <ProductsSroll products={data.products} />
      </main>
    </>
  );
};

export default Home;
