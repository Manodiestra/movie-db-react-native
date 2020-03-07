const url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=927630c151c75b4351d1ff5de9e9abd7&language=en-US';

export default class GenreService {
  static async getGenres() {
    const result = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=927630c151c75b4351d1ff5de9e9abd7&language=en-US');

    if (result.status === 404) {
      throw new Error('Page not found');
    }
    const resultJson = await result.json();
    return resultJson.genres;
  }
}
