import { ipcMain } from 'electron'
import { getClientInfo } from './getClientInfo'

export default (win) => {
  ipcMain.handle('getClientInfo', (e, data) => getClientInfo(e, data, win))
  // ipcMain.on('stop', () => {
  //   ffmpeg.stop()
  // })
  //
  // ipcMain.handle('selectDirectory', async () => {
  //   return selectDirectory()
  // })
}
