import React, {Component} from 'react';
import HeroSearch from './hero_search';
import HeroResults from './hero_results';

export default class Hero extends Component {
    componentWillMount() {

    }

    constructor(props) {
        super(props);
        //initialize state
        
    }

    //Todo : research how to set a className to a custom Component
    render() {
        return (
            <div>
                <HeroSearch />
                <div className="cards">
                    <HeroResults />
                </div>
            </div>
        );
        
    }
}