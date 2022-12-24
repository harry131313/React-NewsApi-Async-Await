import React, { Component } from 'react'

export class NewsItems extends Component {



  render() {
    let {title, des, img, newsUrl, author, date1} = this.props
    return (
      <>
        <div class="container my-3 ">
        <div className="card" >
            <img src={!img? "https://image.cnbcfm.com/api/v1/image/107125658-1664368085076-gettyimages-1241038518-city_skyline-01-24-05-2022.jpeg?v=1665981234&w=1920&h=1080": img} className="card-img-top" alt="..." />
            <div className="card-body" >
                <h5 className="card-title"> {title}</h5>
                <p className="card-text">{des}</p>
                <a href={newsUrl} target="_blank" className="btn btn-primary">Go somewhere</a>
                <p class="card-text"><small class="text-muted">{author} By {date1}</small></p>
            </div>
            </div>
      </div>
      </>
    )
  }
}

export default NewsItems