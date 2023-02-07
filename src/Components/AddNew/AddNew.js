import './AddNew.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


const AddNew = ({persons, setPersons}) => {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [years, setYears] = useState('');

    // FUNCTION FOR ADD PERSONS INTO THE TABLE
    const formSubmit = (event) => {
        event.preventDefault();

        let newstate = {
          id: uuidv4(),
          name: name,
          lastName: lastName,
          years: years
        }
        setPersons(prevState => [...prevState, newstate])

        setName('');
        setLastName('');
        setYears('');  
        event.target.name.focus();
        

// FIRST SOLUTION FOR ADD FUNCTION
        // const tempPerson = {
        //     id: uuidv4(),
        //       name: name,
        //       lastName: lastName,
        //       years: years
        // };
        // setPersons([...persons, tempPerson]);
    }


  return (
    <div className="mt-3 addData">
        <h2 className='text-primary'>Add Data</h2>
        <form className="row g-3 m-3" onSubmit={formSubmit}>

  <div className="col-md-4">
    <label className="form-label">First Name</label>
    <div>
      <input type="text" name='name' value={name} onChange={(event) => setName(event.target.value)} className="form-control"/>
    </div>
  </div>

  <div className="col-md-4">
    <label className="form-label">Last Name</label>
    <div>
      <input type="text" value={lastName} onChange={(event) => setLastName(event.target.value)} className="form-control"/>
    </div>
  </div>

  <div className="col-md-4">
    <label className="form-label">Years</label>
    <div>
      <input type="number" value={years} onChange={(event) => setYears(event.target.value)} className="form-control" min="18" max="100" required/>
    </div>
  </div>
  
  <div className="col-12">
    <button className="btn btn-outline-primary">Add Person</button>
  </div>
</form>
    </div>
  )
}

export default AddNew;