import useBearStore from "../shared/provider/store";
import HomeLayout from "./Layout";

function Home() {
  const bear = useBearStore();

  return (
    <HomeLayout>
      <h1>{bear.bears}</h1>
      <button onClick={() => bear.increase(bear.bears + 1)}>click me</button>
    </HomeLayout>
  );
}

export default Home;