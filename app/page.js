import Image from "next/image";
import styles from "./page.module.css";
import ProductCart from "@/fsd-3entities/product-cart/ui/product-cart";
import Section4 from '@/fsd-1widgets/section-4/ui/section-4';
import Section3 from "@/fsd-1widgets/section-3/ui/section-3";
import Section2 from "@/fsd-1widgets/section-2/ui/section-2";
import Section1 from "@/fsd-1widgets/section-1/ui/section-1";


export default function Home() {
  return (
    <>
    <Section1/>
    <Section2/>
    <Section3/>
    <Section4/></>
  );
}
