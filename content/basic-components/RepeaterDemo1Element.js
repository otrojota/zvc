class RepeaterDemo1Element extends ZCustomController {
    onThis_init(customer) {
        this.customer = customer;
        this.refresh();
    }
    refresh() {
        this.lblCustomerName.text = this.customer?this.customer.name:"";
        this.lblAddress.text = this.customer?this.customer.address:"";
    }
    onLblCustomerName_click() {
        this.triggerEvent("selected", this.customer);
    }
}
ZVC.export(RepeaterDemo1Element);