class ButtonsDemo1 extends ZCustomController {
    onThis_init() {
        this.counter = 0
        this.disabledButton.disable();
    }
    onButton1_click() {
        this.output.text = "Button 1 Clicked. Click Counter:" + (++this.counter)
    }
    onLink1_click() {
        this.output.text = "Link 1 Clicked. Click Counter:" + (++this.counter)
    }
    onDisabledButton_click() {
        this.output.text = "This event sould not be triggered";
    }
}

ZVC.export(ButtonsDemo1);