import Header from "@/components/Header";
import PageBanner from "@/components/PageBanner";
import Quality from "@/components/Quality";
import Footer from "@/components/Footer";

export const metadata = { title: "품질관리 | 주식회사 김스틸" };

export default function QualityPage() {
  return (
    <>
      <Header />
      <PageBanner en="Why Kim Steel" ko="품질관리" />
      <Quality />
      <Footer />
    </>
  );
}
