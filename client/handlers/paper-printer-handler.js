function content_print(element) {
  if (element) {
    var restoreStyle = element.style

    element.style.position = 'fixed'
    element.style.left = 0
    element.style.top = 0
    element.style.width = '100%'
    element.style.height = '100%'

    window.print()

    element.style = restoreStyle
  } else {
    window.print()
  }
}

export async function paperPrinterHandler(printer, { accept, content, name, options }) {
  /* content should be a element */
  const element = typeof content == 'function' ? await content.call() : content

  content_print(element)

  return true
}
