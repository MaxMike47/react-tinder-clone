
// react imports
import React, { useEffect, useState } from 'react';
import ReactTinderCard from 'react-tinder-card';

//custom imports
import './TinderCards.css'
import axios from '../../axios/axios.js';

function TinderCards() {

    // Declare state variables for components/view datas
    const [people, setPeople] = useState([]);

    // Run on state init {* runs only once }
    useEffect(() => {
        async function fetchData() {
            const req = await axios.get('/tinder/api/people');

            setPeople(req.data);
        }

        fetchData();
    }, []);

    const swiped = (direction, nameToDelete) => {
        console.log('removing '+nameToDelete);
        // setLastDirection(direction);
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen');
    }

    return (
        <div className='tinderCards'>
            <div className='tinderCards_cardContainer'>

                {people.map((eachPerson) => (
                    <ReactTinderCard className='swipe' 
                    key={eachPerson.name} 
                    preventSwipe={['up', 'down']} 
                    onSwipe={(dir) => swiped(dir, eachPerson.name)} 
                    onCardLeftScreen={() => outOfFrame(eachPerson.name)}
                    >

                    <div style={{backgroundImage: `url("${eachPerson.imgUrl}")` }} className='card'>
                        <h3>{eachPerson.name}</h3>
                    </div>

                    </ReactTinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards