import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Category from './Category';
import { useGetCategoryToyQuery } from '../../../redux/features/toysApi';
import Loading from '../../../Components/Loading/Loading';

const categories = ['Cars', 'Learn & Play', 'Cuddles', 'Dolls'];
// const SubCategories = ['Cars', 'Learn & Play', 'Cuddles'];

const ShopByCategory = () => {
    const [activeTab, setActiveTab] = useState('Cars');
    const { data: categoryData, isLoading } = useGetCategoryToyQuery(activeTab)

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='py-10 mt-10 container mx-auto'>
            <h3 className='text-center text-4xl font-semibold mb-10'>Shop By Category</h3>
            <Tabs className="mx-auto text-center">
                <TabList className="flex justify-center gap-5 bg-slate-950 p-4 rounded">
                    {categories.map((categoryName, i) => (
                        <Tab
                            key={i}
                            onClick={() => setActiveTab(categoryName)}
                            className={`cursor-pointer px-4 py-2 rounded-t-lg md:font-semibold ${activeTab === categoryName
                                ? 'bg-indigo-500 text-white'
                                : 'text-gray-100'
                                } hover:bg-orange-600 hover:text-white`}
                        >
                            {categoryName}
                        </Tab>
                    ))}
                </TabList>

                <TabPanel>
                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
                        {categoryData.map(data => (
                            <Category category={data} key={data._id}></Category>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
                        {categoryData.map(data => (
                            <Category category={data} key={data._id}></Category>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
                        {categoryData.map(data => (
                            <Category category={data} key={data._id}></Category>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
                        {categoryData.map(data => (
                            <Category category={data} key={data._id}></Category>
                        ))}
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopByCategory;
