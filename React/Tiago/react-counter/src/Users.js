import { useEffect, useState } from "react"

const Users = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data)
            })
    },[])

    return(
        <>
            <h1>users</h1>
            {
                users.map(user => {
                    return(
                        <div style={{margin:'10px'}}>
                            <b>Nome:</b> {user.name}<br/>
                            <b>E-mail:</b> {user.email}<br/>
                            <b>Telefone:</b> {user.phone}<br/>
                            <b>Site:</b> {user.website}<br/>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Users