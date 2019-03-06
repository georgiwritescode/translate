import React from 'react'
import UserCreate from './UserCreate';
import LanguageContect from '../contexts/LanguageContext';

class App extends React.Component {
    state = { language: 'english' };
    onLanguageChange = (language) => {
        this.setState({ language })
    }

    render() {
        return (
            <div className="ui container">
                <div>
                    Select a language:
                    <i className="us flag" onClick={() => this.onLanguageChange('english')} />
                    <i className="nl flag" onClick={() => this.onLanguageChange('dutch')} />
                </div>
                <LanguageContect.Provider value={this.state.language}>
                    <UserCreate />
                </LanguageContect.Provider>
            </div>
        )
    }
}

export default App;