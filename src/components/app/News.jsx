import React, { Component } from "react";
import Spinner from "../common/Spinner";
import NewsItems from "./NewsItems";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  constructor() {
    super();
    this.state = { article: [], total: 0, page: 1, loading: true };
  }
  //   prevClickHandle = async () => {
  //     await this.getNewData(this.state.page - 1);
  //   };
  //   nextClickHandle = async () => {
  //     if (this.state.page + 1 > Math.ceil(this.state.total / 20)) {
  //       return;
  //     }
  //     await this.getNewData(this.state.page + 1);
  //   };
  async componentDidMount() {
    // console.log("comp mount " + this.props.catagory);
    await this.getNewData(this.state.page, false);
  }
  fetchMoreData = async () => {
    await this.getNewData(this.state.page + 1, true);
  };
  getNewData = async (page, isMoredata) => {
    var url = `
    https://newsapi.org/v2/top-headlines?language=en&category=${this.props.catagory}&apiKey=2666bf846b644d6fb237f57fe199842e&pageSize=5&page=${page}`;
    var result = await fetch(url);
    var parseData = await result.json();

    this.setState({
      article: isMoredata
        ? this.state.article.concat(parseData.articles)
        : parseData.articles,
      page: page,
      total: parseData.totalResults
    });
    console.log(this.state.article);
  };
  render() {
    return (
      <>
        <h2>Top New of the World</h2>
        {<Spinner /> && this.state.loading}
        <InfiniteScroll
          dataLength={this.state.article.length}
          next={this.fetchMoreData}
          hasMore={this.state.article.length !== this.state.total}
          loader={<Spinner />}
        >
          <div className="container ">
            <div className="row">
              {this.state.article.map((data) => {
                return (
                  <NewsItems
                    key={data.url}
                    title={data.title}
                    description={data.description}
                    imgUrl={data.urlToImage}
                    newsUrl={data.url}
                    author={data.author}
                    pDate={data.publishedAt}
                    source={data.source.name}
                  />
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}
