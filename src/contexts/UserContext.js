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
        alterations: action.payload.alterations,
        pacientes: action.payload.pacientes
      };
    }
    case 'logoff': {
      return {...data, 
        name: '',
        doc: '',
      };
    }
    case 'weekly': {
      return {...data,
        weekly:  action.payload.weekly
      };
    }
    case 'reschedule': {
      return {...data,
        alterations: action.payload.alterations
      };
    }
    case 'ScheduleRemove': {
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
  alterations: [],
  pacientes: []
};
