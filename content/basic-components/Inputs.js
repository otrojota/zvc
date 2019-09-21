class Inputs extends ZCustomController {
    onThis_init() {
        this.codeBrowser1.showController(this.demo1);
        this.codeBrowser2.showController(this.demo2);
        this.codeBrowser3.showController(this.demo3);
    }
}
ZVC.export(Inputs);