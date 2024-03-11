import { clearGallery, renderGallery } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { searchImages } from './js/pixabay-api.js';

const form = document.querySelector('.form');
const loader = document.querySelector(`.loader`);
const loadMoreButton = document.querySelector('#load-more');
const loadMoreMessage = document.querySelector('#load-more-end-message');
let searchTerm;
const imagesPerPage = 15;
let totalPages;
let currentPage = 1;

function showLoadMore() {
  loadMoreButton.classList.remove('hidden');
}

function hideLoadMore() {
  loadMoreButton.classList.add('hidden');
}

function showLoading() {
  loader.classList.remove('hidden');
}

function hideLoading() {
  loader.classList.add('hidden');
}

async function loadImages(searchQuery, enableScrolling = false) {
  if (!searchQuery) {
    console.error('Search query is empty')
  }
  showLoading();
  const { images, totalImages } = await searchImages(searchQuery.trim(), imagesPerPage, currentPage);
  totalPages = Math.ceil(totalImages / imagesPerPage);
  hideLoading();
  if (images.length === 0) {
    iziToast.error({
      message: 'Sorry, there are no images matching your searchImages query. Please try again!',
    });
    return;
  }
  ++currentPage;
  renderGallery(images, enableScrolling);
  showLoadMore();

  if (currentPage > totalPages) {
    hideLoading();
    hideLoadMore();
    iziToast.info({
      position: 'topRight',
      message: `We're sorry, but you've reached the end of search results.`,
    });
  }
}

function handleSubmitSearch(event) {
  event.preventDefault();
  const newTerm = form.elements.searchBar.value;
  if (!newTerm) {
    alert`Please enter something to search for!`;
    return;
  }
  currentPage = 1;
  hideLoadMore();
  clearGallery();
  searchTerm = newTerm;
  loadImages(searchTerm);
}

function handleLoadMore(event) {
  loadImages(searchTerm, true);
}

form.addEventListener('submit', handleSubmitSearch);
loadMoreButton.addEventListener('click', handleLoadMore);
