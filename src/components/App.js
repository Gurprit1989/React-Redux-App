import React from 'react';
import MenuList from './MenuList';
import ItemDetail from './ItemDetail';

const App = () => {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide">
                    <MenuList/>
                </div>
                <div className="column eight wide">
                    <ItemDetail/>
                </div>
            </div>
        </div>
    )
}

export default App;