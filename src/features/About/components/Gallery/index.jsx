import React from "react";
import "./index.scss";
const Gallery = () => {
  return (
    <div className="gallery_wrapper">
      <h1>Gallery of Moments</h1>
      <div class="gallery">
        <div class="gallery__column">
          <a
            href="https://unsplash.com/@jeka_fe"
            target="_blank"
            class="gallery__link"
          >
            <figure class="gallery__thumb">
              <img
                src="https://source.unsplash.com/_cvwXhGqG-o/300x300"
                alt="Portrait by Jessica Felicio"
                class="gallery__image"
              />
              <figcaption class="gallery__caption">
                Portrait by Jessica Felicio
              </figcaption>
            </figure>
          </a>

          <a
            href="https://unsplash.com/@samburriss"
            target="_blank"
            class="gallery__link"
          >
            <figure class="gallery__thumb">
              <img
                src="https://source.unsplash.com/tV_1sC603zA/300x500"
                alt="Portrait by Sam Burriss"
                class="gallery__image"
              />
              <figcaption class="gallery__caption">
                Portrait by Sam Burriss
              </figcaption>
            </figure>
          </a>
        </div>

        <div class="gallery__column">
          <a
            href="https://unsplash.com/@noahbuscher"
            target="_blank"
            class="gallery__link"
          >
            <figure class="gallery__thumb">
              <img
                src="https://source.unsplash.com/AR7aumwKr2s/300x300"
                alt="Portrait by Noah Buscher"
                class="gallery__image"
              />
              <figcaption class="gallery__caption">
                Portrait by Noah Buscher
              </figcaption>
            </figure>
          </a>

          <a
            href="https://unsplash.com/@von_co"
            target="_blank"
            class="gallery__link"
          >
            <figure class="gallery__thumb">
              <img
                src="https://source.unsplash.com/dnL6ZIpht2s/300x300"
                alt="Portrait by Ivana Cajina"
                class="gallery__image"
              />
              <figcaption class="gallery__caption">
                Portrait by Ivana Cajina
              </figcaption>
            </figure>
          </a>
        </div>

        <div class="gallery__column">
          <a
            href="https://unsplash.com/@marilezhava"
            target="_blank"
            class="gallery__link"
          >
            <figure class="gallery__thumb">
              <img
                src="https://source.unsplash.com/Xm9-vA_bhm0/300x500"
                alt="Portrait by Mari Lezhava"
                class="gallery__image"
              />
              <figcaption class="gallery__caption">
                Portrait by Mari Lezhava
              </figcaption>
            </figure>
          </a>
        </div>

        <div class="gallery__column">
          <a
            href="https://unsplash.com/@frxgui"
            target="_blank"
            class="gallery__link"
          >
            <figure class="gallery__thumb">
              <img
                src="https://source.unsplash.com/FQhLLehm4dk/300x300"
                alt="Portrait by Guilian Fremaux"
                class="gallery__image"
              />
              <figcaption class="gallery__caption">
                Portrait by Guilian Fremaux
              </figcaption>
            </figure>
          </a>

          <a
            href="https://unsplash.com/@majestical_jasmin"
            target="_blank"
            class="gallery__link"
          >
            <figure class="gallery__thumb">
              <img
                src="https://source.unsplash.com/OQd9zONSx7s/300x300"
                alt="Portrait by Jasmin Chew"
                class="gallery__image"
              />
              <figcaption class="gallery__caption">
                Portrait by Jasmin Chew
              </figcaption>
            </figure>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
