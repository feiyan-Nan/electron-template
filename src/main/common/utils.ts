import osName from 'os-name'
import { ip, ipv6, mac } from 'address'
export const getOsVersion = () => {
  return osName()
}


export async function getMacAddresses() {
  return new Promise((resolve) => {
    mac((_err, addr) => {
      resolve(addr)
      console.log('addr', addr) // '78:ca:39:b0:e6:7d'
    })
  })
}

export function getLocalIp() {
  console.log('IP地址: ', ip(), 'ipv6: ', ipv6())
  return ip()
}

