import styled from 'styled-components';

export const StyledSlider = styled.div`
  width: 85%;
  position: relative;

  .slider__range {
    width: 5%;
    height: 25px;
    background-color: red;
    position: absolute;
    z-index: 100;
    right: 25%;
  }

  .slider__input {
    width: 100%;
    -webkit-appearance: none;
    width: 100%;
    height: 25px;
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
  }

  .slider__input::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    background: #4caf50;
    cursor: pointer;
    position: relative;
    bottom: 25px;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
  }
`;
