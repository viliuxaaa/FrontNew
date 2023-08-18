
import { Carousel } from "react-responsive-carousel";
import PosterImgModal from "./Modals/PosterImgModal";
import { useEffect, useState } from "react";



function ImageView( {poster} ) {
    const [modalOpen, setModalOpen] = useState(false);
    const [img, setImg] = useState(null);
    const getPosterImg = `/api/v1/images/poster/get/${poster.posterId}/` 
    

    const propertyCount = Object.keys(poster.images).length;
    const itemElements = [];

    
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

    return (
        <> 
          <PosterImgModal modalOpen={modalOpen} setModalOpen={setModalOpen} img={img}/>
            <div className="my-10">
                <div className="flex-colo">

                    <div className="flex-rows min-h-full w-3/5 lg:w-4/5">
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