class InputsDemo1 extends ZCustomController {
    onThis_activated() {this.output.hide()}
    onCmdSubmit_click() {
        this.output.text = "Hello " + this.firstName.value + " " + this.lastName.value;
        this.output.show();
    }
}
ZVC.export(InputsDemo1);