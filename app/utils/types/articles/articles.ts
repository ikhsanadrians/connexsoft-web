interface Articles {
    title: string,
    thumbnail: string,
    author: string,
    slug: string,
    author_img: string,
    post_date: string,
    description: ArticleDescription[]
  }

  interface ArticleDescription  {
    section: string,
    text: string,
  }

export default Articles;
