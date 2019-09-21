class BSDialogs extends ZCustomController {
    onThis_init() {
        this.codeBrowser.showController(this.demo);
        this.codeBrowser2.showDialog("bs/content/intro/WDialog1");
    }
}
ZVC.export(BSDialogs);