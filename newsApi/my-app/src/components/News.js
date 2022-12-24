import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {

    static defaultProps = {
        country: 'in',
        category : "sports"
      }
    
    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string

    }



    constructor(){
        super();
        console.log("Hello there")
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            pagesize:5,
            
        }
    }

    async componentDidMount(){
        console.log("cdm")
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=197d5b96290e4fb2a2d2444e21fcd59b&pagesize=5&page=1`
        let data = await fetch(url)
        let predata = await data.json()
        console.log(predata)
        this.setState({articles: predata.articles})
    }

     nextbutton = async () => {
        console.log("cdm")
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=197d5b96290e4fb2a2d2444e21fcd59b&pagesize=${this.state.pagesize}&page=${ this.state.page + 1 }`
        let data = await fetch(url)
        let predata = await data.json()
        console.log(predata)
        this.setState({articles: predata.articles, page: this.state.page + 1 
       
        })

    }
    prebutton = () => {

    }

  render() {
    return (
       
        
        <div class="container my-3 ">
            <h1>News here</h1>
            {this.state.loading && <Spinner/>}
            <div className="row">
            {this.state.articles.map((e)=>{
                 return   <div className="col-md-4" key={e.url}>
                    <NewsItems title = {e.title?e.title.slice(0,45):""} des= {e.description?e.description.slice(0,45):""} author= {e.author} date1={e.publishedAt} img= { e.urlToImage} newsUrl = {e.url}/>
                    </div>
                
            })}
            <div className="container d-flex justify-content-between">
            <button type="button" class="btn btn-dark"onClick={this.prebutton} >&larr; Previous</button>
            <button type="button" class="btn btn-dark" onClick={this.nextbutton}>Next &rarr;</button>
            
            </div>
        
            </div>
        </div>
     
    )
  }
}

export default News