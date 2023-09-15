import React, { useEffect, useState } from 'react'
import NavBar from '../component/navBar'
import CardHero from '../component/card'
import axios from 'axios';

var data = [];
const HeroPage = (props)  => {
  const [hero, setHero] = useState([]);
  useEffect(() => {
    const getHero = async () => {
      const result = await axios(
        'http://127.16.0.1:3000/hero',
      );
      console.log(result);
      setHero(result.data.data);
    };
    getHero();
  }, []);
  console.log(hero)

  return (
    <>
      <NavBar />
      <CardHero name = {hero} />
      
      <p>Hero</p>
    </>
  )
}

export default HeroPage