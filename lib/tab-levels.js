'use babel';

import { CompositeDisposable } from 'atom'

export default {

  subscriptions: null,

  activate() {
    this.subscriptions = new CompositeDisposable()

    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'tab-levels:tab1x': () => this.tab1x(),
      'tab-levels:tab2x': () => this.tab2x(),
      'tab-levels:tab3x': () => this.tab3x(),
      'tab-levels:tab4x': () => this.tab4x()
    }))
  },

  deactivate() {
    this.subscriptions.dispose()
  },

  tab1x() {
    let editor
    if (editor = atom.workspace.getActiveTextEditor()) {
      let selection = editor.getSelectedText()
      let level = "\t".repeat(1)
      let tab1x = selection.replace(/\t/g, "")
      tab1x = level + tab1x
      editor.insertText(tab1x)
    }
  },

  tab2x() {
    let editor
    if (editor = atom.workspace.getActiveTextEditor()) {
      let selection = editor.getSelectedText()
      let level = "\t".repeat(2)
      let tab2x = selection.replace(/\t/g, "")
      tab2x = level + tab2x
      editor.insertText(tab2x)
    }
  },

  tab3x() {
    let editor
    if (editor = atom.workspace.getActiveTextEditor()) {
      let selection = editor.getSelectedText()
      let level = "\t".repeat(3)
      let tab3x = selection.replace(/\t/g, "")
      tab3x = level + tab3x
      editor.insertText(tab3x)
    }
  },

  tab4x() {
    let editor
    if (editor = atom.workspace.getActiveTextEditor()) {
      let selection = editor.getSelectedText()
      let level = "\t".repeat(4)
      let tab4x = selection.replace(/\t/g, "")
      tab4x = level + tab4x
      editor.insertText(tab4x)
    }
  }

};
