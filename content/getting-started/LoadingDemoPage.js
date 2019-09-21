class LoadingDemoPage extends ZCustomController {
    onThis_init(options) {
        this.title = (options && options.title)?options.title:"Default Title";
        this.counter = 0;
    }
    set title(txt) {this.titleElement.text = txt}
    increment() {
        this.counter++;
        this.output.text = "Counter:" + this.counter;
    }
    onTestButton_click() {
        this.triggerEvent("test", this.counter);
    }
}
ZVC.export(LoadingDemoPage);