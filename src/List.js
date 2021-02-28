import React from 'react';

const List = ({people}) => {
    return(
        <div>
        {people.map((person) => {
         const {img,name,skills} = person;
            return(
                <div className="card">
                    <img src={person.img}></img>
                    <div>
                    <h3>{person.name}</h3>
                    <h4>{person.date}</h4>

                    </div>
                </div>
            );
        })}
        </div>
    );
}
export default List;