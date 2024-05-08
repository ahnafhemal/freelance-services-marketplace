import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const TabCategories = () => {
  return (
    <Tabs>
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">
          Browse Jobs By Categories
        </h1>
        <p className="max-w-2xl mx-2 lg:mx-64 my-6 text-center text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          assumenda culpa magni voluptates commodi eveniet consequatur dolorum,
          blanditiis dignissimos ipsum autem officiis ullam odit cumque.
        </p>
        <div className="flex items-center justify-center font-bold">
          <TabList>
            <Tab>Web Development</Tab>
            <Tab>Graphic Design</Tab>
            <Tab>Digital Marketing Digital Marketing</Tab>
          </TabList>
        </div>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default TabCategories;
