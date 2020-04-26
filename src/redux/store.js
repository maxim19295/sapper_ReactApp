import { combineReducers, createStore } from "redux";
import gameSettingsReducer from "./gameSettingsReducer";
import gameReducer from "./gameReducer";
import historyReducer from "./historyReducer";

const reducers = combineReducers({
    gameSettings: gameSettingsReducer,
    game: gameReducer,
    history: historyReducer
});
const store = createStore(reducers);
window.store=store;
export default store;