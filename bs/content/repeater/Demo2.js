class Demo2 extends ZCustomController {
    onThis_init() {
        this.custModel = new CustomersModel(10000);
    }
    onThis_activated() {this.repeater.refresh()}
    onTextSearch_change() {this.repeater.refresh()}
    onRepeater_getRowsCount() {
        let filter = this.textSearch.value;
        return this.custModel.getCustomersCount(filter);
    }
    onRepeater_getRowsPage(fromIndex, nRows) {
        let filter = this.textSearch.value;
        return this.custModel.getCustomersPage(filter, fromIndex, nRows);
    }
}
ZVC.export(Demo2);