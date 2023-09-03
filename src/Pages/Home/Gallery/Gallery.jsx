
const Gallery = () => {

    return (
        <div className="container mx-auto bg-[#3A454D]">
            <h2 className="text-center text-4xl my-10 font-semibold ">Gallary</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 container mx-auto">
            <div className="grid gap-4">
                <div>
                    <img className="h-full max-w-full rounded-lg" src="https://i.ibb.co/Y8RRNCR/david-maltais-BCKg-Fz-Jbwz4-unsplash.jpg" alt="" />
                </div>
                <div>
                    <img className="h-full  max-w-full rounded-lg" src="https://media.istockphoto.com/id/157374711/photo/yellow-cab.jpg?s=612x612&w=0&k=20&c=nJfT8Qo0sbb8CkgrzL7FNXufw7339SIYdsEClL0_gOc=" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="" />
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9cOanfE8frPHq5LOebZkDNzqNzSwwJcwcgA&usqp=CAU" alt="" />
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt="" />
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1609708536965-6e5b915b195b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG95JTIwY2FyfGVufDB8fDB8fHww&w=1000&q=80" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://png.pngtree.com/thumb_back/fh260/background/20221016/pngtree-taxi-car-vintage-object-auto-photo-image_4228102.jpg" alt="" />
                </div>
            </div>
        </div>
        </div>
    );
};

export default Gallery;