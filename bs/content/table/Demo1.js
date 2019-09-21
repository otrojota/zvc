class Demo1 extends ZCustomController {
    onThis_init() {
        this.custModel = new CustomersModel(20);
    }
    onThis_activated() {this.customersList.refresh()}
    onTextSearch_change() {this.customersList.refresh()}
    onCustomersList_getRows() {
        let filter = this.textSearch.value;
        return this.custModel.getCustomers(filter);
    }
}
ZVC.export(Demo1);