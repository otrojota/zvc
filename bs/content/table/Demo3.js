class Demo3 extends ZCustomController {
    onThis_init() {
        this.custModel = new CustomersModel(10);
    }
    onThis_activated() {this.customersList.refresh()}
    onTextSearch_change() {this.customersList.refresh()}
    onCustomersList_getRows() {
        let filter = this.textSearch.value;
        return this.custModel.getCustomers(filter).map(row => (this.prepareRow(row)));
    }
    prepareRow(row) {
        if (row.active) {
            delete row._rowClass;
            row.iconActive = "<i class='far fa-check-square'></i>";
        } else {
            row._rowClass = "table-danger";
            row.iconActive = "<i class='far fa-square'></i>";
        }
        return row;
    }
    onCustomersList_cellClick(row, rowIndex, field) {
        if (field == "iconActive") {
            row.active = !row.active;
            this.customersList.updateRow(rowIndex, this.prepareRow(row));
        }
    }
}
ZVC.export(Demo3);