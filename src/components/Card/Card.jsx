import React from 'react'
import './card.css';
import { Button, Rating, } from '@mui/material';
import { ShoppingCart, FavoriteBorder } from "@mui/icons-material"
import { useNavigate } from 'react-router-dom';


function Card({ item }) {
  const navigate = useNavigate('')
  function reduce_title(title) {
    if(title.length > 20){
      return title.slice(0,20) + "..."
    }else{
      return title
    }
  }

  function Details(detail) {
    navigate('/detail',{state:item})
  }
  return (
    <div className="uzum-container">
      <div className="card-uzum" onClick={Details}>
        <button className='uzum_kategori_btn'>aksiya</button>
        <button className='uzum_kategori_btn_like'><FavoriteBorder /></button>
        <img src={item.photos[0].link.low} className='uzum_img' />
        <h3 className='uzum_name'>{reduce_title(item.title)}...</h3>
        <Rating
          name="simple-controlled"
          value={item.rating}
        />
        <p className='chegrima_last_price'>{item.minSellPrice}so'm</p>
        <h3 style={{padding:4}} className='uzum_price'>{item.minFullPrice}so'm</h3>
      </div>
    </div>
  )
}

export default Card