import React, {Component} from 'react';
import {connect} from 'react-redux';
import PlayerItem from './players_item';
import player_remove_action from '../../actions/players/player_remove_actions';
import {bindActionCreators} from 'redux';

import _ from 'lodash';

class Players extends Component {
    
    onClickHandler(player) {
        this.props.remove_player(player.id);
    }
    
    renderPlayers() {
        if(Object.keys(this.props.myPlayers).length > 0) {
           return _.map(this.props.myPlayers, (player)=> {
               return (
                    <div key={player.id}>
                        <PlayerItem name={player.name} />
                        <button onClick={this.onClickHandler.bind(this, player)}>Remove</button>
                    </div>
               );
            });
        }else {
            return (<div className="noResults">
                No super heroes yer!
            </div>);
        }
    }

    render() {
        return (<div>{this.renderPlayers()}</div>);
    }
}

function mapStateToProps(state) {
    return {
        myPlayers : state.myPlayers
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({remove_player : player_remove_action}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Players);