import baseApi from './config'


export async function ExtractData(payload) {
  return baseApi.get('/extract', payload)
  .then(response => {

    return response.data
  })
  .catch(error => {
    alert(error.response.data)
  });
  
}


export async function ExtractDelete(id) {
  console.log(id)
  return baseApi.delete(`/extract/${id}`)
  .then(response => {

    return response.data
  })
  .catch(error => {
    alert(error.response.data)
  });
  
}


