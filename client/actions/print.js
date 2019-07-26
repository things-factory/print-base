import { store } from '@things-factory/shell'

export const UPDATE_PRINTER = 'UPDATE_PRINTER'
export const UPDATE_PRINTERS = 'UPDATE_PRINTERS'
export const APPEND_PRINTER = 'APPEND_PRINTER'
export const REGISTER_PRINTER_TYPE = 'REGISTER_PRINTER_TYPE'

export async function print(printer, printable) {
  const { type } = printer
  const handler = store.getState().print.printerTypes[type]

  /* print는 device 특성을 가지므로, async handler를 전제로 한다. */
  return await handler.call(null, printer, printable)
}
