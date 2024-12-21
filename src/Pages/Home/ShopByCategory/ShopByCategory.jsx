import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Category from './Category';
import { useGetCategoryToyQuery } from '../../../redux/features/toysApi';
import Loading from '../../../Components/Loading/Loading';
import Title from '../../../Components/Title';

const categories = ['Cars', 'Learn & Play', 'Dolls'];

const ShopByCategory = () => {
    const [activeTab, setActiveTab] = useState('Cars');
    const { data: categoryData, isLoading } = useGetCategoryToyQuery(activeTab);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className='px-3 container mx-auto'>
            <div className='text-center mb-12'>
                <Title title="Shop By Category" />
            </div>
            <Tabs
                selectedIndex={categories.indexOf(activeTab)}
                onSelect={(index) => setActiveTab(categories[index])}
                className="text-center"
            >
                <TabList className="flex justify-center gap-5 bg-slate-950 p-4 rounded whitespace-nowrap">
                    {categories.map((categoryName, i) => (
                        <Tab
                            key={i}
                            className={`cursor-pointer px-4 py-2 rounded-t-lg md:font-semibold ${activeTab === categoryName
                                    ? 'bg-indigo-500 text-white'
                                    : 'text-gray-100'
                                } hover:bg-orange-600 hover:text-white`}
                        >
                            {categoryName}
                        </Tab>
                    ))}
                </TabList>

                {categories.map((categoryName, i) => (
                    <TabPanel key={i}>
                        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
                            {categoryData && categoryData.length > 0 ? (
                                categoryData.map((data) => (
                                    <Category category={data} key={data._id} />
                                ))
                            ) : (
                                <p className='mt-10 text-center w-full col-span-3 text-sm md:text-lg font-medium text-slate-800'>Oops! No toys available in this category at the moment.</p>
                            )}
                        </div>
                    </TabPanel>
                ))}
            </Tabs>
        </div>
    );
};

export default ShopByCategory;
