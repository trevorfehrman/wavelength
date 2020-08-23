import React from 'react';

function Slider() {
  return (
    <div className="slider">
      <div className="slider__range"></div>
			<input className="slider__input" type="range" min="1" max="100" />
		</div>
  );
}

export default Slider;