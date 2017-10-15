import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import PlayerItem from './players_item';
import player_remove_action from '../../actions/players/player_remove_actions';
import player_save_action from '../../actions/players/players_save_action';
import '../styles/players.css';

class Players extends Component {
    handleRemovePlayer(player) {
        this.props.remove_player(player.id);
    }

    handleSavePlayers = () => {
        const players = _.map(this.props.myPlayers, player => player.name);
        this.props.save_players(players);
    };

    renderPlayers() {
        if (Object.keys(this.props.myPlayers).length > 0) {
            return _.map(this.props.myPlayers, player => {
                return (
                    <div key={player.id} className="Players__playerContainer">
                        <PlayerItem name={player.name} />
                        <button
                            onClick={this.handleRemovePlayer.bind(this, player)}
                            className="redRemove">
                            <i className="fa fa-times" aria-hidden="true" />
                        </button>
                    </div>
                );
            });
        } else {
            return <div className="noResults">No super heroes yet!</div>;
        }
    }

    render() {
        return (
            <div className="Players">
                {this.renderPlayers()}
                {Object.keys(this.props.myPlayers).length > 0 && (
                    <button className="black" onClick={this.handleSavePlayers}>
                        Save
                    </button>
                )}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        myPlayers: state.myPlayers
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            remove_player: player_remove_action,
            save_players: player_save_action
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Players);
