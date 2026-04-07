import React, { useContext } from 'react';
import { BookProvider } from '../../Components/context/BookContext';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from '../../Components/listedLists/ListedReadList';
import WishedLists from '../../Components/listedLists/WishedLists';

const Books = () => {

    



    return (
       <>
       <div>
        <Tabs>
    <TabList>
      <Tab>Read List</Tab>
      <Tab>Wish List</Tab>
    </TabList>

    <TabPanel>
{/* came from listedreadlist */}
      <ListedReadList/>

    </TabPanel>
    <TabPanel>
{/* came from wishedlists */}
     <WishedLists/>

    </TabPanel>
  </Tabs> 
  </div> 
       </>
    );
};

export default Books;