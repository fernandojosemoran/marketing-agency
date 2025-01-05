import { Metadata } from "next";

interface ISearchLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Search | Marketing Agency",
};

const SearchLayout = ({ children }: ISearchLayoutProps) => {
  return <div className="mt-20">{children}</div>;
};

export default SearchLayout;
