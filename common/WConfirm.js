class WConfirm extends ZDialog {
    onThis_init(options) {
        if (options.title) this.title.text = options.title;
        if (options.message) this.msg.text = options.message;
    }
    onCmdOk_click() {this.close()}
    onCmdCancel_click() {this.cancel()}
}
ZVC.export(WConfirm);