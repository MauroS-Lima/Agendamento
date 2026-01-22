import React, { createContext, useContext, useReducer } from 'react';

import Users from '../MockData/Users'

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
        pacientes: action.payload.pacientes,
        users: action.payload.pacientes
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
        alterations: data.alterations.push(action.payload.alterations)
      };
    }
    case 'scheduleRemove': {
      return {...data,
        alterations: data.alterations.filter(d => d.user !== action.payload.alterations.user & d.time !== action.payload.alterations.time )
      };
    }

    case 'addUser': {
      return {...data,
        users: data.users.push(action.payload.users)
      };
    }

    case 'removeUser': {
      return {...data,
        users: data.users.filter(d => d.name !== action.payload.users)
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
  pacientes: [],
  users: Users
};
