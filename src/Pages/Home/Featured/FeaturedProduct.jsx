import ToyCard from "../../../Components/Shared/ToyCard";
import { useGetFeaturesToysQuery } from "../../../redux/features/toysApi";

const FeaturedProduct = () => {
    const { data: toys, isLoading, } = useGetFeaturesToysQuery()
    if (isLoading) {
        return <p>loading...</p>
    }
    return (
        <section className="py-16 px-4 container mx-auto">
            <h2 className="text-4xl text-center font-bold mb-12">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                    toys.map(toy => <ToyCard key={toy._id} toy={toy} />)
                }
            </div>
        </section>

    );
};

export default FeaturedProduct;