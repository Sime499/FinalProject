import React from "react";
import "../Learn.css";

export default function Learn() {
  return (
    <div className="containerBox">
      <div class="story">
        <section className="row hero hero-full-width-back margin-spacer">
          <img
            src="https://media.istockphoto.com/photos/falling-roasted-coffee-beans-on-brown-background-picture-id1328567022?b=1&k=20&m=1328567022&s=170667a&w=0&h=Ih9PSrM0oZmeD9y3EnUbn0ygD9Tk9oAuZaUIr5pydvc="
            alt="containers"
          />
          <div class="wrap">
            <div class="text-block">
              <h2
                data-uw-styling-context="true"
                role="heading"
                aria-level="2"
                data-uw-rm-heading="level"
              >
                Our Coffee
              </h2>
              <p data-uw-styling-context="true">
                Once you know Quality of our coffee...
              </p>
            </div>
          </div>
        </section>

        <section className="row demand-block margin-spacer">
          <div className="flex-image-left gray-background panel-wide">
            <div className="image">
              <img
                src="https://media.istockphoto.com/photos/cup-of-espresso-with-coffee-beans-picture-id1177900338?b=1&k=20&m=1177900338&s=170667a&w=0&h=F8zfPlOjKVU8GXg32SQIWAE0ozBd_1PcsXw2slkCQT8="
                alt="Our Story"
                data-uw-rm-ima-original="our story"
              />
            </div>
            <div className="text-block">
              <h2>Our Story</h2>

              <h3 data-uw-styling-context="true">
                Sodo born and Organic Coffee since 1991
              </h3>
              <p data-uw-styling-context="true">
                The ANJU Coffee story begun in 1999 in Sodo City Ethiopia with
                the Passion to serve AromaCoffee in Ethiopia and now All over
                the world
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
