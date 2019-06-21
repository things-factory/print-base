function content_print(targetElement) {
  if (targetElement) {
    let popup = window.open('', '_blank')

    popup.document.write('<body>')
    popup.document.write(targetElement.innerHTML)
    popup.document.write('</body>')

    popup.document.close()

    popup.print()
  } else {
    window.print()
  }
}

export function previewPrinterHandler(printer, { accept, content, name, options }) {
  /* content should be a element */
  const element = typeof content == 'function' ? content.call() : content

  content_print(element)
}
