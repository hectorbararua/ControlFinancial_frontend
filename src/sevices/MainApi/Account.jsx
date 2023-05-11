import baseApi from './config'


export function AccountData() {
  return baseApi.get('/account')
  .then(response => {

    return response.data
  })
  .catch(error => {
    alert(error.response.data)
  });
  
}


export function Transaction(payload) {
  return baseApi.patch('/account', payload)
  .then(response => {

    return response.data
  })
  .catch(error => {

    alert(error.response.data)

  });
  
}



