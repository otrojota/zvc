class Loading extends ZCustomController {
    onThis_init() {
        this.codeBrowser.showController(this.demoPage);
        this.codeBrowser2.showController(this.demoStatic);
        this.codeBrowser3.showController(this.demoDynamic);
    }
}
ZVC.export(Loading);