class Introduction extends ZCustomController {
    onThis_init() {
        this.codeBrowser.showJS("bs/content/repeater/CustomersModel2.js");
        this.codeBrowser2.showController(this.textSearch);
    }
}
ZVC.export(Introduction);