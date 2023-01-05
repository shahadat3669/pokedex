class InvolvementApiService {
  #baseLikesUrl;

  static #likesUrl;

  static {
    this.#likesUrl = new URL('/capstoneApi/apps/uVghFZUXyAONTeUqAIXl/likes',
      'https://us-central1-involvement-api.cloudfunctions.net');
  }

  constructor() {
    const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net';
    this.#baseLikesUrl = new URL('/capstoneApi/apps/uVghFZUXyAONTeUqAIXl/likes', baseUrl);
  }

  static postLikeById = async (pokeId) => {
    const response = await fetch(this.#likesUrl, {
      method: 'POST',
      body: JSON.stringify({
        item_id: pokeId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    return response.result;
  }

  static getLikesById = async (pokeId) => {
    const allLikes = await this.getAllLikes();
    const likes = allLikes.find((item) => item.item_id === pokeId);

    return (likes !== undefined) ? likes.likes : 0;
  }

  static getAllLikes = async () => fetch(this.#likesUrl)
    .then((response) => response.json());
}
export default InvolvementApiService;