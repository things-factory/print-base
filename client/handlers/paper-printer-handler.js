function content_print(targetElement) {
  if (targetElement) {
    /* TODO clear window onxxxxprint handlers */
    var initBody = document.body.innerHTML

    window.onbeforeprint = function() {
      document.body.innerHTML = targetElement.innerHTML
    }

    window.onafterprint = function() {
      document.body.innerHTML = initBody
    }
  }

  window.print()
}

export function paperPrinterHandler(printer, { accept, content, name, options }) {
  /* content should be a element */
  content = typeof content == 'function' ? content.call() : content

  content_print(content)
}
