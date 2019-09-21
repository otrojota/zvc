class WEdCustomer extends ZDialog {
    onThis_init(options) {
        this.errorMsg.hide();
        this.customersModel = options.customersModel;
        this.isNewRecord = options.newRecord;
        this.record = options.record;
        if (this.isNewRecord) {
            this.edActive.checked = true;
        } else {
            this.edId.value = this.record.id;
            this.edId.disable();
            this.edName.value = this.record.name;
            this.edActive.checked = this.record.active;
        }
    }
    onCmdCancel_click() {this.cancel()}
    onCmdOk_click() {
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
            this.close()
        } catch(error) {
            this.errorMsg.text = error.toString();
            this.errorMsg.show();
        }
    }
}
ZVC.export(WEdCustomer);