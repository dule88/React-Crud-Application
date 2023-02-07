import './List.css';




const List = ({persons, deletePerson, setEditMode}) => {
    

    // FUNCTION FOR BUTTON to go in Edit mode
    const editMode = (idx) => {
        setEditMode(
            {mode: true,
            id: persons[idx].id, 
            name: persons[idx].name, 
            lastName: persons[idx].lastName, 
            years: persons[idx].years, 
            idx: idx
        })
    }


  return (
    
    <table className="container table">

        <thead>
        <tr>
        <th scope="col">ID</th>
        <th scope="col">Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Years</th>
        <th scope="col">Edit</th>
        <th scope="col">Delete</th>
        </tr>
    </thead>
    <tbody>
        {persons.map((person, idx) => {
            return (
                <tr key={person.id}>
            <th scope="row">{person.id}</th>
            <td>{person.name}</td>
            <td>{person.lastName}</td>
            <td>{person.years}</td>
            <td><button type="button" className="btn btn-outline-success" onClick={() => editMode(idx)}>Edit</button></td>
            <td><button type="button" className="btn btn-outline-danger" onClick={() => deletePerson(person.id)}>X</button></td>
        </tr>
            )
        })}

        
        </tbody>

    </table>

  )
}

export default List;
