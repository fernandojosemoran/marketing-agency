import GlobalLayout from "@/apps/shared/GlobalLayout";
import { Helmet } from "react-helmet-async";

interface IError404LayoutProps {
    children: React.ReactNode;
    title?: string;
}

function Error404Layout({ children, ...props }: IError404LayoutProps) {
  return (
    <GlobalLayout>
        <Helmet async={true}>
            <title>{props.title || '404 | dashboard'}</title>
        </Helmet>

        { children }
    </GlobalLayout>
  );
}

export default Error404Layout;