import Loading from "../../../Components/Loading/Loading";
import ToyCard from "../../../Components/Shared/ToyCard";
import Title from "../../../Components/Title";
import { useGetFeaturesToysQuery } from "../../../redux/features/toysApi";

const FeaturedProduct = () => {
    const { data: toys, isLoading, } = useGetFeaturesToysQuery()
    
    if (isLoading) {
        return <Loading />
    }
    return (
        <section className="px-3 container mx-auto">

            <div className="text-center">
                <Title title="Featured Products" />

            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                    toys.map(toy => <ToyCard key={toy._id} toy={toy} />)
                }
            </div>
        </section>

    );
};

export default FeaturedProduct;