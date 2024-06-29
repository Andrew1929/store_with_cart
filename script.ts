import {headerRender} from './headerRenderScript'
import {footerRender} from './footerRenderScript'

document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('load', function () { headerRender(); footerRender();});
});







