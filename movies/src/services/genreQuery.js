const example = '3927630c151c75b4351d1ff5de9e9abd7&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=12';

const API_KEY = '927630c151c75b4351d1ff5de9e9abd7';
const ROOT_URL = 'https://api.themoviedb.org/3';

export default class GenreQuery {
  static async query(genre_id, pageNumber) {
    console.log('in genre id', genre_id);
    const result = await fetch(
      `${ROOT_URL}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=${pageNumber}&with_genres=${genre_id}`,
    );
    console.log('status', result.status);

    if (result.status === 404) {
      throw new Error('Page not found');
    }
    const resultJson = await result.json();
    return resultJson.results;
  }
}
