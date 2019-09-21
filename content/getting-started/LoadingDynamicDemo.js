class LoadingDynamicDemo extends ZCustomController {
    onPageSelector_change() {
        switch(this.pageSelector.value) {
            case "empty":
                this.pageLoader.load("common/Empty");
                break;
            case "1":
                this.pageLoader.load("./LoadingDemoPage", {title:"Demo Page 1"});
                break;
            case "2":
                this.pageLoader.load("./LoadingDemoPage", {title:"Demo Page 2"});
                break;
        }
    }
    onIncrement_click() {
        try {
            this.pageLoader.content.increment();
        } catch(error) {
            this.output.text = "Error:" + error.toString();
        }
    }
    onPageLoader_test(counter) {
        this.output.text = "Counter informed from current page:" + counter;
    }
}
ZVC.export(LoadingDynamicDemo);