class CustomerCard extends ZCustomController {
    onThis_init(customer) {
        this.customer = customer;
        this.refresh();
    }

    refresh() {
        if (!this.customer) return;
        this.lblCustomerName.text = this.customer.name;
        this.lblCustomerAddress.text = this.customer.address;
        this.edActive.checked = this.customer.active;
        if (this.customer.active) {
            this.removeClass("bg-secondary");
            this.removeClass("text-white");
        } else {
            this.addClass("bg-secondary");
            this.addClass("text-white");
        }
    }

    onEdActive_change() {
        this.customer.active = this.edActive.checked;
        this.refresh();
    }
}

ZVC.export(CustomerCard);