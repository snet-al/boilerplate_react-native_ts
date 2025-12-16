import {HttpClient} from '@/libs/http/http-client'
import {User} from '@/types/user'

class UserService {
  getUser = async () => HttpClient.get<User>('/user')

  save = async (user: User) => HttpClient.post<User>('/user', user)
}

export default new UserService()
