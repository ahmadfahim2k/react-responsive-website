function Card(
    { item = {
            "id": 1,
            "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            "price": 109.95,
            "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            "rating": {
                "rate": 3.9,
                "count": 120
            }
        } 
    }) {

    return (
        <>
            <div className='m-6 h-72 w-72 overflow-hidden rounded-lg flex flex-col justify-start shadow-custom cursor-pointer select-none'>
                <figure 
                    className='relative w-full overflow-hidden shadow-custom-inset after:absolute after:bottom-0 
                    after:ml-2.5 after:px-2 after:py-1.5 
                    after:text-lg after:font-semibold after:text-white 
                    after:bg-[#3a8328b5] after:box-border
                    after:max-w-[95%]
                    after:content-[attr(data-category)]
                    ' 
                    data-category={item.price}
                    >
                    <img
                        className='block w-full max-w-full h-full max-h-full
                        object-cover scale-75 
                        transition-all duration-200 ease-linear 
                        hover:scale-90
                        '
                        alt={item.image}
                        src={item.image}
                    />
                </figure>
                <div className='pt-5 pb-4 px-4'>
                    <h5 className='text-[#252e48] text-xl'>{item.title}</h5>
                </div>
            </div>
        </>
    )
}

export default Card;