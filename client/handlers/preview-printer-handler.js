export async function previewPrinterHandler(printer, { accept, content, name, options }) {
  /* content should be a element */
  const element = typeof content == 'function' ? await content.call() : content

  if (element && element.updateContext) {
    element.updateContext({ fullbleed: true })
    await element.updateComplete
  }

  window.print()

  if (element && element.updateContext) {
    element.updateContext()
  }

  return true
}
