import { Favorite, Star } from '@mui/icons-material'
import React, { useState } from 'react'
import './detail.css'
import { useLocation } from 'react-router-dom'
import { Button, ButtonBase } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


function Detail() {
    const [count, setCount] = useState(1)
    const location = useLocation()
    console.log(location.state)



    return (
        <div className='detail-container'>
            <img src={location.state.photos[0].link.high} alt="" />
            <div className="product-dateails">
                <div className="star-like">
                    <div className="star">
                        <Star />
                        <b>({location.state.rating}) baho</b>
                        <p>({location.state.feedbackQuantity})</p>
                        <p>({location.state.ordersQuantity} buyurtma)</p>
                    </div>
                    <div className="like">
                        <FavoriteBorderIcon className='istak' /><p></p>
                    </div>
                </div>
                <div className="details">
                    <h3>{location.state.title}</h3>
                    <p className='dastvka'>yetkazib berish muddati : 1kun , bepul</p>
                </div>
                <div className="zakaz-details">
                    <p>Miqdori:</p>
                    <div className="count-container">
                        <Button variant='outlined' className='plus' disabled={count == 1} onClick={() => setCount((count) => count - 1)}>-</Button>
                        <Button variant='outlined' className="count">{count}</Button>
                        <Button variant='outlined' className='plus' onClick={() => setCount((count) => count + 1)}>+</Button>
                    </div>
                </div>
                <h3 className="dostavka-number">Narxi: {count*location.state.minFullPrice}  so'm</h3>
                <div className="bottom-btn">
                    <Button className='bottom-btn-btn'> Buyurtma berish</Button>
                    <Button className='bottom-btn-btn-savat'> Savatga qo'shish</Button>
                </div>
            </div>
        </div>
    )
}

export default Detail