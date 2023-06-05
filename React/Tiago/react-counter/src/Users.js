import { useEffect, useState } from "react"
import Header from './Header'


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
            <Header title='Usuários'/>
        
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