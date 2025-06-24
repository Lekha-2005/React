import React,{useEffect,useState} from 'react';
import { Newsitem } from './Newsitem.jsx';

export const NewsBoard = ({category}) => {

    const [articles,setArticles]=useState([]);
    useEffect(() => {
      fetch(`/.netlify/functions/news?category=${category}`)
        .then(res => res.json())
        .then(data => setArticles(data.articles || []))
        .catch(err => console.error(err));
    }, [category]);

    console.log(articles);
    


  return (
    <div>
        <h2 className ="text-center">Latest News</h2>
        {articles.map((news,index)=>{
            return <Newsitem key={index} title={news.title}
            description={news.description} src={news.urlToImage}
            url={news.url}
            />
        })}
    </div>
  )
}
