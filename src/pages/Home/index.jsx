import { Component } from 'react';

import './style.scss'

import { Posts } from '../../components/Posts';
import { loadPosts } from '../../service/load-posts';
import { Button } from '../../components/Button';
import { SearchInput } from '../../components/SearchInput';
import { Header } from '../../template/Header';
import { Footer } from '../../template/Footer';




class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 10,
    searchValue: ''
  }

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;

    const postsAndPhotos = await loadPosts()

    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos,
    });
  }

  loadMorePosts = () => {
    const {
      page,
      postsPerPage,
      allPosts,
      posts
    } = this.state;

    const nextPage = page + postsPerPage

    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);

    posts.push(...nextPosts)

    this.setState({ posts, page: nextPage });
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value });
  }

  render() {

    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;

    const filteredPosts = !!searchValue ?
      allPosts.filter(post => {
        return post.title.toLowerCase().includes(
          searchValue.toLowerCase()
        );
      })
      : posts;

    return (
      <>
        <Header />
        <section>
          <div className='searchInput-container'>
            {!!searchValue && (
              <>
                <h1>Search value: {searchValue}</h1>
              </>
            )}

            <SearchInput
              placeholder='Search'
              searchValue={searchValue}
              handleChange={this.handleChange}
            />
          </div>

          {filteredPosts.length > 0 && (
            <Posts posts={filteredPosts} />
          )}

          {filteredPosts.length === 0 && (
            <h4>Nao encontrado</h4>
          )}

          {!searchValue && (
            <Button
              text='load more posts'
              click={this.loadMorePosts}
              noClick={noMorePosts}
            />
          )}
        </section>

        <Footer />
      </>
    )
  }
}

export default Home;
