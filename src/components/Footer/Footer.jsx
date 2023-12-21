import './footer.css'
import React from 'react'
import AppleIcon from '@mui/icons-material/Apple';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Button } from '@mui/material';

function Footer() {
  return (
    <div className='container-footer'>
        <div className='footer-container-uzum'>
            <div className="left-box">
                <h3>Biz haqimizda</h3><br /><br /><br />
                <Button>Topshiriq punktlari</Button>
                <Button>Vakansiyalar</Button>
            </div>
            <div className="left-hero-box">
                <h3>Foydalanuvchilar</h3><br /><br /><br />
                <Button>Biz bilan bog'lanish</Button>
                <Button>Savil javob</Button>
            </div>
            <div className="right-hero-box">
                <h3>Tadbirkorlar</h3><br /><br /><br />
                <Button>Uzumda soting</Button>
                <Button>Sotuvchi kabineti</Button>
            </div>
            <div className="right-box">
                <div className="top-box">
                    <p>Ilovani yuklab olish</p>
                    <div className="sayt-btn">
                        <Button className='footer-button-sayt'><AppleIcon/><h5>App STore</h5></Button>
                        <Button className='footer-button-sayt'><SmartDisplayIcon /><h5>Google Play</h5></Button>
                    </div>
                </div>
                <div className="bottom-box">
                    <p>Uzum ijtimoiy tarmoqlarda</p>
                    <div className="tarmoq-btn">
                        <Button className='footer-button'><InstagramIcon /></Button>
                        <Button className='footer-button'><TelegramIcon /></Button>
                        <Button className='footer-button'><YouTubeIcon /></Button>
                        <Button className='footer-button'><FacebookIcon /></Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer