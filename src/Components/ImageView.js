
import { Carousel } from "react-responsive-carousel";
import PosterImgModal from "./Modals/PosterImgModal";
import { useEffect, useState } from "react";
import AxiosFetch from "../hooks/AxiosFetch";


function ImageView( {poster} ) {
    const [modalOpen, setModalOpen] = useState(false);
    const [img, setImg] = useState(null);
    const getPosterImg = `/api/v1/images/poster/get/${poster.posterId}/` 
    const [image0, isPending, error] = AxiosFetch(getPosterImg + `0`);

    const propertyCount = Object.keys(poster.images).length;
    const itemElements = [];

    console.log(poster)
    console.log( image0 )
    useEffect(() => {
      if(modalOpen === false){
        setImg();
      }
    },[modalOpen])

    for (let i = 0; i < propertyCount; i++) {
      itemElements.push(
        <div key={i + " position"} onClick={() => {
          setImg(
              {label: "Image 1", alt: "image1", url: getPosterImg + i}
            ); 
          setModalOpen(true);
        }} >
          <img  src={getPosterImg + i} alt={`${i} position`} className="w-full aspect-[1/1] object-cover my-2" />
        </div>        
      );
    }

    console.log(getPosterImg + `0`)


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
                          {itemElements}
                        </Carousel>
                    </div>
                </div>
            </div>                  
        </>
    )
}

export default ImageView