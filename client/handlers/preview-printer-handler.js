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

export function previewPrinterHandler(printer, { accept, content, name, options }) {
  /* content should be a element */
  const element = typeof content == 'function' ? content.call() : content

  content_print(element)
}
