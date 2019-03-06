import React from 'react'
import LanguageContect from '../contexts/LanguageContext';

class Button extends React.Component {
    renderSubmit(value) {
        return value === 'english' ? 'Submit' : 'Voorleggen';
    }

    render() {
        return (
            <button className="ui button primary">
                <LanguageContect.Consumer>
                    {(value) => this.renderSubmit(value)}
                </LanguageContect.Consumer>
            </button>
        )
    }
}

export default Button;