import React, { useContext } from 'react';
import { BookProvider } from '../../Components/context/BookContext';

const Books = () => {

    

const {storedBooks}=useContext(BookProvider)
console.log(storedBooks)



    return (
        <div>
        <h2>this is a book page</h2>    
        </div>
    );
};

export default Books;