import { useLoaderData } from "react-router-dom";
import Carousel from "../../Components/Carousel";
import TabCategories from "../../Components/TabCategories";

const Home = () => {
  const jobs = useLoaderData();
  return (
    <div>
      <Carousel></Carousel>
      <TabCategories jobs={jobs}></TabCategories>
    </div>
  );
};

export default Home;
