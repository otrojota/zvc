class ZBootstrapRepeater extends ZRepeater {
    onThis_init() {
        this.paginator = null;
        this.pagination = "none";
        this.nPages = 5;
        this.nRowsPerPage = 10;
        let paginationId = this.getAttribute("data-z-pagination");
        if (paginationId) {
            let searchNode = this.view.parentNode;
            while(searchNode && !this.paginator) {
                this.paginator = searchNode.querySelector(paginationId);
                searchNode = searchNode.parentNode;
            }            
            if (!this.paginator) throw "Cannot find pagination component '" + paginationId + "'";
            this.pagination = this.paginator.getAttribute("data-z-pagination");
            if (this.pagination != "local" && this.pagination != "server") throw "Pagination must be 'local' or 'server'";
            if (this.paginator.getAttribute("data-z-n-pages")) this.nPages = parseInt(this.paginator.getAttribute("data-z-n-pages"));
            if (this.paginator.getAttribute("data-z-rows-per-page")) this.nRowsPerPage = parseInt(this.paginator.getAttribute("data-z-rows-per-page"));
        }
        this.rowsInfo = null;
        let rowsInfoId = this.getAttribute("data-z-rows-info");
        if (rowsInfoId) {
            let searchNode = this.view.parentNode;
            while(searchNode && !this.paginaror) {
                this.rowsInfo = searchNode.querySelector(rowsInfoId);
                searchNode = searchNode.parentNode;
            }            
            if (!this.rowsInfo) throw "Cannot find rowsInfo component '" + rowsInfoId + "'";
        }

        this.startPage = -1;
        this.selectedPage = -1;
        this.rows = [];
        this.totalRows = 0;
        this.totalPages = 0;
    }

    async refresh() {
        this.rows = [];
        if (this.pagination == "none" || this.pagination == "local") {
            this.rows = await this.triggerEvent("getRows");
            if (!this.rows) {
                this.rows = [];
                throw "No rows returned to list in getRows event";
            }
            this.totalRows = this.rows.length;
            if (this.pagination == "local") {                
                this.recalcPagination(); 
            }
            await this.repaint();
        } else {
            this.totalRows = await this.triggerEvent("getRowsCount");
            if (this.totalRows === undefined || isNaN(this.totalRows)) {
                this.totalRows = 0;
                throw "No number returned to list in getRowsCount event";
            }
            this.recalcPagination();
            if (!this.totalRows) await this.repaint();
            else this.loadPage();
        }
    }

    recalcPagination() {
        this.totalPages = this.totalRows / this.nRowsPerPage;
        if (this.totalPages != parseInt(this.totalPages)) this.totalPages = parseInt(this.totalPages) + 1;
        if (this.selectedPage < 1) this.selectedPage = 1;
        if (this.selectedPage > this.totalPages) this.selectedPage = this.totalPages;
        this.startPage = 1 + parseInt((this.selectedPage - 1) / this.nPages) * this.nPages;
    }

    async loadPage() {
        this.rows = await this.triggerEvent("getRowsPage", this.nRowsPerPage * (this.selectedPage - 1), this.nRowsPerPage);
        if (!this.rows) {
            this.rows = [];
            throw "No rows returned to list in getRows event";
        }
        await this.repaint();
    }

    async repaint() {
        await this.freeResources();     
        this.html = "";
        let {startRow, endRow} = this.getVisibleRowsRange();
        let controllerClass = null, html = null;
        for (let i=startRow; i<endRow; i++) {
            let row = this.rows[i];
            let container = document.createElement(this.containerTag);
            if (this.containerClasses) {
                container.className = this.containerClasses;
            }
            if (this.containerStyle) {
                container.style = this.containerStyle;
            }
            let controller = await ZVC.loadComponent(container, this, this.elementPath, controllerClass, html);
            controller.repeaterIndex = this.controllers.length;
            if (!controllerClass) controllerClass = ZVC.lastControllerClass;
            if (!html) html = ZVC.lastHTML;
            this.view.append(container);
            this.controllers.push(controller);
            await controller.init(row);
            await controller.activate();
        }
        if (this.pagination != "none") {
            let html = this.getPaginatorHTML();
            this.paginator.innerHTML = html;
        }
        this.registerEventListeners();
        if (this.rowsInfo) {
            if (!this.totalRows) {
                this.rowsInfo.textContent = "No rows found";    
            } else {
                if (this.totalRows == 1) this.rowsInfo.textContent = "One row found"
                else {
                    if (this.pagination != "none") {
                        this.rowsInfo.textContent = "Rows " + (startRow + 1) + " to " + endRow + " from " + this.totalRows;
                    } else {
                        this.rowsInfo.textContent = "" + this.totalRows + " rows found";
                    }
                }
            }
        }
    }

    getVisibleRowsRange() {
        if (this.pagination == "none" || this.pagination == "server") {
            return {startRow:0, endRow:this.rows.length};
        } else if (this.pagination == "local") {
            let r0 = this.nRowsPerPage * (this.selectedPage - 1);
            if (r0 < 0) r0 = 0;
            let r1 = r0 + this.nRowsPerPage;
            if (r1 > this.rows.length) r1 = this.rows.length;
            return {startRow:r0, endRow:r1}
        }
    }

    getPaginatorHTML() {
        let canPrevious = this.startPage > 1;
        let canNext = (this.startPage + this.nPages - 1) < this.totalPages;
        let html = `
            <li class='page-item${!canPrevious?" disabled":""}'>
                <a class='pag-previous page-link' href='#' tabindex='-1'>
                    <i class='fa fa-angle-left'></i>
                </a>
            </li>`;
        let n = 0;
        while ((this.startPage + n) <= this.totalPages && n < this.nPages) {
            let active = this.startPage + n == this.selectedPage;
            html += `
                <li class='page-item${active?" active":""}'>
                    <a class='pag-page page-link' href='#' data-page='${(this.startPage + n)}'>${(this.startPage + n)}</a>
                </li>`;
            n++;
        }
        html += `
            <li class='page-item${!canNext?" disabled":""}'>
                <a class='pag-next page-link' href='#' tabindex='-1'>
                    <i class='fa fa-angle-right'></i>
                </a>
            </li>`;
        return html;
    }

    registerEventListeners() {
        if (this.pagination != "none") {
            this.paginator.querySelector(".pag-previous").onclick = e => {this.pagPrevious(); e.preventDefault();}
            this.paginator.querySelector(".pag-next").onclick = e => {this.pagNext(); e.preventDefault();}
            this.paginator.querySelectorAll(".pag-page").forEach(e => {
                e.onclick = evt => {
                    let page = parseInt(e.getAttribute("data-page"));
                    this.pagPage(page);
                    evt.preventDefault();
                }
            })
        }
    }

    async pagPrevious() {
        if (this.pagination == "local") {
            this.selectedPage -= this.nPages;
            this.startPage -= this.nPages;
            this.recalcPagination();
            this.repaint();
        } else if (this.pagination == "server") {
            this.selectedPage -= this.nPages;
            this.startPage -= this.nPages;
            this.recalcPagination();
            await this.loadPage();
            this.repaint();
        }
    }
    async pagNext() {
        if (this.pagination == "local") {
            this.selectedPage += this.nPages;
            this.startPage += this.nPages;
            this.recalcPagination();
            this.repaint();
        } else if (this.pagination == "server") {
            this.selectedPage += this.nPages;
            this.startPage += this.nPages;
            this.recalcPagination();
            await this.loadPage();
            this.repaint();
        }
    }
    async pagPage(page) {
        if (this.pagination == "local") {
            this.selectedPage = page;
            this.recalcPagination();
            this.repaint();
        } else if (this.pagination == "server") {
            this.selectedPage = page;
            this.recalcPagination();
            await this.loadPage();
            this.repaint();
        }
    }
}
ZVC.registerComponent("DIV", e => (e.getAttribute("data-z-repeat") && e.getAttribute("data-z-pagination")), ZBootstrapRepeater);
ZVC.registerComponent("UL", e => (e.getAttribute("data-z-repeat") && e.getAttribute("data-z-pagination")), ZBootstrapRepeater);
ZVC.registerComponent("OL", e => (e.getAttribute("data-z-repeat") && e.getAttribute("data-z-pagination")), ZBootstrapRepeater);