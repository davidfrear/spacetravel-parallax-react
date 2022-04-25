import { Parallax } from 'react-parallax';
import Satellite from '../img/satellite.jpeg'

const ImageOne = () => (
    <Parallax className='image' bgImage={Satellite} strength={800}>
        <div className='content'>
            <span className='img-txt'>A trip to space</span>
        </div>
    </Parallax>
);

export default ImageOne