import image from '../assets/news.jpg';

export const Newsitem = ({title,description,src,url}) => {
  return (
  <div className="card mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px"}}>
  <img src={src ? src:image} styel={{height :"200px" , width:"360px"}} className="card-img-top"/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description ? description.slice(0,90):"current live news: Check out the information in new channel"}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
  )
}
