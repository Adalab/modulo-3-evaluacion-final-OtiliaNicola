
function FilterName({name, setName}) {

    const handleSubmit = (ev) =>{
        ev.predentDefault();
    }

    const handleInputChange = (ev) => {
        setName(ev.target.value);

    }

  return (
    <form onSubmit={handleSubmit} className="form">
        <input className="form_input" type="text" name="search" value={name} onChange={handleInputChange} placeholder="Rick"/>
    </form>  
    )
}

export default FilterName