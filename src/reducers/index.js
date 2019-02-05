import {combineReducers} from 'redux';



const menusReducer = () => {
    return [
        {id:1 , title: 'Hamburgers', type: 'Daves singh', description: 'Chicken Hamburger', imgsrc: 'https://app.wendys.com/unified/assets/menu/productGroups/121_medium_US_en.jpg'},
        {id:2, title: 'Chicken wrap & more',type: 'Daves singh', description: 'Bacon Maple Chicken Sandwich', imgsrc: 'https://app.wendys.com/unified/assets/menu/productGroups/123_medium_US_en.jpg'},
        {id:3, title: 'Fresh made salad',type: 'Daves singh', description: 'Harvest Chicken Salad', imgsrc: 'https://app.wendys.com/unified/assets/menu/productGroups/124_medium_US_en.jpg'},
        {id:4, title: 'Beverages',type: 'Daves singh', description: 'Small Apple Kiwi Fruit Tea', imgsrc: 'https://app.wendys.com/unified/assets/menu/productGroups/127_medium_US_en.jpg'}
    ];
};

const selectedItemReducer = (menuReducer = null, action) => {
    if(action.type === 'ITEM_SELECTED') {
        return action.payload;
    }

    return menuReducer;
}

export default combineReducers({
    menu: menusReducer,
    selectedItem: selectedItemReducer
})