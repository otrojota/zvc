class Demo1 extends ZCustomController {
    onThis_init() {
        this.custModel = new CustomersModel2(500);
    }
    onThis_activated() {this.repeater.refresh()}
    onTextSearch_change() {this.repeater.refresh()}
    onRepeater_getRows() {
        let filter = this.textSearch.value;
        let rows = this.custModel.getCustomers(filter);
        return rows;
    }
}
ZVC.export(Demo1);