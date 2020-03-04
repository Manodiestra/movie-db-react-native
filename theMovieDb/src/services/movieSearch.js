
const API_KEY = ' 927630c151c75b4351d1ff5de9e9abd7';
const ROOT_URL = 'https://api.themoviedb.org/3';

export default class MoviesService {

  static async search(searchTerm, pageNumber = 1) {
    const result = await fetch(
      `${ROOT_URL}/search/movie?query=${searchTerm}&page=${pageNumber}`,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          'Content-Type': 'application/json;charset=utf-8',
        },
      },
    );
    if (result.status === 404) {
      throw new Error('Page not found');
    }
    const resultJson = await result.json();
    return resultJson.results;
  }
}
