import { useRouter } from 'next/router';
import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
} from 'react';

export const StoreDispatchContext = createContext(({}));
export const StoreStateContext = createContext(({}));

/* if a state is added here it has to be added
 in vars "savedInitialState" and "savedstate" (in a useEffect) too! */
const initialState = {
  isAuthenticated: false,
  user: null,
  moderation_state: null,
  message: null,
  component: null,
  badge: null,
  notifications: [],
};

function reducer(state, { payload, type }) {
  switch (type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        moderation_state: null,
        badge: null,
        notifications: [],
      };
    case 'SET_MESSAGE':
      return {
        ...state,
        message: payload,
      };
    case 'REMOVE_MESSAGE':
      return {
        ...state,
        message: null,
      };
    case 'ADD_COMPONENT':
      return {
        ...state,
        component: payload,
      };
    case 'REMOVE_COMPONENT':
      return {
        ...state,
        component: null,
      };
    case 'UPDATE_AVATAR':
      return {
        ...state,
        user: payload,
      };
    case 'UPDATE_USER_BADGE':
      return {
        ...state,
        user: payload,
      };
    case 'UPDATE_BADGE':
      return {
        ...state,
        badge: payload,
      };
    case 'UPDATE_NOTIFICATIONS':
      return {
        ...state,
        notifications: payload,
      };
    case 'UPDATE_MODERATION_STATE':
      return {
        ...state,
        moderation_state: payload,
      };
    case 'LOADED':
      console.log("THE UPDATED STATE");
      console.log({...payload});
        return {
         ...payload,
      };
    default:
      throw new Error(`Unhandled action type ${type}`);
  }
}

function StoreProvider({
  children,
}) {
  const router = useRouter();
  let savedInitialState = {
    user: initialState.user,
    isAuthenticated: initialState.isAuthenticated,
    moderation_state: initialState.moderation_state,
    badge: initialState.badge,
    notifications: initialState.notifications,
  };
  let savedlocalState = null;
  useEffect(()=>{
    	console.log("On render use effect");
      savedlocalState = JSON.parse(localStorage.getItem('brickboardUser'));
      if (savedlocalState === null || !savedlocalState.isAuthenticated) {
        localStorage.setItem('brickboardUser', JSON.stringify(savedInitialState));
        savedlocalState = savedInitialState;
      }
      dispatch({ type: 'LOADED', payload: savedlocalState });
  },[])
     
    const [state, dispatch] = useReducer(reducer, { user: null, message: null });   
    const setMessage = (message) => {
      dispatch({ type: 'SET_MESSAGE', payload: message });
      setTimeout(() => {
        dispatch({ type: 'REMOVE_MESSAGE', payload: null });
      }, 3000);
    };

    const removeMessage = () => {
      dispatch({ type: 'REMOVE_MESSAGE', payload: null });
    };

    const addComponent = (component) => {
      dispatch({ type: 'ADD_COMPONENT', payload: component });
    };

    const removeComponent = () => {
      dispatch({ type: 'REMOVE_COMPONENT', payload: null });
    };

    return (
      <StoreDispatchContext.Provider
        value={{
          setMessage,
          removeMessage,
          addComponent,
          removeComponent,
        }}
      >
        <StoreStateContext.Provider value={state}>
          {children}
        </StoreStateContext.Provider>
      </StoreDispatchContext.Provider>
    );
}

function useStoreDispatch() {
  const context = useContext(StoreDispatchContext);

  if (context === undefined) {
    throw new Error(
      'useStoreDispatch is not working, use it within an StoreProvider',
    );
  }
  return context;
}

function useStoreState() {
  const context = useContext(StoreStateContext);

  if (context === undefined) {
    throw new Error(
      'useStoreDispatch is not working, use it within an StoreProvider',
    );
  }
  return context;
}

export { StoreProvider, useStoreDispatch, useStoreState };
