import React from 'react';
import dialogPolyfill from 'dialog-polyfill'

if (window.HTMLDialogElement === undefined) {
  import('dialog-polyfill/dialog-polyfill.css');
}

export function useDialogPolyfill(ref) {
  React.useLayoutEffect(() => {
      dialogPolyfill.registerDialog(ref.current)
  }, [ref])
}
