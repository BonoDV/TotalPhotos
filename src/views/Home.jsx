import Photo from "../components/Photo";
import { useSelector } from 'react-redux';
import '../styles/Home.css';

function Home() {
    const { photosData, loading, error } = useSelector((state) => state.search);

    if (loading) return <div className="loading">Loading...</div>;
    if (error) return <div className="error">Error: {error}</div>;

    return (
        <div className='homeDiv'>
            {photosData?.results?.map(photo => (
                <Photo
                    id={photo.id}
                    url={photo.urls?.regular}
                    description={photo.description}
                    width={photo.width}
                    height={photo.height}
                    likes={photo.likes}
                    title={photo.description || 'No Description'} />
            ))}
        </div>
    );
}

export default Home;