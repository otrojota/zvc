class CodeBrowser extends ZCustomController {
    showController(controller) {
        let path = controller.path + "/" + controller.constructor.name;

        let headers = new Headers();
        headers.append('pragma', 'no-cache');
        headers.append('cache-control', 'no-cache');

        this.htmlFileName.html = "<strong>HTML File:</strong>" + path + ".html";
        fetch(path + ".html", {headers:headers}).then(res => res.text().then(txt => {
            this.htmlCode.text = txt
            Prism.highlightElement(this.htmlCode.view);            
        }));

        this.jsFileName.html = "<strong>JavaScript File:</strong>" + path + ".js";
        fetch(path + ".js", {headers:headers}).then(res => res.text().then(txt => {
            this.jsCode.text = txt
            Prism.highlightElement(this.jsCode.view);            
        }));
    }
}

ZVC.export(CodeBrowser);