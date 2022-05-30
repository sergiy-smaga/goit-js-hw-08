import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryRef = document.querySelector(".gallery");
const markup = createMarkup(galleryItems);

galleryRef.insertAdjacentHTML("beforeend", markup);

function createMarkup(items) {
    return  items
    .map(item => { 
      return `
      <a class="gallery__item" href="${item.original}">
        <img
          class="gallery__image"
          src="${item.preview}"
          alt="${item.description}"
        />
      </a>
    `;
    })
    .join(" ");
  };

new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});
