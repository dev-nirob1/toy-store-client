
const Gallery = () => {

    return (
        <div className="container mx-auto my-10 bg-gray-100">
            <h2 className="text-center text-4xl py-10 font-semibold ">Our Photo Gallary</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 container mx-auto">
                <div className="grid gap-4">
                    <div>
                        <img className="h-full max-w-full rounded-lg" src="https://i.ibb.co/Jmq4Gjw/car1.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-full  max-w-full rounded-lg" src="https://i.ibb.co/FwWVkxL/vintage-2.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/mGh5fmf/yellowcar.jpg" alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/5FDpfz2/car2.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/ZGPyqrn/buss.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/sHgjYz5/pexels-igor-photic-3801089-1.jpg" alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/YTWJF7P/buss2-1-1-2.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/JBMrFJ3/police-1.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/nMcF1Nh/police1-1.jpg" alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/tpB2kyX/racingcar-1.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/FwWVkxL/vintage-2.jpg" alt="" />
                    </div>

                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/HXTrGR1/truck-2.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;