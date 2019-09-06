class SideBar extends ZCustomController {
    onThis_init() {
        this.findAll(".sidebar-collapsible-option").forEach(e => {
            e.classList.add("closed");
            e.querySelector("SPAN").onclick = _ => e.classList.toggle("closed");
        });
        this.findAll(".sidebar-selectable-option").forEach(e => {
            e.onclick = _ => this.triggerEvent("openItem", e.getAttribute("data-target"), e.getAttribute("title"));
        })
    }

    markSelectedItemByTarget(target) {
        this.findAll(".sidebar-selectable-option").forEach(e => e.classList.remove("selected"));
        let item = this.find(".sidebar-selectable-option[data-target='" + target + "']");
        item.classList.add("selected");
        let parentOption = item.parentNode.parentNode;
        if (parentOption.classList.contains("closed")) parentOption.classList.toggle("closed");        
    }
    getItemTitle(target) {
        return this.find(".sidebar-selectable-option[data-target='" + target + "']").getAttribute("title");
    }
}

ZVC.export(SideBar);