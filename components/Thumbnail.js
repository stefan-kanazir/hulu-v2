import Image from 'next/image';

function Thumbnail( result ) {
    return (
        <div>
            <Image 
                layout = 'resposnive'
                src= {
                    `${BASE_URL}${result.backdrop_path || result.poster_path}` || 
                    `${BASE_URL}${result.backdrop_path}`
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
