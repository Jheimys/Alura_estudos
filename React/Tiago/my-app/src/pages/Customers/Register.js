import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


const Registe = () => {
    return(
        <>  
            <Stack direction="column" spacing={3}>
                <TextField  id="outlined-basic" label="Digite o seu nome" variant="outlined" />

                <TextField id="outlined-basic" label="Digite o seu Cargo" variant="outlined" />

                <Button sx={{width:'150px'}} variant="contained">Cadastrar</Button>
        
            </Stack>


        </>
    )
}

export default Registe