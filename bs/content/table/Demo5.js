class Demo5 extends ZCustomController {
    onThis_init() {
        this.custModel = new CustomersModel(10000);
    }
    onThis_activated() {this.customersList.refresh()}
    onTextSearch_change() {this.customersList.refresh()}
    onCustomersList_getRowsCount() {
        let filter = this.textSearch.value;
        return this.custModel.getCustomersCount(filter);
    }
    onCustomersList_getRowsPage(fromIndex, nRows) {
        let filter = this.textSearch.value;
        return this.custModel.getCustomersPage(filter, fromIndex, nRows)
            .map(r => (this.prepareRow(r)));
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
ZVC.export(Demo5);