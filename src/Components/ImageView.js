
import { Carousel } from "react-responsive-carousel";
import PosterImgModal from "./Modals/PosterImgModal";
import { useEffect, useState } from "react";
import AxiosFetch from "../hooks/AxiosFetch";


function ImageView( {poster} ) {
    const [modalOpen, setModalOpen] = useState(false);
    const [img, setImg] = useState(null);
    const getPosterImg = `api/v1/images/poster/get/${poster.posterId}/` 
    const [image0, isPending, error] = AxiosFetch(getPosterImg + `0`);

    console.log(poster)
    console.log( image0 )
    useEffect(() => {
      if(modalOpen === false){
        setImg();
      }
    },[modalOpen])

    // const renderSlides = images.map((image) => (
    //     <div key={image.alt} onClick={() => {
    //       setImg(image); 
    //       setModalOpen(true);
    //   }} >
    //       <img src={image.url} alt={image.alt} className="w-full aspect-[1/1] object-cover my-2" />
          
    //     </div>
    //   ));


    return (
        <> 
          <PosterImgModal modalOpen={modalOpen} setModalOpen={setModalOpen} img={img}/>
            <div className="my-10">
                <div className="flex-colo">

                    <div className="flex-rows w-1/6 lg:w-4/6">
                          <Carousel
                          showArrows={false}
                          autoPlay={false}
                          infiniteLoop={true}
                          dynamicHeight={true}
                          centerMode={false}
                          className="carousel-container"
                          
                          >

                          {  image0 &&
                            <div key={image0.alt} onClick={() => {
                            setImg(image0); 
                            setModalOpen(true);
                        }} >
                            <img src={image0} alt="0-pic" className="w-full aspect-[1/1] object-cover my-2" />
                            
                          </div>}
                          
                        </Carousel>
                    </div>
                </div>
            </div>                  
        </>
    )
}

export default ImageView