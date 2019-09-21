class CustomersModel {
    constructor(n) {
        this.customers = [];
        for (let i=1; i<=n; i++) {
            this.customers.push({id:"cust_" + i, name:"Customer " + i, active:true});
        }
    }

    getCustomers(textFilter = "") {
        let filter = textFilter.toLowerCase();
        return this.customers
            .filter(c => c.name.toLowerCase().indexOf(filter) >= 0)
            .sort((c1, c2) => (c1.name > c2.name?1:-1));
    }
    getCustomersCount(textFilter = "") {
        return this.getCustomers(textFilter).length;
    }
    getCustomersPage(textFilter = "", fromIndex, nRows) {
        return this.getCustomers(textFilter).filter((r,i) => (i >= fromIndex && (i - fromIndex) < nRows));
    }

    addCustomer(customer) {
        if (this.customers.findIndex(c => c.id == customer.id) >= 0) throw "Customer id '" + customer.id + "' already exists";
        this.customers.push(customer);
    }
    saveCustomer(customer) {
        let idx = this.customers.findIndex(c => c.id == customer.id);
        if (idx < 0) throw "Customer Not Found";
        this.customers.splice(idx, 1, customer);
    }
    deleteCustomer(id) {
        let idx = this.customers.findIndex(c => c.id == id);
        if (idx < 0) throw "Customer Not Found";
        this.customers.splice(idx, 1);        
    }
}