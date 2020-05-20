import React from 'react';
import Board from './board';

import {Tile as TileLogic, Board as BoardLogic} from '../minesweeper';

class Game extends React.Component {
    constructor(props){
        super(props);
        const board = new BoardLogic(10,15);
        this.state = {board: board};

        this.updateGame = this.updateGame.bind(this);
        this.restartGame= this.restartGame.bind(this);
    }

    updateGame(tile, flagged){
        if(flagged){
            // debugger;
            tile.toggleFlag();
        }else{
            // debugger;
            tile.explore();
        }
        this.setState({ board: this.state.board });
    }

    restartGame(){
        const newBoard = new BoardLogic(10,15);
        this.setState({ board: newBoard })
    }

    render(){
        let className = "modal ";
        let message = "";
        if (this.state.board.won() || this.state.board.lost()){
            if (this.state.board.won()){
                message += "you won! :)";
            }else{
                message += "you lost :(";
            };
            className += "over";
        }

        return(
            
            <div>
                <h1 className="name">💣Minesweeper💣</h1>
                <Board board={this.state.board} updateGame={this.updateGame}/>
                <div className={className}>

                    <div className="modal-content">
                        <div>{message}</div>
                        <button onClick={this.restartGame}>Play Again!</button>
                    </div>
                    
                    <div className="modal-screen"></div>  
                    
                </div>
            </div>
            
        )
        
    }

}

export default Game;