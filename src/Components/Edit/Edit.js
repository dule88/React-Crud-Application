import './Edit.css';
import { useState, useEffect } from "react";
import './Edit.css';
const Edit = ({persons, setPersons, editMode, setEditMode}) => {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [years, setYears] = useState('');


    useEffect(() => {
        setName(editMode.name);
        setLastName(editMode.lastName);
        setYears(editMode.years); 
    },[])
    
    // FUNCTION FOR EDITING DATA IN TABLE
    const edit = () => {
        let tempPersons = [...persons];

        tempPersons.forEach((person, idx) => {
            if(editMode.id === person.id) {
                tempPersons[idx].name = name;
                tempPersons[idx].lastName = lastName;
                tempPersons[idx].years = years;
            }
        });

        setPersons([...tempPersons]);

        exitEditMode();
    }

    // FUNCTION THAT EXISTS THE EDIT MODE
    const exitEditMode = () => {
        setEditMode({mode: false, id: '', name: '', lastName: '', years: null, idx: null});
        setName('');
        setLastName('');
        setYears(''); 
    }

  return (
    
    <div className="mt-3 editData">
        <h2 className="text-success">Edit Data</h2>
        <form className="row g-3 m-3">

  <div className="col-md-4">
    <label className="form-label">First Name</label>
    <div>
      <input type="text" value={name} onChange={(event) => setName(event.target.value)} className="form-control"/>
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
    <button className="btn btn-outline-success mx-2"  onClick={edit}>Edit Person</button>
    <button className="btn btn-outline-danger"  onClick={exitEditMode}>Back</button>
  </div>
    
</form>
    </div>
  )
}



export default Edit;