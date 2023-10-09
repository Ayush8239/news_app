import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Loading from './Loading';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {
    static defaultProps = {
        country :'in',
        pageSize : 18,
        category : 'general'
    }
    static propsTypes = {
        country : PropTypes.string,
        pageSize : PropTypes.number,
        category : PropTypes.string
    }
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults : 0
        }
    }

    async updateNews(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({loading : true})
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles , 
            totalResults : parsedData.totalResults ,
             loading : false })
    }

    async componentDidMount() {
        this.fetchMoreData();

    }

    fetchMoreData = async() => {
        this.setState({page : this.state.page +1})
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({loading : true})
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: this.state.articles.concat(parsedData.articles), 
            totalResults : parsedData.totalResults ,
             loading : false })
      };




    // handleNextClick = async () => {
    //     this.setState({page : this.state.page + 1});
    //     this.updateNews();
    //     // console.log("Next" + Math.ceil(this.state.totalResults/this.props.pageSize));
    //     //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b6d1f13a2e434db4a478bbd966355e84&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
    //     //     this.setState({loading : true})
    //     //     let data = await fetch(url);
    //     //     let parsedData = await data.json();
    //     //     console.log(parsedData);
    //     //     this.setState({
    //     //         page: this.state.page + 1,
    //     //         articles: parsedData.articles
    //     //         , loading : false
    //     //     })

    // }
    // handlePrevClick = async () => {
    //     this.setState({page : this.state.page - 1});
    //     this.updateNews();
    //     // console.log("Prev");
    //     // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b6d1f13a2e434db4a478bbd966355e84&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
    //     // this.setState({loading : true})
    //     // let data = await fetch(url);
    //     // let parsedData = await data.json();
    //     // console.log(parsedData);
    //     // this.setState({
    //     //     page : this.state.page -1,
    //     //     articles: parsedData.articles
    //     //     ,loading : false
    //     // })

    // }


    render() {

        return (
            <div className='container text-center ' >
                <h1>Top News</h1>
                {this.state.loading === true && <Loading/>}

                <InfiniteScroll
                dataLength={this.state.articles.length}
                next={this.fetchMoreData}
                hasMore={this.state.articles.length !== this.state.totalResults}
                loader={<h5>Loading</h5>}
                >
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <Newsitem title={element.title} description={element.description} imageUrl={element.urlToImage ? element.urlToImage : "https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg"} newsUrl={element.url} date={element.publishedAt} newsSource = {element.source.name} />
                        </div>
                    })}
                </div>
                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between my-5">
                    <button disabled = {this.state.page<=1} type="button" onClick={this.handlePrevClick} className="btn btn-dark">Previous</button>
                    <button type="button" disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)} onClick={this.handleNextClick} className="btn btn-dark">Next</button>
                </div> */}
            </div>
        )
    }
}