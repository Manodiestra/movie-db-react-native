const API_KEY = '927630c151c75b4351d1ff5de9e9abd7';
const ROOT_URL = 'https://api.themoviedb.org/3';

export default class PersonDetails {
  static async query(personId) {
    const result = await fetch(
      `${ROOT_URL}/person/${personId}?api_key=${API_KEY}&language=en-US`,
    );

    if (result.status === 404) {
      throw new Error('Page not found');
    }
    const resultJson = await result.json();
    console.log('resultJson', resultJson);
    return resultJson;
  }
}
