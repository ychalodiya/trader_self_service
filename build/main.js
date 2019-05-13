// Desktop
// http://camclarkfordairdrietc.composer.dealersmartsolutions.ca/website/as/camclarkfordairdrietc/camclarkfordairdrietc-admin/composer/index?lang=en_CA#website
//Mobile
// http://camclarkfordairdrietc.composer.dealersmartsolutions.ca/website/as/camclarkfordairdrietc/camclarkfordairdrietc-admin/composer/index?lang=en_CA#website
// camclarkfordairdrietc
function geturl() {
    // get the input ID
    let tcid = document.getElementById('tcid').value.trim();
    let url = `http://${tcid}.composer.dealersmartsolutions.ca/website/as/${tcid}/${tcid}-admin/composer/index?lang=en_CA#website`;
    let tclink = document.getElementById('link');
    tclink.href= url;
    link.setAttribute('target', '_blank');
}