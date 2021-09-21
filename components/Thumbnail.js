import Image from 'next/image';

function Thumbnail({ result }) {
    const BASE_URL = "https://image.tmdb.org/t/p/original";

    return (
        <div>
            <h1>Thumbnail</h1>
            <Image 
                layout = 'responsive'
                src= {
                    `${BASE_URL}${result.backdrop_path || results.poster_path}` ||
                    `${BASE_URL}${results.poster_path}`
                } 
                height = {1080}
                width = {1920}
                alt = 'Thumbnail Image'
            />

            <div className="p2">
                <p className="truncate max-w-md">{result.overview}</p>
                <h2>
                    {result.title || result.original_name}
                </h2>
            </div>
        </div>
    )
}

export default Thumbnail
