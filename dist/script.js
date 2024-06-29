import {headerRender} from './headerRenderScript.js'
import {footerRender} from './footerRenderScript.js'


document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('load', function () { headerRender(); footerRender();});
});
