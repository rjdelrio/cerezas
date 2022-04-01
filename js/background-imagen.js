class Header extends HTMLElement {
    connectedCallback() {
        var page_name = this.attributes.page_name.value;
        var url_imagen = this.attributes.url_imagen.value;
        /*images/page-header-bg.jpg*/
        /*images/imagenes_campo/nuevas/nosotros-1.jpg*/
        this.innerHTML = `<header class="page-header" data-background="${url_imagen}" data-stellar-background-ratio="0.7" style="background: rgba(0, 0, 0, 0) url(&quot;images/imagenes_campo/nuevas/nosotros-1.jpg&quot;);">
        <div class="container">
        <h2>${page_name}</h2>
        </div> 
        </header>`;
    }
}
customElements.define('header-component', Header);
