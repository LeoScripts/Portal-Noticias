
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

  const dados = data.articles.forEach((article) => {
    const { 
      author,
      content,
      description,
      publishedAt,
      source,
      title,
      url,
      urlToImage 
    } = article

    return getNews.push(article)
  })

  return getNews;

}
