import React from 'react';
import './Slider.css'


const Slide = ({ image }) => {
    const styles = {
        width:"95%",
        height:"520px", 
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 60%'
    }
    return <div className="slide" style={styles}></div>
}
export default Slide;



