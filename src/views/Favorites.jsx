
function Favorites() {


    return (
        <div style={divStyle}>
            <select className="form-select" aria-label="Default select example" style={selectStyle}>
                <option selected>Sort by</option>
                <option value="1">Importation Date</option>
                <option value="2">Width</option>
                <option value="3">Height</option>
                <option value="4">Likes</option>
            </select>
        </div>
    )
}

export default Favorites

const divStyle = {
    backgroundColor: '#ECE6F0',
    height: '75.3vh',
    display: 'flex',          // Activa Flexbox
    justifyContent: 'center', // Centra horizontalmente

}

const selectStyle = {
    width: '240px',
    height: '40px',
    margin: '15px',
    backgroundColor: '#FFFFFF',
    border: '1px solid #D9D9D9',
    borderRadius: '8px',
    padding: '10px',
    fontSize: '16px',
    textAlign: 'center',
}