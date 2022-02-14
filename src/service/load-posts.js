
export const loadPosts = async () => {
  const API_KEY = "bf991087717841e38bf0cac09f043e38";
  const BASE_URL = "https://newsapi.org/v2";

  const response = await fetch(`${BASE_URL}/top-headlines?country=br`, {
    method: "GET",
    headers: {
      "X-Api-Key": API_KEY,
    },
  });

  const data = await response.json();

  const getNews = [];

  // eslint-disable-next-line no-unused-vars
  const dados = data.articles.forEach((article) => {
    const { 
      // eslint-disable-next-line no-unused-vars
      author,
      // eslint-disable-next-line no-unused-vars
      content,
      // eslint-disable-next-line no-unused-vars
      description,
      // eslint-disable-next-line no-unused-vars
      publishedAt,
      // eslint-disable-next-line no-unused-vars
      source,
      // eslint-disable-next-line no-unused-vars
      title,
      // eslint-disable-next-line no-unused-vars
      url,
      // eslint-disable-next-line no-unused-vars
      urlToImage 
    } = article

    return getNews.push(article)
  })

  return getNews;

}
