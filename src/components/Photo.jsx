import '../styles/Photo.css'

function Photo(props) {
    return (
        <div className='photoDiv'>
            <img src={props.url} alt={props.title} />
        </div>
    )
}

export default Photo