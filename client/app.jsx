
class Connect4 extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            rows = 6,
            cols = 7,
            selector = selector,
            isGameOver = false

        };
    }
    handleClick (e){

    }

    render(){
        return(
            <div className="grid-container">
                {cells.map((cell, index) => 
                    <Cell cell ={cell} x={index} y={0}/>
                )}
            </div>
        
            
        )

    }

}




