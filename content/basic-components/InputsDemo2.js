class InputsDemo2 extends ZCustomController {
    onTestInput_change() {
        this.output.text = "User typed:" + this.testInput.value;
    }
}
ZVC.export(InputsDemo2);