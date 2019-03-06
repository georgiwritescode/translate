import React from 'react'

class App extends React.Component {
    state = { language: 'english' };

    onLanguageChange = () => {

    }

    render() {
        return (
            <div className="ui container">
                <div>
                    Select a language:
                    <i className="us flag" onClick={() => this.onLanguageChange('english')} />
                    <i className="nl flag" onClick={() => this.onLanguageChange('dutch')} />
                </div>
            </div>
        )
    }
}

export default App;