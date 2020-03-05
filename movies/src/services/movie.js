const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Mjc2MzBjMTUxYzc1YjQzNTFkMWZmNWRlOWU5YWJkNyIsInN1YiI6IjVlNTZlNjJlYTZkOTMxMDAxMjViYjMxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8PvBMgdamnBtWfRaw0vb5ZRdy36zW4vtVUEUtPkNSds';
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
