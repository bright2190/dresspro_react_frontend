import "./SpaceAtTheSide.css";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import Specific from "../Specific/Specific";
import Cart from "../Cart/Cart";


import Navbar from "../Navbar/Navbar";

import SecondLayer from "../SecondLayer/SecondLayer";
import Product from "../Product/Product";
import Feature from "../Feature/Feature";
import Footer from "../Footer/Footer";
import CustomerReview from "../CustomerReview/CustomerReview";
import Home from "../Home/Home";
import AboutUs from "../AboutUs/AboutUs";
import Section from "../Section/Section";
import  {Policy}  from "../Policy/Policy";

export default function SpaceAtTheSide() {

  const [dressProData, setDressProData] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  

  function navbar_toggler(){
        document.getElementsByClassName("links_div")[0].classList.toggle("show");
  }

//   let cloth_categories = [
//     "SMOCKED TOPS",
//     "RUCHED DRESSES",
//     "WRAP TOPS",
//     "MINI SKIRTS",
//     "SATIN DRESSES",
//     "TWO PIECES",
    
//   ];

//   let cloth_images_link = ["https://i.im.ge/2022/09/08/Oftta8.RENAME-36.jpg",
// "https://i.im.ge/2022/09/08/OftNGX.RENAME-35.jpg",
// "https://i.im.ge/2022/09/08/Oft6b9.RENAME-34.jpg","https://i.im.ge/2022/09/08/OftwhK.RENAME-33.jpg","https://i.im.ge/2022/09/08/OftmXF.RENAME-32.jpg","https://i.im.ge/2022/09/08/Oft9Z6.RENAME-31.jpg","https://i.im.ge/2022/09/08/Oft5mz.RENAME-30.jpg","https://i.im.ge/2022/09/08/Oft01S.RENAME-29.jpg","https://i.im.ge/2022/09/08/OfthHy.RENAME-28.jpg","https://i.im.ge/2022/09/08/OftUyJ.RENAME-25.jpg","https://i.im.ge/2022/09/08/OftLaa.RENAME-26.jpg","https://i.im.ge/2022/09/08/OftDBx.RENAME-24.jpg","https://i.im.ge/2022/09/08/Oft7YG.RENAME-23.jpg","https://i.im.ge/2022/09/08/OftahL.RENAME-22.jpg","https://i.im.ge/2022/09/08/Oftsoc.RENAME-19.jpg","https://i.im.ge/2022/09/08/OftdZT.RENAME-18.jpg","https://i.im.ge/2022/09/08/OftSm0.RENAME-17.jpg","https://i.im.ge/2022/09/08/Oft2OW.RENAME-15.jpg","https://i.im.ge/2022/09/08/OftOHr.RENAME-14.jpg","https://i.im.ge/2022/09/08/OftFym.RENAME-13.jpg","https://i.im.ge/2022/09/08/Oftusf.RENAME-12.jpg","https://i.im.ge/2022/09/08/OftlB1.RENAME-11.jpg","https://i.im.ge/2022/09/08/OftXYP.RENAME-10.jpg","https://i.im.ge/2022/09/08/OftToq.RENAME-9.jpg","https://i.im.ge/2022/09/08/OftMWC.RENAME-8.jpg","https://i.im.ge/2022/09/08/OfPej4.RENAME-7.jpg","https://i.im.ge/2022/09/08/OfPGOD.RENAME-6.jpg","https://i.im.ge/2022/09/08/OfP4zY.RENAME-5.jpg","https://i.im.ge/2022/09/08/OfPnyM.RENAME-4.jpg","https://i.im.ge/2022/09/08/OfPJsh.RENAME-3.jpg"]

//   let cloth_categories_number = [25, 26, 36, 30, 32, 11]

  const fetcher = ()=>{
     axios.get("http://localhost:9000/testAPI").then((data) => {
       setDressProData(data.data);
       console.log(data.data);
     });

  }

  useEffect(()=>{
    fetcher();
    // console.log(data)
  
  }, []);

   if (dressProData.length === 0) {
     return (
       <>
         <div>loading</div>
       </>
     );
   }
   

   for (let i = 0;i<dressProData.length;i++){

   }

   let new_cloth_route = dressProData.map((cloth_object, index)=>{
    let { name} = cloth_object
    let cloth_name_id = name.replace(/\s+/g, "").toLowerCase();
    return (
      <Route
        path={"/" + cloth_name_id}
        element={
          <Section
            cloth_object={cloth_object}
          />
        }
      ></Route>
    );

   })

  // let cloth_categories = data.cloth_categories;
  // let cloth_images_link = data.cloth_images_link;
  // let cloth_categories_number = data.cloth_images_link

  // let cloth_route =  cloth_categories.map((cloth_name, index) =>{
  //   let cloth_name_id = cloth_name.replace(/\s+/g, "").toLowerCase();
  //   let number_of_clothes = cloth_categories_number[index]
  //   return (
  //         <Route path={"/" + cloth_name_id} element={<Section cloth_name={cloth_name} number_of_clothes={number_of_clothes} cloth_images_link={cloth_images_link}/>}></Route>

  //   )
  // })


 
  







  return (
    <>
      <div class="space_at_the_side">
        <Navbar navbar_togglerProps={navbar_toggler} />
        <Routes>
          {/* {cloth_route} */}
          {new_cloth_route}
          <Route
            path="/"
            element={<Home dressProData={dressProData} />}
          ></Route>
          <Route path="/customer" element={<CustomerReview />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
          <Route path="/policy" element={<Policy />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
}
