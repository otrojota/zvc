class Demo6 extends ZCustomController {
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
        } else if (field == "iconEdit") {
            this.showDialog("./WEdCustomer", {
                customersModel:this.custModel,
                record:row
            }, _ => this.customersList.refresh())
        } else if (field == "iconDelete") {
            this.showDialog("./../../../common/WConfirm", {
                message:"This action cannot be undone. Please confirm you want to permanently delete customer '" + row.name + "'"
            }, _=> {
                this.custModel.deleteCustomer(row.id);
                this.customersList.refresh();
            });
        }
    }    

    onNewCustomer_click() {
        this.showDialog("./WEdCustomer", {
            customersModel:this.custModel,
            newRecord:true
        }, _ => this.customersList.refresh())
    }
}
ZVC.export(Demo6);