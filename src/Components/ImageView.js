import { useState } from "react";

function ImageView() {
    const [value, setValue] = useState(0)

    const handleNext = () => {
        value === 5 ? setValue(0) : setValue(value + 1)
    }

    const handlePrevious = () => {
        
        value === 0 ? setValue(5) : setValue(value - 1)
    }

    const items = {
        "one": "https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBob25lfGVufDB8fDB8fHww&w=1000&q=80",
        "two": "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp",
        "three": "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp",
        "four": "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp",
        "five": "https://images.unsplash.com/photo-1533282960533-51328aa49826?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2lkZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
        "six": "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
    }

    function image(item) {
        return (
            <div className="flex w-1/3 flex-wrap">
                <div className="w-full p-1 md:p-2">
                    <img
                        alt="gallery"
                        className="w-full aspect-[1/1] rounded-xl object-cover my-2 border-[2px] border-green-900"
                        src={item}
                    />
                </div>
            </div>
        )
    }


    return (
        <>
            <div className="container mx-auto py-10 flex-colo">
                <div className="flex-colo">
                    <button
                        data-modal-target="staticModal"
                        data-modal-toggle="staticModal"
                        className="block sm:w-11/12 md:w-11/12 lg:w-9/12 xl:w-8/12 rounded-lg border-[10px] border-darkAccent"
                        type="button"
                    >
                        <img
                            alt="gallery"
                            className="w-full aspect-[1/1] object-cover object-center "
                            src={value === 0 ? items.one : value === 1 ? items.two : value === 2 ? items.three : value === 3 ? items.four : value === 4 ? items.five : items.six}
                        />
                    </button>
                </div>
            </div>


            {/* Images */}
            <div className="container mx-auto px-5 py-2 lg:px-20 xl:px-48 lg:pt-12">
                <div className="-m-1 flex flex-wrap lg:-m-10 bg-darkAccent rounded-xl">
                    {image(items.one)}
                    {image(items.two)}
                    {image(items.three)}
                    {image(items.four)}
                    {image(items.five)}
                    {image(items.six)}
                </div>
            </div>

            {/* Main modal */}
                <div
                    id="staticModal"
                    data-modal-backdrop="static"
                    tabIndex={-1}
                    aria-hidden="true"
                    className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
                >
                    <div className="relative w-full max-w-7xl max-h-full">
                    {/* Modal content */}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        {/* Modal header */}
                        <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Static modal
                        </h3>
                        <button
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-hide="staticModal"
                        >
                            <svg
                            className="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14"
                            >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                            />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        </div>
                        {/* Modal body */}
                        <div className="p-6 space-y-6">
                        

                        {/* **********SLIDERS************** */}
                        <div className="my-10 max-w-full mx-auto z-50">
                            <div
                                id="indicators-carousel"
                                className="relative w-full"
                                data-carousel="static"
                            >
                            {/* Carousel wrapper */}
                                <div className="relative h-96 overflow-hidden rounded-lg md:h-[40rem]">
                                    {/* Item 1 */}
                                    <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
                                        <img
                                            src={items.one}
                                            className="absolute block h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                            alt="..."
                                        />
                                    </div>
                                    {/* Item 2 */}
                                    <div className="hidden duration-700 ease-in-out" data-carousel-item="">
                                        <img
                                            src={items.two}
                                            className="absolute block h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                            alt="..."
                                        />
                                    </div>
                                    {/* Item 3 */}
                                    <div className="hidden duration-700 ease-in-out" data-carousel-item="">
                                        <img
                                            src={items.three}
                                            className="absolute block h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                            alt="..."
                                        />
                                    </div>
                                    {/* Item 4 */}
                                    <div className="hidden duration-700 ease-in-out" data-carousel-item="">
                                        <img
                                            src={items.four}
                                            className="absolute block h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                            alt="..."
                                        />
                                        </div>
                                    {/* Item 5 */}
                                    <div className="hidden duration-700 ease-in-out" data-carousel-item="">
                                        <img
                                            src={items.five}
                                            className="absolute block h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                            alt="..."
                                        />
                                    </div>
                                    {/* Item 6 */}
                                    <div className="hidden duration-700 ease-in-out" data-carousel-item="">
                                        <img
                                            src={items.six}
                                            className="absolute block h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                            alt="..."
                                        />
                                    </div>
                                </div>
                                {/* Slider controls */}
                                <button
                                    type="button"
                                    className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                                    data-carousel-prev=""
                                    onClick={() => handlePrevious()}
                                >
                                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent dark:bg-gray-800/30 group-hover:bg-darkAccent dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                        <svg
                                            className="w-4 h-4 text-text dark:text-gray-800"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 6 10"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 1 1 5l4 4"
                                            />
                                        </svg>
                                        <span className="sr-only">Previous</span>
                                    </span>
                                </button>
                                <button
                                    type="button"
                                    className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                                    data-carousel-next=""
                                    onClick={() => handleNext()}
                                >
                                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent group-hover:bg-darkAccent dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                        <svg
                                            className="w-4 h-4 text-text"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 6 10"
                                        >
                                            <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="m1 9 4-4-4-4"
                                            />
                                        </svg>
                                        <span className="sr-only">Next</span>
                                    </span>
                                </button>
                            </div>
                        </div>                        
                    </div>                    
                </div>
            </div>
            </div>
        </>
    )
}

export default ImageView
