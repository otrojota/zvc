class DialogEditing extends ZCustomController {
    onThis_init() {
        this.codeBrowser.showController(this.demo6);
        this.codeBrowser2.showDialog("bs/content/table/WEdCustomer");
    }
}
ZVC.export(DialogEditing);