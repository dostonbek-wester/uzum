import React from 'react'
import { FavoriteBorder, ShoppingCart } from '@mui/icons-material'
import { Button, Rating } from '@mui/material'

function Aksesuarlar({ item }) {
  console.log(item)
  return (
    <div>
      <div className="uzum-container">
        <div className="card-uzum">
          <button className='uzum_kategori_btn'>aksiya</button>
          <button className='uzum_kategori_btn_like'><FavoriteBorder /></button>
          <img src={''} className='uzum_img' />
          <h3 className='uzum_name'>{item?.title}</h3>
          <Rating
            name="simple-controlled"
            value={item?.rating}
          />
          <p className='chegrima_last_price'>{item?.minSellPrice}so'm</p>
          <h3 className='uzum_price'>{item?.minFullPrice}so'm</h3>
          <div className="btns-uzum">
            <Button className='uzum_card_btn_xarid'>Xoziroq harid qilish</Button>
            <Button className='uzum_card_btn_savad'><ShoppingCart /></Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aksesuarlar