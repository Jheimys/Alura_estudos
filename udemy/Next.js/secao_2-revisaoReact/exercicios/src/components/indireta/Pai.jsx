import Filho from   './Filho'


const Pai = () => {

    function falarComigo(param){
        console.log(param)
        console.log('fala comigo')
    }
    return(
        <div>
            <Filho function={falarComigo} />
        </div>
    )
}

export default Pai