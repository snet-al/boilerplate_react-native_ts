import {io} from 'socket.io-client'

import {store} from '@/store/redux'
import {SOCKET_URL} from '@/utils/constants'

const instance = io(SOCKET_URL, {
  auth: {
    token: store.getState().auth.accessToken,
  },
})

export class SocketClient {
  static instance = instance

  static on(event: string, callback: (...args: unknown[]) => void) {
    return this.instance.on(event, callback)
  }

  static off(event: string, callback: (...args: unknown[]) => void) {
    return this.instance.off(event, callback)
  }

  static emit(event: string, ...args: unknown[]) {
    return this.instance.emit(event, ...args)
  }
}

export default SocketClient
