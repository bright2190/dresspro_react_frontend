import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import "./Product.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";

export default function Product(props) {

      let second_layer_hover = props.second_layer_hover;
      let second_layer_hover_remove = props.second_layer_hover_remove;
      let cloth_categories = props.cloth_categories;
      let cloth_divs =  cloth_categories.map((cloth, index)=>{


      let cloth_name_id = cloth.replace(/\s+/g, "").toLowerCase();

        return (
          <>
            <SwiperSlide
              id={"swiper2-slide" + index}
              onMouseOver={second_layer_hover}
              onMouseLeave={second_layer_hover_remove}
            >
              <div class="on_hover_display">
                <div class="middle_hover">
                  {/* <Link to="">Order Now</Link> */}
                  <a href={"/" + cloth_name_id}>Order Now</a>
                </div>
                <div class="down_hover">{cloth}</div>
              </div>
            </SwiperSlide>
          </>
        );
      })

  return (
    <>
      <Swiper
        pagination={true}
        navigation={true}
        modules={[Autoplay, Navigation, Pagination]}
        slidesPerView={1}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        className="second-swiper"
      >
        {/* <SwiperSlide
          id="swiper2-slide0"
          onMouseOver={second_layer_hover}
          onMouseLeave={second_layer_hover_remove}
        >
          <div class="on_hover_display">
            <div class="middle_hover">
             <Link to="">Order Now</Link>
            </div>
            <div class="down_hover">Smocked Top</div>
          </div>
        </SwiperSlide> */}
        
        
        {cloth_divs}
      </Swiper>
    </>
  );
}
