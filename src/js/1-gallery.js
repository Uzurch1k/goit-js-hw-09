// ================================================================

import { images } from './gallery-arr.js';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// ================================================================

const gallery = document.querySelector('.gallery');

function createGalleryItems() {
  return images
    .map(({ preview, original, description }) => {
      return `<li class="gallery-item">
        <a class="gallery-link" href="${original}">
          <img class="gallery-image" src="${preview}" alt="${description}" />
        </a>
      </li>`;
    })
    .join('');
}
gallery.innerHTML = createGalleryItems();

// ================================================================

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
