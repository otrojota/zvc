class Demo2 extends ZCustomController {
    onThis_init() {
        this.custModel = new CustomersModel(10);
    }
    onThis_activated() {this.customersList.refresh()}
    onTextSearch_change() {this.customersList.refresh()}
    onCustomersList_getRows() {
        let filter = this.textSearch.value;
        return this.custModel.getCustomers(filter);
    }
    onCustomersList_change(row, rowIndex) {
        if (!row) this.output.text = "No row selected";
        else this.output.text = "[" + row.id + "] " + row.name + " (" + row.active + ")";
    }
}
ZVC.export(Demo2);