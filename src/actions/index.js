const selectItem = item => {
    return {
        type: 'ITEM_SELECTED',
        payload: item
    }
}

export default selectItem;