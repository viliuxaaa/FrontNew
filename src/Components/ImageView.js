import { useState } from "react";
import { Carousel } from 'flowbite-react';
import { Button, Modal } from 'flowbite-react';

function ImageView() {
    const [openModal, setOpenModal] = useState()
    const props = { openModal, setOpenModal }

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
                            src={items.one}
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

            <>
            <Button onClick={() => props.setOpenModal('dismissible')} className="text-text border border-text">Toggle modal</Button>

            <Modal dismissible show={props.openModal === 'dismissible'} size={"2xl"} onClose={() => props.setOpenModal(undefined)} className="max-w-7xl">
                <Modal.Header>Terms of Service</Modal.Header>
                <Modal.Body className="">
                    <div className="space-y-6">
                        <Carousel className="h-2/5">
                                <img
                                    alt="..."
                                    src="/images/1.jpg"
                                />
                                <img
                                    alt="..."
                                    src="/images/2.jpg"
                                />
                                <img
                                    alt="..."
                                    src="/images/3.jpg"
                                />
                                <img
                                    alt="..."
                                    src="/images/4.jpg"
                                />
                                <img
                                    alt="..."
                                    src="/images/5.jpg"
                                />
                            </Carousel>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                <Button onClick={() => props.setOpenModal(undefined)}>I accept</Button>
                <Button color="gray" onClick={() => props.setOpenModal(undefined)}>
                    Decline
                </Button>
                </Modal.Footer>
            </Modal>
            </>                       
        </>
    )
}

export default ImageView