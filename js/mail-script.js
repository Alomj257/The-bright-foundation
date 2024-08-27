    // -------   Mail Send ajax

    //  $(document).ready(function() {
    //     var form = $('#myForm'); // contact form
    //     var submit = $('.submit-btn'); // submit button
    //     var alert = $('.alert-msg'); // alert div for show alert message

    //     // form submit event
    //     form.on('submit', function(e) {
    //         e.preventDefault(); // prevent default form submit

    //         $.ajax({
    //             url: 'mail.php', // form action url
    //             type: 'POST', // form submit method get/post
    //             dataType: 'html', // request type html/json/xml
    //             data: form.serialize(), // serialize form data
    //             beforeSend: function() {
    //                 alert.fadeOut();
    //                 submit.html('Sending....'); // change submit button text
    //             },
    //             success: function(data) {
    //                 alert.html(data).fadeIn(); // fade in response data
    //                 form.trigger('reset'); // reset form
    //                 submit.attr("style", "display: none !important");; // reset submit button text
    //             },
    //             error: function(e) {
    //                 console.log(e)
    //             }
    //         });
    //     });
    // });



    $(document).ready(function() {
        var form = $('#contactForm'); 
        var submit = $('.submit-btn');
        var alertBox = $('.alert-msg'); 
        emailjs.init('21j36gzh9bfZEIEUZ');
    
        form.on('submit', function(e) {
            e.preventDefault(); 
    
            var templateParams = {
                name: form.find('input[name="name"]').val(),
                email: form.find('input[name="email"]').val(),
                email: form.find('input[name="subject"]').val(),
                email: form.find('input[name="phone"]').val(),
                message: form.find('textarea[name="message"]').val(),
            };
    
            emailjs.send('service_bzgw9kv', 'template_ud51pdr', templateParams)
                .then(function(response) {
                    alertBox.html('Thank you for your message! We will get back to you soon.').fadeIn();
                    form.trigger('reset');
                    submit.attr('style', 'display: none !important'); 
                }, function(error) {
                    alertBox.html('Oops! Something went wrong, and we couldn\'t send your message.').fadeIn();
                    console.log('FAILED...', error);
                    submit.html('Submit');
                });
        });
    });
    