import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    return (
        <div>
           {
            robots.map((user, id) => {
                return (
                    <Card 
                        key={id} 
                        id={robots[id].id} 
                        name={robots[id].name} 
                        email={robots[id].email}
                    />
                );
            })
           } 
        </div>
    );
}


export default CardList;

// const CardList = ({ robots }) => {
//     const cardsArray = robots.map((user, id) => {
//         return (
//         <Card 
//             key={id} 
//             id={robots[id].id} 
//             name={robots[id].name} 
//             email={robots[id].email}
//         />
//         );
//     })
//     return (
//         <div>
//            {cardsArray} 
//         </div>
//     );
// }