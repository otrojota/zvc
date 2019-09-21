class InlineEditing extends ZCustomController {
    onThis_init() {
        this.codeBrowser.showController(this.demo7);
        this.codeBrowser2.showDialog("bs/content/table/PEdCustomer");
    }
}
ZVC.export(InlineEditing);