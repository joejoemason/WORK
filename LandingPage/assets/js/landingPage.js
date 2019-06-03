//Email data collect
const emailCollectOne = document.querySelector('#emailCollect');
const form1 = document.querySelector('#emailCollectBuyer')
const form2 = document.querySelector('#emailCollectSeller')


function renderEmail(doc){
    let li = document.createElement('li');
    let emailBuyer = document.createElement('span');
    let emailSeller = document.createElement('span');


    li.setAttribute('data-id', doc.id);
    emailBuyer.textContent = doc.data().emailBuyer;
    emailSeller.textContent = doc.data().emailSeller;


    // li.appendChild(emailBuyer);
    // li.appendChild(emailSeller);


    emailCollectOne.appendChild(li);
}
    // getting data
db.collection('emailAddress').get().then(snapshot => {
    console.log(snapshot.docs);
    snapshot.docs.forEach(doc => {
        renderEmail(doc);
    });
});

// saving data
form1.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('emailAddress').add({
        emailBuyer: form1.emailBuyer.value,
    });
    form1.emailBuyer.value = '';

});

form2.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('emailAddress').add({
        emailSeller: form2.emailSeller.value
    });
    form2.emailSeller.value = '';

});
//END OF DATA COLLECT

(function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
    });
    var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src =
        '' + i + dl;
    f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-NKDMSK6');



$(document).ready(function () {


    var slider2 = document.getElementById('sliderRefine');

    noUiSlider.create(slider2, {
        start: [42, 880],
        connect: true,
        range: {
            'min': [30],
            'max': [900]
        }
    });

    var limitFieldMin = document.getElementById('price-left');
    var limitFieldMax = document.getElementById('price-right');

    slider2.noUiSlider.on('update', function (values, handle) {
        if (handle) {
            limitFieldMax.innerHTML = $('#price-right').data('currency') + Math.round(values[handle]);
        } else {
            limitFieldMin.innerHTML = $('#price-left').data('currency') + Math.round(values[handle]);
        }
    })
     //  Activate the Tooltips
     $('[data-toggle="tooltip"], [rel="tooltip"]').tooltip();

     //    Activate bootstrap-select
     if ($(".selectpicker").length != 0) {
         $(".selectpicker").selectpicker({
             iconBase: "now-ui-icons",
             tickIcon: "ui-1_check"
         });
     };

 
});