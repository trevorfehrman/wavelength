import React from 'react';
import { StyledSlider } from './StyledSlider';

function Slider() {
  return (
    <StyledSlider>
      <div className='slider__range'></div>
      <input className='slider__input' type='range' min='1' max='100' />
    </StyledSlider>
  );
}

export default Slider;
