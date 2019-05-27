import React from 'react' ; 

const Searchbox = ({Searchfield , searchChange}) => {
    return(
        <div className='p2'>
            
                <input className='p3 ba b--light-blue bg-light-green'
                type='search'
                
                onChange = {searchChange}
                placeholder='Search For A Friend' 
                /> 

        </div>
    );
}
export default Searchbox;