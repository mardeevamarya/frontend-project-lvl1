/* eslint-disable import/prefer-default-export */

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}


export {getRandomInt};