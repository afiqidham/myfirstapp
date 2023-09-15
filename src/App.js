// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Clock from './components/Clock';
import Blog from './components/Blog';
import Post from './components/Post';
import Form from './components/Form';
import Search from './components/Search';
import BookList from './components/BookList';

function App() {
  // const [flag, setFlag] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  const user = {
    firstname: "Afiq", 
    lastname: "Idham",
  };

  const books = [
    {
      "id": 1,
      "title": "The Great Gatsby",
    },
    {
      "id": 2,
      "title": "To Kill a Mockingbird",
    },
    {
      "id": 3,
      "title": "Jane Eyre",
      
    },
    {
      "id": 4,
      "title": "Beloved",
      
    },
    {
      "id": 5,
      "title": "One Hundred Years of Solitude",
      
    },
    {
      "id": 6,
      "title": "doloremque officiis ad et non perferendis",
      
    },
    {
      "id": 7,
      "title": "The Color Purple",
    
    },
    {
      "id": 8,
      "title": "Things Fall Apart",
     
    },
    {
      "id": 9,
      "title": "Don Quixote",
      
    },
    {
      "id": 10,
      "title": "Terrace Story: A Novel",
      
    }
  ];

  const filterList = books.filter((item) => {
    return item.title.toLowerCase().includes(searchTerm);
  });

  return(
  <div>
    <Search searchTerm = {searchTerm} handleSearch={handleSearch}/>
    <BookList bookList={filterList}/>
    </div>
    
    );

}

export default App;
