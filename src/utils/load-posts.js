export const loadPosts = async () => {
    const postsResponse = fetch('http://localhost:2540/')

    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');

    const [posts, photos] = await Promise.all([postsResponse, photosResponse]);

    const postsJson = await posts.json();
    const photosJson = await photos.json();

    const postsAndPhotos = postsJson.map((post, index) => {
      return {...post, cover: photosJson[index].url }
    })

    return postsAndPhotos
}
