class PEdCustomer extends ZCustomController {
    onThis_init(options) {
        this.errorMsg.hide();
        this.customersModel = options.customersModel;
        this.isNewRecord = options.newRecord;
        this.record = options.record;
        if (this.isNewRecord) {
            this.edActive.checked = true;
            this.cmdDelete.hide();
        } else {
            this.edId.value = this.record.id;
            this.edId.disable();
            this.edName.value = this.record.name;
            this.edActive.checked = this.record.active;
        }
    }
    onCmdCancel_click() {this.triggerEvent("cancel")}
    onCmdSave_click() {
        this.errorMsg.hide();
        try {
            let id = this.edId.value.trim();
            if (!id) throw "Customer Id is Mandatory";            
            let name = this.edName.value.trim();
            if (!name) throw "Customer Name is Mandatory";
            let active = this.edActive.checked;
            if (this.isNewRecord) {
                this.customersModel.addCustomer({
                    id:id, name:name, active:active
                })
            } else {
                this.customersModel.saveCustomer({
                    id:id, name:name, active:active
                })
            }
            this.triggerEvent("saved");
        } catch(error) {
            this.errorMsg.text = error.toString();
            this.errorMsg.show();
        }
    }
    onCmdDelete_click() {
        this.showDialog("./../../../common/WConfirm", {
            message:"This action cannot be undone. Please confirm you want to permanently delete customer '" + this.record.name + "'"
        }, _=> {
            this.customersModel.deleteCustomer(this.record.id);
            this.triggerEvent("deleted");
        });
    }
}
ZVC.export(PEdCustomer);