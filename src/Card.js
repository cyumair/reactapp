import React  from 'react' ;


const Card = ( {id , instagram , name} ) => {
    return (<div className='bg-dark-gray dib br3 pa3 ma2 grow bw2 shadow-5 items-center tc grow'>
        <img className='size' alt='img of a bot' src={`https://robohash.org/${id}?250x300`} />
        <div className='yellow'>
            <h2>{name}</h2>
            <p>{instagram}</p>
        </div>
    </div>);
}
export default Card ; 