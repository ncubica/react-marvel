import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import player_add_action from '../../actions/players/player_add_action';
import show_alert_action from '../../actions/alert/show_alert_action';

import HeroItem from './hero_results_item';

class HeroDetail extends Component {
  constructor(props) {
    super(props);
  }

  onClickHandler(hero) {
    if (hero) {
      this.props.add_player(hero);
      this.props.show_alert('Hello')
      alert(
        "We added a super hero, go and see the 'my heroes' tab. \n\n - sorry for this horrible alert, need more UX/UI :P -"
      );
    }
  }

  renderResults() {
    if (this.props.currentHero) {
      let heroes = this.props.currentHero;
      return heroes.map(hero => {
        return (
          <div className="card" key={hero.id}>
            <HeroItem
              name={hero.name}
              image={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
            />
            <button onClick={this.onClickHandler.bind(this, hero)}>
              <i className="fa fa-plus" aria-hidden="true" />
            </button>
          </div>
        );
      });
    }
  }

  render() {
    return <div>{this.renderResults()}</div>;
  }
}

function mapStateToProps(state) {
  return {
    currentHero: state.currentHero,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { add_player: player_add_action, show_alert: show_alert_action },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroDetail);
