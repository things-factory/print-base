import { store } from '@things-factory/shell'
import { i18next } from '@things-factory/i18n-base'

export const UPDATE_PRINTER = 'UPDATE_PRINTER'
export const APPEND_PRINTER = 'APPEND_PRINTER'
export const REGISTER_PRINTER_TYPE = 'REGISTER_PRINTER_TYPE'

export function print(printer, printable) {
  const { type } = printer
  const handler = store.getState().print.printerTypes[type]

  try {
    handler.call(null, printer, printable)
    document.dispatchEvent(
      new CustomEvent('notify', {
        detail: {
          type: 'info',
          message: i18next.t('text.printed')
        }
      })
    )
  } catch (e) {
    document.dispatchEvent(
      new CustomEvent('notify', {
        detail: {
          type: 'error',
          message: e,
          e
        }
      })
    )
  }
}
