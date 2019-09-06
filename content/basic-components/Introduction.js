class Introduction extends ZCustomController {
    onThis_init() {
        this.findAll(".link-to-component").forEach(e => {
            e.onclick = _ => this.triggerEvent("selectComponent", e.getAttribute("data-target"));
        })
    }
}
ZVC.export(Introduction);