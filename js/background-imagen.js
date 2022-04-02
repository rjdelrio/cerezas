class Header extends HTMLElement {
    connectedCallback() {
        var page_name = this.attributes.page_name.value;
        var url_imagen = this.attributes.url_imagen.value;
        /*images/page-header-bg.jpg*/
        /*images/imagenes_campo/nuevas/nosotros-1.jpg*/
        this.innerHTML = `<header class="page-header" data-background="${url_imagen}" style="background: rgba(0, 0, 0, 0) url(images/imagenes_campo/nuevas/nosotros-1.jpg) no-repeat scroll 0px 0px;">
        <div class="container">
        <h2>${page_name}</h2>
        </div>  1 conflict 
        </header>`;
    }
}
customElements.define('header-component', Header);
