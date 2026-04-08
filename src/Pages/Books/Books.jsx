import React, { useContext, useState } from 'react';
import { BookProvider } from '../../Components/context/BookContext';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from '../../Components/listedLists/ListedReadList';
import WishedLists from '../../Components/listedLists/WishedLists';

const Books = () => {

    const [sortingType, setSortIngType]= useState('')


    return (
       <>
       <div className='flex justify-center my-3'>
       <div className="dropdown dropdown-start">
  <div tabIndex={0} role="button" className="btn m-1">Sort by : {sortingType} ⬇️</div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li onClick={()=>setSortIngType('Pages')}><a>Pages</a></li>
    <li onClick={()=>setSortIngType('Rating')}><a>Rating</a></li>
  </ul>
</div>
</div>
       <div>
        <Tabs>
    <TabList>
      <Tab>Read List</Tab>
      <Tab>Wish List</Tab>
    </TabList>

    <TabPanel>
{/* came from listedreadlist */}
      <ListedReadList sortingType={sortingType}/>

    </TabPanel>
    <TabPanel>
{/* came from wishedlists */}
     <WishedLists sortingType={sortingType}/>

    </TabPanel>
  </Tabs> 
  </div> 
       </>
    );
};

export default Books;