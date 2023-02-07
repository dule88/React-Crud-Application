import './App.css';
import { useState } from 'react';
import Pagination from './Components/Pagination/Pagination';

import { v4 as uuidv4 } from 'uuid';
import List from './Components/List/List';
import AddNew from './Components/AddNew/AddNew';
import Edit from './Components/Edit/Edit';


const App = () => {

const [editMode, setEditMode] = useState({mode: false, id: '', name: '', lastName: '', years: null, idx: null});
const [persons, setPersons] = useState([


  {
  id: uuidv4(),
  name: 'Marko',
  lastName: 'Markovic',
  years: 31
  },

  {
    id: uuidv4(),
    name: 'Sloba',
    lastName: 'Slobic',
    years: 41
  },

  {
  id: uuidv4(),
  name: 'Jovan',
  lastName: 'Jovanovic',
  years: 39
  }

]);

// FUNCTION THAT DELETE DATA FROM THE TABLE
const deletePerson = (id) => {
  setPersons(persons.filter((person) => person.id !== id));
};

const [currentPage, setCurrentPage] = useState(1);
const [personPerPage] = useState(5);

// GET CURRENT DATA
const indexOfLastPerson = currentPage * personPerPage;
const indexOfFirstPerson = indexOfLastPerson - personPerPage;
const currentPersons = persons.slice(indexOfFirstPerson, indexOfLastPerson);

// CHANGE PAGE
const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      {
        !editMode.mode ?
        <AddNew persons={persons} setPersons={setPersons}/>
        :
        <Edit persons={persons} setPersons={setPersons} editMode={editMode} setEditMode={setEditMode}/>
      }
       
      <List persons={currentPersons} setEditMode={setEditMode} deletePerson={deletePerson}/>
      <Pagination 
      personPerPage={personPerPage} 
      totalPersons={persons.length} 
      paginate={paginate}/>
      
    </div>
  );
}

export default App;
