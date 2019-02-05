import React from 'react';
import {connect} from 'react-redux';
import selectItem from '../actions';

class MenuList extends React.Component {

    renderList() {
        return this.props.menu.map((m) => {
            return (
                <div className="item" key={m.id}>
                    <div className="right floated content">
                        <button className="ui button primary" onClick={()=>this.props.selectItem(m)}>Show Details</button>
                    </div>
                    <div className="content"><h1>{m.title}</h1></div>
                    <div><img src = {m.imgsrc}/></div>
                </div>
            );
        });
        
    }
    render () {
        return <div className="ui divided list">{this.renderList()}</div>;
    }
}

const mapStateToProps = (state) => {
    return {menu: state.menu};
}
export default connect(mapStateToProps, {
    selectItem: selectItem
})(MenuList);