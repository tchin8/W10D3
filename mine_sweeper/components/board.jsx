import React from 'react';
import Tile from './tile';

class Board extends React.Component {
    constructor (props) {
        super(props)
    }

    render() {
        const rows = this.props.board.grid.map((row, index) => (
            <div key={index} className="row">
                {row.map((tile, index2) => (
                    <Tile tile={tile} key={index2} updateGame={this.props.updateGame} />
                ))}
            </div>
        ));

        return (
            <div className="board">
                {rows}
            </div>
        )
    }
};

export default Board;