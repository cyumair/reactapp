import React from 'react' ; 
import Card from './Card';
const CardList = ({ Friends }) =>{
    return(
       
                Friends.map(( user , i ) => {
                    return(
                       < Card 
                         key={ i }
                         id={ Friends[i].id }
                         name={ Friends[i].name }
                         instagram={ Friends[i].instagram }
                         />                     
                    );
                }
                )
        
    );
 }
export default CardList;