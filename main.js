function getUrl() {
    let tcid = document.getElementById('tcid').value.trim();

    tcid.split(" ").map(index => {
        let trimmed_ID = index.replace(/^[\,$.@%*&!`~#^-_+=<>?;:'"(){}]+|[\,$.@%*&!`~#^-_+=<>?;:'"(){}]+$/gm, "");
        let ans = /^[a-z|A-Z|0-9]+tc{1}$/gmi.test(trimmed_ID);
        // let ans = /^[a-z|A-Z]+[^tc]\s?tc{1}$/gm.test(trimmed_ID);
        // create a link if it finds right tcid

        // example: ,,cmpautomotiveltdtc , countryhillshyundaitc , countryhillsnissantc ,
        if (ans) {
            // let composerUrl = `http://${trimmed_ID}.composer.dealersmartsolutions.ca/website/as/${trimmed_ID}/${trimmed_ID}-admin/composer/index?lang=en_CA#website`;

             let welcomeURL = `https://apps.dealersmartsolutions.ca/welcome/as/${trimmed_ID}/${trimmed_ID}-admin/dashboard/index?lang=en_CA`;

            let tclink = document.getElementById('tclink');
            tclink.style.display = 'block';
            let a = document.createElement('a');
            let linkaddress = document.createTextNode(trimmed_ID);
            a.appendChild(linkaddress);
            // a.href = composerUrl;
            a.href = welcomeURL;
            a.setAttribute('target', '_blank');
            a.setAttribute('onClick', 'myID(this); ');
            
            let value = Math.floor(Math.random() * 1000);
            console.log(`${trimmed_ID}${value}`)
            a.className = 'link';

            tclink.insertBefore(a, tclink.firstChild);
        }
    });
    // getMedia(tcid);
    document.getElementById('tcid').value = '';
}

function myID(e) {
    
}

function getMedia(mediaID) {
    let tcmediaUrl = `http://apps.dealersmartsolutions.ca/promotions/as/${mediaID}/${mediaID}-admin/?lang=en_CA`;

    let medialink = document.getElementById('medialink');
    medialink.setAttribute('target', '_blank');
    medialink.href = tcmediaUrl;

    let tcMedia = document.getElementById('tcMedia');
    tcMedia.style.display = 'block';
}
