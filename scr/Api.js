const BASE_API ='';

export default{
  checkToken: async(token)=>{
    const req = await fetch('${BASE_API}/auth/refresh',{
      method: 'POST',
      header:{
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({token})
    });
    const json = await req.json();
    return json;
  },
  signIn: async(user, password)=>{
    const req = await fetch('${BASE_API}/auth/login',{
      method: 'POST',
      headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user, password})
    });
    const json = await req.json();
    return json;
  },
  newUser: async(user, password)=>{
    const req = await fetch('${BASE_API}/auth/user',{
      method: 'POST',
      headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user, password})
    });
    const json = await req.json();
    return json;

  },
}
