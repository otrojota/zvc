class Repeater extends ZCustomController {
    onThis_init() {
        this.codeBrowser.showController(this.demo);
        this.code2Browser.showController(this.demo2);        
    }
}
ZVC.export(Repeater);