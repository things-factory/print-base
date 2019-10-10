function content_print(element) {
  if (element) {
    var restoreStyle = element.style

    element.style.position = 'fixed'
    element.style.left = 0
    element.style.top = 0
    element.style.width = '100vw'
    element.style.height = '100vh'

    window.print()

    element.style = restoreStyle
  } else {
    window.print()
  }
}

import { sleep } from '@things-factory/shell'

export async function previewPrinterHandler(printer, { accept, content, name, options }) {
  /* content should be a element */
  const element = typeof content == 'function' ? content.call() : content

  if (element && element.updateContext) {
    element.updateContext({ fullbleed: true })
    await sleep(1)
  }

  await content_print(element)

  if (element && element.updateContext) {
    element.updateContext()
  }

  return true
}
