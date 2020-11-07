import './imageGallary.css';


import celebration from '../assets/celebration.png';
import danceLeft from '../assets/dance-left-icon.png';
import danceRight from '../assets/right-dance-icon.png';
import dipDance from '../assets/dip-dance-icon.png';
import djBooth from '../assets/dj-booth-icon.png';
import funSticker from '../assets/fun-sticker-icon.png';
import leftHop from '../assets/left-hop-icon.png';
import rightHop from '../assets/right-hop-icon.png';
import rightSway from '../assets/right-sway-icon.png';

const ImageGallary = () => {
    return(
        <div className="image-section-style">
            <img src={danceLeft} className="image-style" alt="Current beat" />
            <img src={danceRight} className="image-style" alt="Current beat" />
            <img src={celebration} className="image-style" alt="Current beat" />
            <img src={dipDance} className="image-style" alt="Current beat" />
            <img src={rightSway} className="image-style" alt="Current beat" />
            <img src={djBooth} className="image-style" alt="Current beat" />
            <img src={leftHop} className="image-style" alt="Current beat" />
            <img src={rightHop} className="image-style" alt="Current beat" />
            <img src={funSticker} className="image-style" alt="Current beat" />
        </div>
    )
}

export default ImageGallary;