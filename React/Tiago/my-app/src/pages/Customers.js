import { useEffect,  useState } from "react"
import axios from "axios"
import Grid from '@mui/material/Grid'
//import { styled } from '@mui/material/styles'
//import Paper from '@mui/material/Paper'


import CustomersCard from "../componentes/CustomersCards"


const Customers = () => {

    const [customers, setCustomers] = useState([])

    useEffect(() => {
        axios.get('https://reqres.in/api/users')
            .then(response => {
                const {data} = response.data
                setCustomers(data)
            })
    },[])

    const handleRemoveCustomer = () => {
        alert('ok, remover customers')
    }

    return(
         <Grid container >
            {
                customers.map(item => (
                    <Grid item xs={12} md={4} sx={{padding:'2px'}}   key={item.id}>
                        <CustomersCard 
                            id={item.id}
                            name={item.first_name}
                            lastname={item.last_name}
                            email={item.email}
                            avatar={item.avatar}
                            onRemoveCustomer={handleRemoveCustomer}
                        />
                    </Grid>
                ))
            }

        </Grid>    
    )
}

export default Customers