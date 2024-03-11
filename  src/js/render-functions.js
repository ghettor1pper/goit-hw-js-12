import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const lightbox = new SimpleLightbox('.gallery a', {});

function scrollBy() {
  const itemHeight = gallery.firstElementChild.getBoundingClientRect().height;
  window.scrollBy({top: 2 * itemHeight, behavior: 'smooth'});
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function renderGallery(images, enableScrolling = false) {
  const markup = images
    .map(image =>
        `<li class="gallery-item">
      <a class="gallery-link" href="${image.largeImageURL}">
        <img
          class="gallery-image"
          src="${image.previewURL}"
        />
      </a>
      <div class="description">
        <div class="field">
          <span class="label">Likes</span>
          <span class="value">${image.likes}</span>
        </div>
        <div  class="field">
          <span class="label">Views</span>
          <span class="value">${image.views}</span>
        </div>
        <div  class="field">
          <span class="label">Comments</span>
          <span class="value">${image.comments}</span>
        </div>
        <div  class="field">
          <span class="label">Downloads</span>
          <span class="value">${image.downloads}</span>
        </div>
      </div>
    </li>`
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
  console.log('gallery = ' + gallery.childElementCount)
  lightbox.refresh();
  if (enableScrolling)
  {
    scrollBy();
  }
}