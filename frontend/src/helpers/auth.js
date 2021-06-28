import api from '../services/api'

export const logUserIn = async ({ email, password }) => {
  const { data } = await api.post('token/', {
    username: email,
    password,
  })

  return data
}
