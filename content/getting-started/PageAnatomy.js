class PageAnatomy extends ZCustomController {
    onThis_init() {
        Prism.highlightElement(this.initScript.view);
        let indexExample = `
        <!DOCTYPE html>
        <html>
            <head>
                <title>My Application</title>
                <meta charset="utf-8">
                <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" />

                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
                <link rel="stylesheet" href="css/my-styles.css" >
                
                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
                <script src="https://kit.fontawesome.com/3b759e65de.js"></script>

                <script src="zvc/zvc.js" type="text/javascript"></script>

                <script>
                    document.addEventListener("DOMContentLoaded", _ => {                
                        ZVC.fromElement("main");
                    });
                </script>
            </head>
            <body>
                <div id="main" class="container-fluid p-0" data-z-component="./Application"></div> 
            </body>
        </html>
        `;
        this.samplePage.text = indexExample;
        Prism.highlightElement(this.samplePage.view);
    }
}
ZVC.export(PageAnatomy);