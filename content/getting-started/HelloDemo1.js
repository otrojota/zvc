class HelloDemo1 extends ZCustomController {
    onName_change() {
        this.output.text = "Hello " + this.name.value;
    }
}

ZVC.export(HelloDemo1);