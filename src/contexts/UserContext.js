import React, { createContext, useContext, useReducer } from 'react';



export const UserContext = createContext(null);

export default ({children}) => {
    const [data, dispatch] = useReducer(DataReducer, initialData);

    return (
        <UserContext value={{data, dispatch}}>
            {children}
        </UserContext>
    );
}

const DataReducer = (data, action) => {
  switch(action.type) {
    case 'login': {
      return {...data,
        name: action.payload.name,
        doc: action.payload.doc,
        weekly: action.payload.weekly,
        alterations: action.payload.alterations
      };
    }
    case 'logoff': {
      return {...data, 
        name: '',
        doc: '',
        weekly: [],
        alterations: []
      };
    }
    case 'reschedule': {
      return {...data,
        alterations: [...data.alterations, action.payload.alterations]
      };
    }
    case 'clearSchedule': {
      return {...data,
        alterations: data.alterations.filter(d => d !== action.payload.alterations)
      };
    }
    
    default:
      console.log('não foi')
      return data;
    }
}

const initialData = {
  name: '',
  doc: '',
  weekly: [],
  alterations: []
};
