class WDialog extends ZDialog {
    onCmdCancel_click() {this.cancel()}
    onCmdOk_click() {this.close(this.name.value)}
}
ZVC.export(WDialog);