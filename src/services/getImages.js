// const BASE_URL = 'https://pixabay.com/api/';
// const API_KEY = '34524727-90d44f4deefec722da31ae171';

// const getImages = searchText => {
//   fetch(`${BASE_URL}${searchText}`, {
//     headers: {
//       key: API_KEY,
//       image_type: 'photo',
//       orientation: 'horizontal',
//     },
//   })
//     .then(res => res.json())
//     .then(info => console.log('info', info));
// };

// export default getImages;

import axios from 'axios';

const API_KEY = '34524727-90d44f4deefec722da31ae171';
axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
};

const getImages = async (query, page) => {
  const { data } = await axios.get('', {
    params: {
      q: query,
      page: page,
      per_page: 12,
    },
  });
  console.log(data);
  return data;
};

export default getImages;
