class Demo7 extends ZCustomController {
    onThis_init() {
        this.custModel = new CustomersModel(500);
    }
    onThis_activated() {this.customersList.refresh()}
    onTextSearch_change() {this.customersList.refresh()}
    onCustomersList_getRows() {
        let filter = this.textSearch.value;
        return this.custModel.getCustomers(filter).map(r => (this.prepareRow(r)))
    }
    prepareRow(row) {
        if (row.active) {
            delete row._rowClass;
            row.iconActive = "<i class='far fa-check-square'></i>";
        } else {
            row._rowClass = "table-danger";
            row.iconActive = "<i class='far fa-square'></i>";
        }
        row.iconEdit = "<i class='fas fa-edit text-secondary'></i>";
        row.iconDelete = "<i class='fas fa-trash-alt text-danger'></i>";
        return row;
    }
    onCustomersList_cellClick(row, rowIndex, field) {
        if (field == "iconActive") {
            row.active = !row.active;
            this.customersList.updateRow(rowIndex, this.prepareRow(row));
        }
    }
    onCustomersList_getDetailsConfig(row, rowIndex) {
        return {
            path:"./PEdCustomer",
            options:{
                customersModel:this.custModel,
                record:row
            }
        }
    }
    onCustomersList_cancel(row, rowIndex) {
        this.customersList.closeDetails(rowIndex);
    }
    onCustomersList_saved(row, rowIndex) {        
        this.customersList.refresh();
    }
    onCustomersList_deleted(row, rowIndex) {        
        this.customersList.refresh();
    }

    onNewCustomer_click() {
        this.customersList.openNewDetails(
            "./PEdCustomer", "Add New Customer", {
                customersModel:this.custModel,
                newRecord:true
            }
        );
    }
}
ZVC.export(Demo7);