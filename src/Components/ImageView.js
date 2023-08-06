
import { Carousel } from "react-responsive-carousel";
import PosterImgModal from "./Modals/PosterImgModal";
import { useState } from "react";


function ImageView() {
    const [modalOpen, setModalOpen] = useState(false);

    const imageData = [
        {
          label: "Image 1",
          alt: "image1",
          url:
          "https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBob25lfGVufDB8fDB8fHww&w=1000&q=80"
        },
        {
          label: "Image 2",
          alt: "image2",
          url:
          "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp"
        },
        {
          label: "Image 3",
          alt: "image3",
          url: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
        },
        {
          label: "Image 4",
          alt: "imagedfsf4",
          url:
            "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
        },
        {
            label: "Image 5",
            alt: "image5",
            url: "https://images.unsplash.com/photo-1533282960533-51328aa49826?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2lkZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
        },
        {
            label: "Image 6",
            alt: "image6",
            url: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
        }
      ];

    const renderSlides = imageData.map((image) => (
        <div key={image.alt} onClick={() => setModalOpen(true)}>
          <img src={image.url} alt={image.alt} className="w-full aspect-[1/1] object-cover my-2" />
          
        </div>
      ));


    return (
        <> 
          <PosterImgModal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
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
                          {renderSlides}
                        </Carousel>
                    </div>
                </div>
            </div>                  
        </>
    )
}

export default ImageView