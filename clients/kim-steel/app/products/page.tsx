import Header from "@/components/Header";
import PageBanner from "@/components/PageBanner";
import Products from "@/components/Products";
import Footer from "@/components/Footer";

export const metadata = { title: "사업분야 | 주식회사 김스틸" };

export default function ProductsPage() {
  return (
    <>
      <Header />
      <PageBanner en="Our Products" ko="사업분야" />
      <Products />
      <Footer />
    </>
  );
}
