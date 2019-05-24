function getUrl() {
    // get the input ID
    let tcid = document.getElementById('tcid').value.trim();
    let arrayOfTCID = tcid.split(" ").map(index => {
        let trimmed_ID = index.replace(/^[\,]+|[\,]+$/gm, "");
        let ans = /^[a-z|A-Z]+?tc{1}$/gm.test(trimmed_ID);
        // let ans = /^[a-z|A-Z]+[^tc]\s?tc{1}$/gm.test(trimmed_ID);
        // create a link if it finds right tcid
        if (ans) {
            let composerUrl = `http://${trimmed_ID}.composer.dealersmartsolutions.ca/website/as/${trimmed_ID}/${trimmed_ID}-admin/composer/index?lang=en_CA#website`;

            let tclink = document.getElementById('tclink');
            tclink.style.display = 'block';
            let a = document.createElement('a');
            let linkaddress = document.createTextNode(trimmed_ID);
            a.appendChild(linkaddress);
            a.href = composerUrl;
            a.setAttribute('target', '_blank');
            a.className = 'link';

            tclink.insertBefore(a, tclink.firstChild);
        }
    });

    // it will bring you to the welcome page
    let welcomeURL = `https://apps.dealersmartsolutions.ca/welcome/as/${tcid}/${tcid}-admin/dashboard/index?lang=en_CA`;

    // getMedia(tcid);
    document.getElementById('tcid').value = '';
}

function getMedia(mediaID) {

    let tcmediaUrl = `http://apps.dealersmartsolutions.ca/promotions/as/${mediaID}/${mediaID}-admin/?lang=en_CA`;

    let medialink = document.getElementById('medialink');
    medialink.setAttribute('target', '_blank');
    medialink.href = tcmediaUrl;

    let tcMedia = document.getElementById('tcMedia');
    tcMedia.style.display = 'block';
}

// example: ,,cmpautomotiveltdtc , countryhillshyundaitc , countryhillsnissantc ,
