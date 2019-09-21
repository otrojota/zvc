class LoadingStaticDemo extends ZCustomController {
    onThis_init() {
        this.page1.title = "Demo Page 1";
        this.page2.title = "Demo Page 2";
    }
    onIncrement1_click() {this.page1.increment()}
    onIncrement2_click() {this.page2.increment()}
    onPage1_test(counter) {this.output.text = "Page 1 counter is " + counter}
    onPage2_test(counter) {this.output.text = "Page 2 counter is " + counter}
}
ZVC.export(LoadingStaticDemo);