class HelloZVC extends ZCustomController {
    onThis_init() {
        this.codeBrowser.showController(this.demo);
    }
}

ZVC.export(HelloZVC);