import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Layout from "../../Layout/Layout"

export default function DefaultCarousel() {

    const imageData = [
        {
          label: "Image 1",
          alt: "image1",
          url:
            "https://lh5.googleusercontent.com/xo6zDzj4Mq8JTuh31DRdzWPkmeekU1ykdvy7gmdGNkBnVzHoULgCA_MpL1ybOV2GKEkbvmswUl0iQW0lvnNQe3gqOFi_-bbt3MBzOAla29FvVN753jPZS87Bn7HyXoQ-dwA-ioYg"
        },
        {
          label: "Image 2",
          alt: "image2",
          url:
            "https://cdn.thomasnet.com/insights-images/eaf2ea91-c0ca-488d-ab63-af480b6f78cb/750px.png"
        },
        {
          label: "Image 3",
          alt: "image3",
          url: "https://moneyinc.com/wp-content/uploads/2018/11/Willow-750x500.jpg"
        },
        {
          label: "Image 4",
          alt: "imagedfsf4",
          url:
            "https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBob25lfGVufDB8fDB8fHww&w=1000&q=80"
        }
      ];

      const renderSlides = imageData.map((image) => (
        <div key={image.alt}>
          <img src={image.url} alt={image.alt} />
          
        </div>
      ));

  return (
    <Layout>
            <div className="my-10 min-h-screen">
                <div className="flex-colo gap-5">
                    <div className="flex-rows ">
                        <div className="p-2 rounded-3xl font-medium xs:w-52 md:w-[28rem] lg:w-96 flex flex-row justify-center bg-subMain text-text">
                            <h1 className="tracking-wider text-lg font-md font-sans">All posters</h1>
                        </div>
                    </div>
                    <div className="flex-rows w-1/12">
                        <Carousel
                        showArrows={true}
                        autoPlay={false}
                        infiniteLoop={true}
                        dynamicHeight={true}
                        centerMode={true}
                        className="carousel-container h-full"
                        width={90}
                        >
                        {renderSlides}
                        </Carousel>
                    </div>
                    <div className="flex-rows ">
                        <div className="p-2 rounded-3xl font-medium xs:w-52 md:w-[28rem] lg:w-96 flex flex-row justify-center bg-subMain text-text">
                            <h1 className="tracking-wider text-lg font-md font-sans">All posters</h1>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
  );
}