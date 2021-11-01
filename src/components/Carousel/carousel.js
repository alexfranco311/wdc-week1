import React from 'react';
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css"

new Glide('.glide').mount()

function Carousel() {
  return (
    <section classname="attractions">
      <div class="glide">
        <div class="glide__track" data-glide-el="track">
          <ul class="glide__slides">
            <li class="glide__slide">0</li>
            <li class="glide__slide">1</li>
            <li class="glide__slide">2</li>
          </ul>
        </div>
        <div class="glide__arrows" data-glide-el="controls">
          <button class="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
          <button class="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
        </div>
      </div>
    </section>
  )
}

export default Carousel
