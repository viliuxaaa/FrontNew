import Layout from "../Layout/Layout"
import { useParams } from "react-router-dom";
import AxiosFetch from "../hooks/AxiosFetch";
import PosterInfo from "../Components/Single/PosterInfo";

function SinglePoster() {

    const {id} = useParams();
    const posterInfoURL = "/api/v1/poster/get/" + id;
    
    const [ poster, isLoaded, error] = AxiosFetch(posterInfoURL);
    
    
    // const post = posters.find((post) => post.postName === id);
    return (
        <Layout>
            { error && <p> Error in the fetch</p>}
            { poster && <> 
            <PosterInfo poster={poster} />
            <div className='container mx-auto min-h-screen px-2 my-6'>
                {/* kaskas jau po skelbimo info */}
                Like {' '} share {' '} enjoy {' '}
            </div>
            </> 
            }
        </Layout>
        
    )
}

export default SinglePoster