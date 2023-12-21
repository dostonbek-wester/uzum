import React from 'react'
import './home.css'
import MAINPAGE from './../../data/main'
import Card from '../../components/Card/Card'
import MainSwiper from '../../components/Swipers/Swiper'



const Home = () => {

  console.log(MAINPAGE.data.main.content[2].content)
  return (
    <>
    <div style={{width:"100%"}}>
      <MainSwiper />
    </div>
    <div className='home-container'>

        {
          MAINPAGE.data.main.content[2].content.map((item,index)=>(
            <div key={index}>
              <h1>{item.title} {">"}</h1>
              <div className='card-container'>
                  {
                    item.content.map((r,i)=>(
                      <div key={i} className='cards-uzum-wrapper'>
                        {
                          r?.content?.slice(0,i%2 === 1 ? 2 :3)?.map((cart_item,ind)=>(
                            <Card key={ind} item={cart_item} /> 
                          ))
                        }
                      </div>
                    ))
                  }
              </div>
            </div>
          ))
        }
    </div>
    </>
  )
}

export default Home