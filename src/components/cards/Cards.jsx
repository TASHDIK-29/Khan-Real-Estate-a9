import Card from '../card/Card';

const Cards = ({ data }) => {
    console.log(data);

    return (
        <div className='text-center mt-12 mb-6 p-6'>
            <h1 className='text-4xl font-bold'>Properties For Sale & Rent</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
                {
                    data.map(item => <Card item={item} key={item.id}></Card>)
                }
            </div>
        </div>
    );
};

export default Cards;