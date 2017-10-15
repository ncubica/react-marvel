import _ from 'lodash';
import React, { Component } from 'react';
import hero_search_action from '../../actions/heroes/hero_search_action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class HeroSearch extends Component {
    componentWillMount() {
        this.debounceSearch = _.debounce(() => {
            this.search();
        }, 100);
    }

    componentDidMount() {
        this.input.focus();
    }

    constructor(props) {
        super(props);
        //initialize state
        this.state = { search: '' };
    }

    search() {
        if (this.state.search) {
            this.props.fetch_hero(this.state.search);
        }
    }

    onChangeHandler(event) {
        let term = event.target.value;
        this.setState({ search: term });
        this.debounceSearch();
    }

    render() {
        return (
            <div>
                <span className="searchHelp">
                    Try searching a super hero (ex. hulk, spider-man, iron-man)
                    :
                </span>
                <input
                    type="search"
                    ref={elem => {
                        this.input = elem;
                    }}
                    onChange={this.onChangeHandler.bind(this)}
                    value={this.state.search}
                    placeholder="Search for a hero"
                />
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetch_hero: hero_search_action }, dispatch);
}

export default connect(null, mapDispatchToProps)(HeroSearch);
