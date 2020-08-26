import { createStore, compose, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducers from "./reducers";

/* Middlewares */
import authMiddleware from "./middlewares/authMiddleware";
import expressionsMiddleware from "./middlewares/Admin/expressionsMiddleware";
import statsHomeMiddleware from "./middlewares/statsHomeMiddleware";
import { irecordsMiddleware } from "./middlewares/irecordsMiddleware";
import { loginAdminMiddleware } from "./middlewares/Admin/loginAdminMiddleware";
import { usersMiddleware } from "./middlewares/usersMiddleware";
import { languagesMiddleware } from "./middlewares/languagesMiddleware";
import { statsMiddleware } from "./middlewares/Admin/statsMiddleware";

// Configuration object for redux-persist
const persistConfig = {
    key: "root",
    whitelist: ["user", "loginAdminReducer"],
    storage, // define which storage to use
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
    applyMiddleware(
        authMiddleware,
        expressionsMiddleware,
        loginAdminMiddleware,
        irecordsMiddleware,
        usersMiddleware,
        languagesMiddleware,
        statsMiddleware,
        statsHomeMiddleware
    )
);

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = createStore(persistedReducer, enhancers);

const persistor = persistStore(store);

export { store, persistor };
