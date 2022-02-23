class RepeaterDemo1 extends ZCustomController {
    onThis_init() {
        this.repeater.refresh();
    }

    onEdNRows_change() {this.repeater.refresh()}
    onRepeater_getRows() {
        let rows = [];
        let n = parseInt(this.edNRows.value);
        if (!isNaN(n)) {
            for (let i=1; i<=n; i++) {
                rows.push({id:100+i, name:`Name of customer ${i}`, address:`Address of customer ${i}`})
            }
        }
        return rows;
    }

    onRepeater_selected(customer) {
        console.log("Customer Selected", customer);
    }

    onCmdFindTest_click() {
        for (let controller of this.repeater.controllers) {
            if (controller.repeaterIndex % 2) {
                controller.customer.address += " changed";
                controller.refresh();
            }
        }
    }
}
ZVC.export(RepeaterDemo1);