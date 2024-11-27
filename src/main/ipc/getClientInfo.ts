import { getLocalIp, getMacAddresses } from '../common/utils'
import osName from 'os-name'

export const getClientInfo = async (e, data, win) => {
  // console.log("getClientInfo", e, data, win);
  setTimeout(() => {
    e.sender.send('clientInfo', 'hello from main process (clientInfo)')
  }, 3000)
  return {
    ip: getLocalIp(),
    osName: osName(),
    mac: await getMacAddresses()
  }
}
