import { useState } from "react";

import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "../icons";
import { IPostApi } from "@/domain/interfaces/blog.api.interface";
import { useRouter } from "next/navigation";

interface ISmallSetPagination {
  list_page: (number: number) => void;
  list: IPostApi[];
  count: number;
}

interface IPreviousButtonProps { 
  currentPage: number, 
  previous_number: () => void;
  disable?: boolean;
};

interface IPageNumberProps {
  active: number, 
  page: number, 
  pageNumber: number, 
  visitPage: (page: number) => void
};

interface INextButtonProps { 
  next_number: () => void; 
  disable?: boolean;
  length: number;
};

const PreviousButton = ({ currentPage, previous_number, disable = false }: IPreviousButtonProps) => {
  const btnStyle: string = currentPage === 1 ? "text-gray-600" : "text-gray-400 hover:text-gray-700";

  return (
    <div>
      <button
        className={`${btnStyle} border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium`}
        onClick={() => currentPage !== 1 && previous_number() }
        disabled={disable}
      >
        <ArrowLeftCircleIcon
          className="mr-3 h-5 w-5"
          aria-hidden="true"
          style={{ color: currentPage === 1 ? "#d1d5db" : "#9ca3af" }}
        />
        Previous
      </button>
    </div>
  );
};

const NextButton = ({ next_number, disable = false, length }: INextButtonProps) => {
  const isPar: boolean = length % 6 !== 0;
  const btnStyle: string = isPar ? "text-gray-600" : "text-gray-400 hover:text-gray-700";

  return (        
    <div className="-mt-px w-0">
      <button
        onClick={next_number}
        className={`${btnStyle} border-t-2 border-transparent pt-5 pl-1 inline-flex items-center text-sm font-medium dark:border-none hover:border-gray-300`}
        disabled={disable}
      >
        Next
        <ArrowRightCircleIcon
          className="ml-3 h-5 w-5 text-gray-400 dark:text-dm-third-text"
          aria-hidden="true"
          style={{ color: isPar ? "#d1d5db" : "#9ca3af" }}
        />
      </button>
    </div>
  );
};

const PageNumber = ({ active, page, pageNumber, visitPage }: IPageNumberProps) => {

  return active === page 
    ? (
      <div key={page} className={`hidden md:-mt-px md:flex`}>
        <div className="border-gray-700 text-gray-700 dark:text-dm-third-text border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
          {pageNumber}
        </div>
      </div>
    ) 
    : (
      <div
        key={page}
        onClick={() => visitPage(page)}
        className={`hidden md:-mt-px md:flex`}
      >
        <div className="cursor-pointer border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
          {pageNumber}
        </div>
      </div>
    );
};

function SmallSetPagination({ list_page, list, count }: ISmallSetPagination) {
  const [active, setActive] = useState<number>(1);
  const [listingsPerPage] = useState<number>(6);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const router = useRouter();
  

  const nodes: React.ReactNode[] = [];

  const visitPage = (page: number) => {
    window.scrollTo(0, 0);
    setCurrentPage(page);
    setActive(page);
    list_page(page);
  };

  const previous_number = () => {
    window.scrollTo(0, 0);
    if (currentPage === 1) return;

    setCurrentPage(currentPage - 1);
    setActive(currentPage - 1);
    list_page(currentPage - 1);
    router.replace(`blog`);
  };

  const next_number = () => {
    window.scrollTo(0, 0);
    if (currentPage === Math.ceil(list.length / 3)) return;

    setCurrentPage(currentPage + 1);
    setActive(currentPage + 1);
    list_page(currentPage + 1);
    router.replace(`blog?p=${currentPage + 1}`);
  };

  const getNumbers = (): React.ReactNode[] => {
    const itemsPerPage: number = listingsPerPage;
    let pageNumber: number = 1;
  
    for (let i = 0; i < count; i += itemsPerPage) {
      const page: number = pageNumber;
  
      nodes.push(<PageNumber key={i} active={active} page={page} pageNumber={pageNumber} visitPage={visitPage}/>);
  
      pageNumber++;
    }
  
    return nodes;
  };

  return (
    <nav className="border-t border-gray-200 px-4 flex justify-center sm:px-0">
      {currentPage !== 1 
      ? (
        <PreviousButton currentPage={currentPage} previous_number={previous_number}/>
      ) 
      : (
        <PreviousButton currentPage={currentPage} previous_number={previous_number} disable={true}/>
      )}

      {getNumbers()}

      {nodes.length === 0 || currentPage === nodes.length 
      ? (
        <NextButton next_number={next_number} length={list.length} disable={true}/>
      ) 
      : (
        <NextButton next_number={next_number} length={list.length}/>
      )}
    </nav>
  );
}

export default SmallSetPagination;
