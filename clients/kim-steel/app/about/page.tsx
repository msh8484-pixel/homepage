import Header from "@/components/Header";
import PageBanner from "@/components/PageBanner";
import About from "@/components/About";
import Footer from "@/components/Footer";

export const metadata = { title: "회사소개 | 주식회사 김스틸" };

export default function AboutPage() {
  return (
    <>
      <Header />
      <PageBanner en="About Us" ko="회사소개" />
      <About />
      <Footer />
    </>
  );
}
