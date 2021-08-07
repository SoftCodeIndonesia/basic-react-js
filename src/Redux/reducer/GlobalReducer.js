import ActionType from "../ActionType";

const initState = {
    countOrder: 0
}

const rootReducer = (state = initState, action) => {

    switch (action.type) {
        case ActionType.PLUS_ORDER:
            return {
                ...state,
                countOrder: state.countOrder + 1
            }
            break;
        case ActionType.MINUS_ORDER:
            return {
                ...state,
                countOrder: state.countOrder > 0 ? state.countOrder - 1 : 0
            }
            break;
        default:
            return state;
            break;
    }


}

export default rootReducer;