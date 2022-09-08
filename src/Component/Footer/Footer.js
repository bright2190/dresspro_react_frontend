import React from 'react'
import "./Footer.css"

export default function Footer() {
  return (
    <footer>
      <div class="footer_container">
        <div class="footer_top">
          <div class="footer_one">
            <div class="footer_about">
              <div class="footer_about_heading">ABOUT</div>
              <div class="footer_about_story">
                DRESS PRO is a fashion brand that provides ladies with
                customized sexy outfit to help them feel confident and stand out
              </div>
            </div>
          </div>
          <div class="footer_two">
            <div class="footer_categories">
              <div class="footer_categories_heading">CATEGORIES</div>
              <div class="footer_categories_group_links">
                <div class="footer_categories_specific_links">
                  <a href="./smocked_tops/smocked_tops.html">Smocked Tops</a>
                </div>

                <div class="footer_categories_specific_links">
                  <a href="./ruched_dresses/ruched_dresses.html">
                    Ruched Dress
                  </a>
                </div>
                <div class="footer_categories_specific_links">
                  <a href="./wrap_tops/wrap_tops.html">Wrap Tops</a>
                </div>
                <div class="footer_categories_specific_links">
                  <a href="./mini_skirts/mini_skirts.html">Mini Skirts</a>
                </div>
                <div class="footer_categories_specific_links">
                  <a href="./satin_dress_lace/satin_dress_lace.html">
                    Satin Dress
                  </a>
                </div>
                <div class="footer_categories_specific_links">
                  <a href="./two_pieces/two_pieces.html">Two Pieces</a>
                </div>
              </div>
            </div>
            <div class="footer_quicklinks">
              <div class="footer_quicklinks_heading">QUICK LINKS</div>
              <div class="footer_quicklinks_group_links">
                <div class="footer_quicklinks_specific_links">
                  <a href="#product_section">Products</a>
                </div>
                <div class="footer_quicklinks_specific_links">
                  <a href="customer_review.html">Customer Review</a>
                </div>
                <div class="footer_quicklinks_specific_links">
                  <a href="about_us.html">About Us</a>
                </div>
                <div class="footer_quicklinks_specific_links">
                  <a href="company_policy.html">Company Policy</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer_bottom">
          <div class="footer_three">
            <div class="footer_horizontal_line"></div>
          </div>
          <div class="footer_four">
            <div class="footer_copyright">
              Copyright © 2022 All Rights Reserved by
              <strong>
                <a
                  href="https://www.instagram.com/banjibaniex/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Dress Pro
                </a>
              </strong>
            </div>
            <div class="footer_socialmedia">
              <div class="footer_socialmedia_group_links">
                <div class="footer_socialmedia_specific_links">
                  <div class="footer_instagram">
                    <a
                      href="https://www.instagram.com/dress.pro_"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div class="footer_socialmedia_specific_links">
                  <div class="footer_twitter">
                    <a href="">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </div>
                </div>
                <div class="footer_socialmedia_specific_links">
                  <div class="footer_facebook">
                    <a href="">
                      <i class="fab fa-facebook"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
