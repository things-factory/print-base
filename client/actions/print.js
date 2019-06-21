import { store } from '@things-factory/shell'

export const UPDATE_PRINTER = 'UPDATE_PRINTER'
export const APPEND_PRINTER = 'APPEND_PRINTER'
export const REGISTER_PRINTER_TYPE = 'REGISTER_PRINTER_TYPE'

export function print(printer, printable) {
  const { type } = printer
  const handler = store.getState().print.printerTypes[type]

  handler.call(null, printer, printable)
}
