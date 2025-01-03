import { useEffect, useState } from "react";

type DataType = "object" | "object|list";

interface IData<T> {
  type: DataType;
  data: T | T[];
}

interface IUseLoadingProps<T> {
  data: IData<T>;
}

interface IReturn {
  loading: boolean;
}

const useLoading = <T,>({ data }: IUseLoadingProps<T>): IReturn => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    switch (data.type) {
        case "object":
            setLoading(!data.data || Object.keys(data.data as object).length === 0);
            break;
        case "object|list":
            if (Array.isArray(data.data)) return setLoading((data.data as []).length === 0);
            setLoading(!data.data || Object.keys(data.data as object).length === 0);
            break;
        default:
            throw new Error("Invalid data type");
    }
  }, [data]);

  return {
    loading,
  };
};

export default useLoading;
