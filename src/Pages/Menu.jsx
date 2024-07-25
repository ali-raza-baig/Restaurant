import { useState } from 'react';
import { data } from '../Data.jsx'
import Layout from '../Components/Layout/Layout.jsx';


const Menu = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const filterItems = (category) => {
        setSelectedCategory(category);
    };

    const filteredData = selectedCategory === 'all'
        ? data
        : data.filter(item => item.category === selectedCategory);

    return (
        <Layout>
            <div className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center text-4xl" style={{ backgroundImage: 'url("/img/frame4.png")', height: 400 }}>
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                    <div className="flex h-full items-center justify-center">
                        <div className="text-white">
                            <h2 className="mb-4 text-4xl font-semibold">Menu</h2>

                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto p-4">
                <div className="flex justify-center mb-4">
                    <button onClick={() => filterItems('all')} className="mx-2 px-4 py-2 underline text-2xl">All</button>
                    <button onClick={() => filterItems('Drink')} className="mx-2 px-4 py-2 underline text-2xl">Drink</button>
                    <button onClick={() => filterItems('Dessert')} className="mx-2 px-4 py-2 underline text-2xl">Dessert</button>
                    {/* Add more buttons as needed */}
                </div>

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">

                        <tbody>
                            {filteredData.map(p => (
                                <tr key={p.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="p-4 flex">
                                        <img src={p.image} className="w-20 md:w-40 max-w-full max-h-full" alt="Apple Watch" />
                                        <div className="details mx-5">
                                            <div className="Name font-black">{p.name}</div>
                                            <div className="description">{p.description}</div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                        ${p.price}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>


            <div className="relative mb-10 mt-5 overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center text-4xl" style={{ backgroundImage: 'url("/img/frame4.png")', height: 400 }}>
                <div className="absolute  bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                    <div className="text-white ">
                        <div className="flex flex-wrap m-4 text-center">
                            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                                <div className="px-4 py-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill='white' stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className=" w-12 h-12 mb-3 inline-block" viewBox="0 0 576 512">
                                        <path d="M240 144A96 96 0 1 0 48 144a96 96 0 1 0 192 0zm44.4 32C269.9 240.1 212.5 288 144 288C64.5 288 0 223.5 0 144S64.5 0 144 0c68.5 0 125.9 47.9 140.4 112l71.8 0c8.8-9.8 21.6-16 35.8-16l104 0c26.5 0 48 21.5 48 48s-21.5 48-48 48l-104 0c-14.2 0-27-6.2-35.8-16l-71.8 0zM144 80a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM400 240c13.3 0 24 10.7 24 24l0 8 96 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-240 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l96 0 0-8c0-13.3 10.7-24 24-24zM288 464l0-112 224 0 0 112c0 26.5-21.5 48-48 48l-128 0c-26.5 0-48-21.5-48-48zM48 320l80 0 16 0 32 0c26.5 0 48 21.5 48 48s-21.5 48-48 48l-16 0c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-80c0-8.8 7.2-16 16-16zm128 64c8.8 0 16-7.2 16-16s-7.2-16-16-16l-16 0 0 32 16 0zM24 464l176 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 512c-13.3 0-24-10.7-24-24s10.7-24 24-24z" /></svg>
                                    <h2 className="title-font font-medium text-4xl">2.7K</h2>
                                    <p className="leading-relaxed text-xl">Chefs</p>
                                </div>
                            </div>
                            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                                <div className="px-4 py-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill='white' stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className=" w-12 h-12 mb-3 inline-block" viewBox="0 0 512 512">
                                        <path d="M61.1 224C45 224 32 211 32 194.9c0-1.9 .2-3.7 .6-5.6C37.9 168.3 78.8 32 256 32s218.1 136.3 223.4 157.3c.5 1.9 .6 3.7 .6 5.6c0 16.1-13 29.1-29.1 29.1L61.1 224zM144 128a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm240 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32zM272 96a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM16 304c0-26.5 21.5-48 48-48l384 0c26.5 0 48 21.5 48 48s-21.5 48-48 48L64 352c-26.5 0-48-21.5-48-48zm16 96c0-8.8 7.2-16 16-16l416 0c8.8 0 16 7.2 16 16l0 16c0 35.3-28.7 64-64 64L96 480c-35.3 0-64-28.7-64-64l0-16z" /></svg>
                                    <h2 className="title-font font-medium text-4xl">1.3K</h2>
                                    <p className="leading-relaxed text-xl">Items of Food</p>
                                </div>
                            </div>
                            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                                <div className="px-4 py-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill='white' stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className=" w-12 h-12 mb-3 inline-block" viewBox="0 0 448 512">
                                        <path d="M416 0C400 0 288 32 288 176l0 112c0 35.3 28.7 64 64 64l32 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 0-112 0-208c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7L80 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224.4c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16l0 134.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8L64 16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z" /></svg>
                                    <h2 className="title-font font-medium text-4xl">74</h2>
                                    <p className="leading-relaxed text-xl">Years Of Experinced</p>
                                </div>
                            </div>
                            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                                <div className="px-4 py-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill='white' stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className=" w-12 h-12 mb-3 inline-block" viewBox="0 0 512 512">
                                        <path d="M169.7 .9c-22.8-1.6-41.9 14-47.5 34.7L110.4 80c.5 0 1.1 0 1.6 0c176.7 0 320 143.3 320 320c0 .5 0 1.1 0 1.6l44.4-11.8c20.8-5.5 36.3-24.7 34.7-47.5C498.5 159.5 352.5 13.5 169.7 .9zM399.8 410.2c.1-3.4 .2-6.8 .2-10.2c0-159.1-128.9-288-288-288c-3.4 0-6.8 .1-10.2 .2L.5 491.9c-1.5 5.5 .1 11.4 4.1 15.4s9.9 5.6 15.4 4.1L399.8 410.2zM176 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64 128a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM96 384a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" /></svg>
                                    <h2 className="title-font font-medium text-4xl">46</h2>
                                    <p className="leading-relaxed text-xl">Happay Customers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Menu;
