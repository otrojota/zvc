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
    async onCustomersList_cancel(row, rowIndex) {
        await this.customersList.closeDetails(rowIndex);
    }
    async onCustomersList_saved(row, rowIndex) {
        await this.customersList.closeDetails(rowIndex);
        this.customersList.refresh();
    }
    async onCustomersList_deleted(row, rowIndex) {
        await this.customersList.closeDetails(rowIndex);      
        this.customersList.refresh();
    }

    async onNewCustomer_click() {
        await this.customersList.openNewDetails(
            "./PEdCustomer", "Add New Customer", {
                customersModel:this.custModel,
                newRecord:true
            }
        );
    }
}
ZVC.export(Demo7);