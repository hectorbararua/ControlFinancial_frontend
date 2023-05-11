import baseApi from './config'


export function UserRegister(payload) {

  return baseApi.post('/user', payload)
  .then(response => {

    window.location.href = '/'
      return response.data
  })
  .catch(error => {
    alert(error.response.data)
  });
  
}


export function UserUpdate(payload) {

  return baseApi.patch('/user', payload)
  .then(response => {

    window.location.href = '/account'
      return response.data
  })
  .catch(error => {

    alert(error.response.data)
  });
}


export function UserLogin(payload) {

  return baseApi.post('/user/login', payload)
  .then(response => {

    
    window.location.href = '/account'
      return response.data
  })
  .catch(error => {
    alert(error.response.data.message)
  });



  
}

