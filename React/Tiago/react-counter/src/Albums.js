import { useEffect, useState } from "react"

const Albums = () => {

    const [albums, setAlbums] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(response => response.json())
            .then(data => {
                setAlbums(data)
            })
    }, [])

    return(
        <>
            <h1>Álbuns</h1>

            {
                albums.map(album => {
                    return(
                        <div>
                            <span>{album.title} - id:{album.id}</span>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Albums