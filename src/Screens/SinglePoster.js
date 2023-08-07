import Layout from "../Layout/Layout"
import { useParams } from "react-router-dom";
import { posters } from "../Data/PosterData";
import PosterInfo from "../Components/Single/PosterInfo";

function SinglePoster() {
    const {id} = useParams();
    const post = posters.find((post) => post.postName === id);
    return (
        <Layout>
            <PosterInfo post={post} />
            <div className='container mx-auto min-h-screen px-2 my-6'>
                {/* kaskas jau po skelbimo info */}
                Like {' '} share {' '} enjoy {' '}
            </div>
        </Layout>
    )
}

export default SinglePoster