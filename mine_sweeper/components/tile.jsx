import React from 'react';
import {Tile as TileLogic} from '../minesweeper'

class Tile extends React.Component {
    constructor(props){
        super(props);
        
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        if (e.altKey) {
            this.props.updateGame(this.props.tile, true);
        }else{
            // debugger;
            this.props.updateGame(this.props.tile, false);
        }
    }


    render () {
        let className = "tile ";
        let unicode = "";

        // if (this.props.tile.bombed){
        //     className += "bombed";
        //     unicode += "💣";
        if (this.props.tile.explored) {
            if (this.props.tile.bombed) {
                className += "bombed";
                unicode += "💣";
            } else {
                className += "revealed";
                unicode += this.props.tile.adjacentBombCount().toString();
            }
        } else if (this.props.tile.flagged) {
            className += "flagged";
            unicode += "🚩";
        }

        return (
            <div onClick={this.handleClick} className={className}>{unicode}
            </div>
        )
    }
}

export default Tile;