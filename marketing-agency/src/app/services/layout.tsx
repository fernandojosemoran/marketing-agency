import { Metadata } from "next";

interface IServicesLayoutProps {
  children: React.ReactNode;
}

const title: string = "Services | Marketing Agency";
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

export default function ServicesLayout({ children }: IServicesLayoutProps) {
  return (
    <div className="dark:bg-dm-third pt-28 overflow-x-hidden">
      {children}
    </div>
  );
}
