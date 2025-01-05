import GlobalLayout from "../shared/GlobalLayout";

interface IHomeLayoutProps {
    children: React.ReactNode;
    className?: string;
    title?: string;
}

const HomeLayout = ({ children, ...props }: IHomeLayoutProps) => {
  return (
    <GlobalLayout>
      <div className={props.className}>
        {children}
      </div>
    </GlobalLayout>
  );
};

export default HomeLayout;