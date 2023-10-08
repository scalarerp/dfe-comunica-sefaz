import axios from 'axios'

export const httpInstance = (showLoading = false, firstToken = '') => {
  const instance = axios.create({
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
    },
  })

  let token = firstToken !== '' ? firstToken : ''

  instance.defaults.timeout = 20000

  if (token) {
    instance.defaults.headers.common['Authorization'] = `Basic ${token}`
  } else {
    instance.defaults.headers.common['Authorization'] = ''
  }

  instance.defaults.headers.common['Accept-Language'] = 'pt'

  instance.interceptors.request.use(
    (request) => {
      return request
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  instance.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  return instance
}
