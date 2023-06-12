import { useEffect,  useState } from "react"
import axios from "axios"
import Grid from '@mui/material/Grid'
//import { styled } from '@mui/material/styles'
//import Paper from '@mui/material/Paper'


import CustomersCard from "../componentes/CustomersCards"

// const useStyles = styled(Paper)(({ theme }) => ({
//      backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//      ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//      color: theme.palette.text.secondary,
//      card: {
//         paddind: theme.spacing(2),
//      }
//   }));


const Customers = () => {

    // const classes = useStyles()

    const [customers, setCustomers] = useState([])

    useEffect(() => {
        axios.get('https://reqres.in/api/users')
            .then(response => {
                const {data} = response.data
                setCustomers(data)
            })
    },[])

    return(
         <Grid container >
            {
                customers.map(item => (
                    <Grid item xs={12} md={4} sx={{padding:'2px'}}   key={item.id}>
                        <CustomersCard 
                            name={item.first_name}
                            lastname={item.last_name}
                            email={item.email}
                            avatar={item.avatar}
                        />
                    </Grid>
                ))
            }

        </Grid>    
    )
}

export default Customers