import axios from 'axios';

export async function searchImages(searchTerm, imagesPerPage, pageNumber) {
  const searchParams = new URLSearchParams({
    key: '42800487-0338ab50e10ef15f71fc3313e',
    q: `${searchTerm.trim()}`,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: imagesPerPage,
    page: pageNumber,
  });
  console.log(searchParams.toString());
  const url = `https://pixabay.com/api/?${searchParams}`;
  console.log(url);
  const options = {
    method: 'GET',
  };
  try {
    const response = await axios.get(url, options)
    return {images: response.data.hits, totalImages: response.data.totalHits};
  }
  catch (e) {
    console.log('error = ' + e);
  }
}