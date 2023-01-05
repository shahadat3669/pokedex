class InvolvementApiService {
  #baseLikesUrl;

  constructor() {
    const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net';
    this.#baseLikesUrl = new URL('/capstoneApi/apps/uVghFZUXyAONTeUqAIXl/likes', baseUrl);
  }

  getLikesById = async (pokeId) => {
    const allLikes = await this.getAllLikes();
    const likes = allLikes.find((item) => item.item_id === pokeId);

    return (likes !== undefined) ? likes.likes : 0;
  }

  getAllLikes = async () => fetch(this.#baseLikesUrl)
    .then((response) => response.json());
}
export default InvolvementApiService;