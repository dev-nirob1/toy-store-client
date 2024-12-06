import useTitle from '../../Hooks/useTitle';
import { FaSearch } from 'react-icons/fa';
import { useGetToysQuery } from '../../redux/features/toysApi';
import ToyCard from '../../Components/Shared/ToyCard';
import Loading from '../../Components/Loading/Loading';
import { useState } from 'react';

const AllToys = () => {
    useTitle('All Toys')
    const [search, setSearch] = useState('')
    const { data: toys, isLoading, } = useGetToysQuery()

    const searchedToys = toys?.filter(toy => {
        return toy.toyName.toLowerCase().includes(search.toLowerCase())
    })

    const handleSearchField = (e) => {
        setSearch(e.target.value)
    }
    if (isLoading) {
        return <Loading />
    }
    return (

        <div className='container mx-auto my-10 mt-2'>
            <div className="text-center my-10">
                <div className="flex items-center w-1/2 mx-auto border rounded-lg">
                    <span className="px-2">
                        <FaSearch />
                    </span>
                    <input
                        onChange={handleSearchField}
                        value={search}
                        type="text"
                        placeholder="Search by Toy Name..."
                        className="px-4 py-2 w-full rounded-lg focus:outline-none"
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                    searchedToys?.length > 0 ? (
                        searchedToys.map(toy => <ToyCard key={toy._id} toy={toy} />)
                    ) : (
                        <div className="col-span-full text-center text-gray-500">
                            No toys found matching your search.
                        </div>
                    )
                }
            </div>

        </div>

    );
};

export default AllToys;