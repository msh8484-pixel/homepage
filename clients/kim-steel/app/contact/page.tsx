import Header from "@/components/Header";
import PageBanner from "@/components/PageBanner";
import Contact from "@/components/Contact";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export const metadata = { title: "견적문의 | 주식회사 김스틸" };

export default function ContactPage() {
  return (
    <>
      <Header />
      <PageBanner en="Contact" ko="견적문의" />
      <Contact />
      <Location />
      <Footer />
    </>
  );
}
