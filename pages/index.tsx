import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import { Product } from "@/type";
import Products from "@/components/Products";
import Footer from "@/components/Footer";
import TopFooter from "@/components/TopFooter";

interface Props {
  productData: Product;
}

export default function Home({ productData }: Props) {
  return (
    <>
      <Head>
        <title>Shoppers.com | Save Money. Live Better</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/public/assets/images/logo.png" />
      </Head>
      <main className="bg-lightBlue">
        <div className="max-w-contentContainer mx-auto bg-white">
          <Banner />
          <Products productData={productData} />
        </div>
      </main>
    </>
  );
}

//====SSR data fetching

export const getServerSideProps = async () => {
  const productData = await (
    await fetch("http://localhost:3000/api/productdata")
  ).json();

  return {
    props: { productData },
  };
};