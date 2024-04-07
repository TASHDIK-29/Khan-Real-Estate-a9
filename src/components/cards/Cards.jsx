import React from 'react';
import Card from '../card/Card';

const Cards = ({ data }) => {
    console.log(data);

    return (
        <div className='text-center mt-12 mb-6 p-6'>
            <p className='text-lg font-bold'>Our Featured Properties For Sale and Rent</p>
            <h1 className='text-3xl font-bold'>Properties For Sale & Rent</h1>
            <div className='grid grid-cols-3 gap-4 mt-6'>
                {
                    data.map(item => <Card item={item} key={item.id}></Card>)
                }
            </div>
        </div>
    );
};

export default Cards;