import { useEffect, useState } from "react"
import Header from'./Header'

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
            <Header title='Albuns'/>

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