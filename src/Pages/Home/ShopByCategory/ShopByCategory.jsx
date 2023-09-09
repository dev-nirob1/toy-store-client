import { useEffect } from 'react';
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Category from './Category';

const SubCategories = ['Racing Cars', 'Vintage Cars', 'Police Cars']
const ShopByCategory = () => {
    const [activeTab, setActiveTab] = useState('Racing Cars')
    const [categoryData, SetCategoryData] = useState([])
    useEffect(() => {
        fetch(`https://toy-store-server-blond.vercel.app/toys/category/${activeTab}`)
            .then(res => res.json())
            .then(data => SetCategoryData(data))
    }, [activeTab])
    return (
        <div className='py-10 mt-10 bg-[#3A454D] container mx-auto'>
            <h3 className='text-center text-5xl font-semibold mb-10 text-white'>Shop By Category</h3>
            <Tabs className="w-11/12 mx-auto text-center">
                <TabList className={`text-white`}>
                    {SubCategories.map((categoryName, i) => <Tab key={i}
                        onClick={() => setActiveTab(categoryName)}>
                        {categoryName}
                    </Tab>)}
                </TabList>

                <TabPanel>
                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
                        {categoryData.map(data => <Category category={data} key={data._id}></Category>)}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
                        {categoryData.map(data => <Category category={data} key={data._id}></Category>)}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
                        {categoryData.map(data => <Category category={data} key={data._id}></Category>)}
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopByCategory;