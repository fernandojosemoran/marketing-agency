import { Metadata } from "next";

interface IBlogLayout {
  children: React.ReactNode;
}

const title: string = "Blog | Marketing Agency";
const description: string =
  "Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones.";

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    description: description,
    title: title,
    images: [
      "https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg",
    ],
  },
  robots: "all",
  twitter: {
    title: title,
    description: description,
    images: [
      "https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg",
    ],
  },
};

export default function BlogLayout({ children }: IBlogLayout) {
  return (
    <>
      {children}
    </>
  );
}
