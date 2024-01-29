import 'bootstrap/dist/css/bootstrap.css';
function Newsrow({ news }) {
    return (
        <>
        <div class="card1">
            <img src={news.urlToImage} style={{width:'100%'}} class="card-img-top"/>
                <div class="body">
                    <h5 class="cardTitle">{news.title}</h5>
                    <p class="card-text">{news.description}</p>
                    <div className='arrow'>Read full article</div><a href={news.url} class="link"><img src="arrow.png"/></a>
                </div>
        </div>
        </>
    )
}

export default Newsrow;