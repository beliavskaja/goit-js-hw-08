import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryRef = document.querySelector('.gallery');
const createItem = galleryItems
  .map(
    (el, index) =>
    `<a class="gallery__item" href="${el.original}">
        <img
        class="gallery__image"
        src="${el.preview}"
        data-index="${index}"
        alt="${el.description}"
        />
    </a>`,
  )
  .join('');
galleryRef.insertAdjacentHTML('beforeend', createItem);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});