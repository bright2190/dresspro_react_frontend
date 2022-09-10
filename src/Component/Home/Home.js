import React from 'react'
import SecondLayer from '../SecondLayer/SecondLayer';
import Specific from '../Specific/Specific';
import Feature from '../Feature/Feature';
import Product from '../Product/Product';

export default function Home(props) {

  let dressProData = props.dressProData

  function second_layer_hover(event) {
    event.currentTarget.querySelector(".on_hover_display").style.display =
      "block";
  }
  function second_layer_hover_remove(event) {
    event.currentTarget.querySelector(".on_hover_display").style.display =
      "none";
  }




  return (
    <>
      <SecondLayer />
      <Product
        second_layer_hover={second_layer_hover}
        second_layer_hover_remove={second_layer_hover_remove}
        dressProData = {dressProData}
      />
      <Specific dressProData={dressProData}/>
      <Feature />
    </>
  );
}
