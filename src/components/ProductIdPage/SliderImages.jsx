import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/splide/css';
import './styles/sliderImages.css';

const SliderImages = ({images}) => {
  return (
    <div>
        <Splide
        options={ {
            rewind: true,
            gap   : '1rem',
        } }
        aria-label="My Favorite Images"
        >
            {
                images?.map(item => (
                    <SplideSlide key={item.url}>
                        <img src={item.url} alt={item.id}/>
                    </SplideSlide>
                ))
            }
        </Splide>
    </div>
  )
}

export default SliderImages