import React from 'react'
import NavBar from '../component/navBar'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import CardHeroDetail from '../component/cardDetail';

const HeroDetail = () => {
  const urlSearchString = window.location.search;
  const params = new URLSearchParams(urlSearchString);
  const id = params.get('id');
  console.log(id)
  return (
    <>
      <NavBar />
      <CardHeroDetail id = {id} />
    </>
  )
}

export default HeroDetail