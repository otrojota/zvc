class InputsDemo3 extends ZCustomController {
    onCheckbox1_change() {
        this.output.text = "Thanks .. my new value is:" + (this.checkbox1.checked?"checked":"unchecked");
    }
    onRachel_change() {this.output.text = "Ok, Rachel is your favourite"}
    onPhoebe_change() {this.output.text = "Ok, Phoebe is your favourite"}
    onMonica_change() {this.output.text = "Ok, Monica is your favourite"}
    onJoey_change() {this.output.text = "Ok, Joey is your favourite"}
    onChandler_change() {this.output.text = "Ok, Chandler is your favourite"}
    onRoss_change() {this.output.text = "Ok, Ross is your favourite"}
}
ZVC.export(InputsDemo3);