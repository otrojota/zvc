class Introduction extends ZCustomController {
    onThis_init() {
        this.codeBrowser.showJS("bs/content/table/CustomersModel.js");
        this.codeBrowser2.showController(this.textSearch);
    }
}
ZVC.export(Introduction);