class DynamicSelectDemo1 extends ZCustomController {
    onThis_init() {
        this.continent.setRows([{
            code:"asia", name:"Asia", population:4601371198
        }, {
            code:"afr", name:"Africa", population:1308064195
        }, {
            code:"eu", name:"Europe", population:747182751
        }, {
            code:"sa", name:"South America", population:427199446
        }, {
            code:"na", name:"North America", population:366600964
        }, {
            code:"oc", name:"Oceania", population:42128035
        }], "oc")
    };
    onContinent_change() {
        this.output.text = "[" + this.continent.value + "] " + this.continent.selectedText + ". "
                         + "Population:" + this.continent.selectedRow.population
    }
    onSelectSouthAmerica_click() {
        this.continent.value = "sa";
    }
}

ZVC.export(DynamicSelectDemo1);