class TextSearch extends ZCustomController {
    get value() {return this.edSearch.value}
    set value(txt) {this.edSearch.value = txt}
    onEdSearch_change() {
        let v = this.edSearch.value;
        this.triggerEvent("change", v);
        if (v) {
            this.iconSearch.view.classList.remove("fa-search");
            this.iconSearch.view.classList.add("fa-times");
        } else {
            this.iconSearch.view.classList.remove("fa-times");
            this.iconSearch.view.classList.add("fa-search");
        }
    }
    clear() {
        this.edSearch.value = "";
        this.iconSearch.view.classList.remove("fa-times");
        this.iconSearch.view.classList.add("fa-search");
        this.triggerEvent("change", "");
    }
    onIconSearch_click() {
        if (this.edSearch.value) {
            this.clear();
        }
    }
}
ZVC.export(TextSearch);