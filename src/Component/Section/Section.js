import React from 'react'
// import "./SectionBackgroundImage.scss";
import "./Section.css"
import logo from "../../../src/assets/images/about4.jpg"
import { Policy } from '../Policy/Policy'
import AddToCart from '../AddToCart/AddToCart'

const Section = (props) => {

  const mouse_hover = (event)=>{
    event.currentTarget.querySelector(".section_image_hover").style.display = "block"
    console.log("hello")
  }

  const mouse_leave = (event) => {
    event.currentTarget.querySelector(".section_image_hover").style.display = "none"
    console.log("hello");
  };




  let addToCartHandler = props.addToCartHandler;
  let cartData = props.cartData;






  let cloth_object= props.cloth_object
  let cloth_name = props.cloth_object.name;
  let cloth_images_link = props.cloth_object.images;
  let cloth_name_unspaced = cloth_name.replace(/\s+/g, "").toLowerCase();
  let number_of_clothes = 20;
  let cloth_name_lowercase = cloth_name.toLowerCase();
  let number_of_clothes_div = [
  
  ];
  for (let i = 0; i < cloth_images_link.length; i++){
    let addOrRemove = "ADD TO CART";
    for(let j=0; j<cartData;j++){
      if(cartData[j]===cloth_images_link[i]){
        addOrRemove =  "REMOVE FROM CART"
      }
    }


    number_of_clothes_div.push(
      <div
        class="section_image_container"
        onMouseEnter={mouse_hover}
        onMouseLeave={mouse_leave}
      >
        <div
          class={"section_image " + cloth_name_unspaced + "_image" + i}
          style={{
            backgroundImage: "url(" + cloth_images_link[i] + ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div class="section_image_hover">
            <div class="image_identity">{cloth_name_unspaced + i}</div>
            {/* <div class="buy_now">BUY NOW</div> */}
            {/* <AddToCart /> */}
            <div className="buy_now" onClick={()=>addToCartHandler(cloth_images_link[i])}>{addOrRemove}</div>
          </div>
        </div>
      </div>
    );
   

  }
  return (
    <div>
      <div class="section_info">
        <div class="section_nav_display">Products &gt; {cloth_name} </div>
        <div class="section_text_display">{cloth_name}</div>
      </div>

      <div class="section_image_section">


        {/* <div class="section_image_container">
          <div class="section_image section_image2">
            <div class="section_image_hover">
              <div class="image_identity">MS10001</div>
              <div class="buy_now">BUY NOW</div>
            </div>
          </div>
        </div> */}
       
        
        {number_of_clothes_div}
      </div>
    </div>
  );
}

export default Section