import React from 'react'
import "./Feature.css"

export default function Feature() {
  return (
    <section>
        <div class="row">
          <h1>Our Features</h1>
        </div>
        <div class="row">
          {/* <!-- Column One --> */}
          <div class="column">
            <div class="card">
              <div class="icon">
                {/* <!-- <i class="fa-solid fa-user"></i> --> */}
                <i class="fas fa-shipping-fast"></i>
              </div>
              <h3>Fast Delivery</h3>
              <p>Swift delivery on completion of production</p>
            </div>
          </div>
          {/* <!-- Column Two --> */}
          <div class="column">
            <div class="card">
              <div class="icon">
                {/* <!-- <i class="fa-solid fa-shield-halved"></i> --> */}
                <i class="fas fa-money-check-alt"></i>
              </div>
              <h3>Great Value</h3>
              <p>Great value and quality at affordable prices</p>
            </div>
          </div>
          {/* <!-- Column Three --> */}
          <div class="column">
            <div class="card">
              <div class="icon">
                {/* <!-- <i class="fa-solid fa-shield-halved"></i> --> */}
                <i class="fa-solid fa-headset"></i>
              </div>
              <h3>Customer Service</h3>
              <p>Superb and fast customer service</p>
            </div>
          </div>
        </div>
      </section>
  )
}
