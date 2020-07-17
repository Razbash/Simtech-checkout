//Block entering numbers or letters
$(function() {
    $(document).on("change keyup input click", "input[type='text']", function() {
        if(this.value.match(/[^0-9]/g)){
            if(this.id != "card_customer_name") {
                this.value = this.value.replace(/[^\d\s]/g, "");
            } else {
                this.value = this.value.replace(/[0-9]/g, "")
            }
        };
    });
});

//Tooltip plugin
(function() {
    $(document).ready(function() {
        tippy('#cvc_tooltip', {
            content: '<img src="images/cvc_tooltip.jpg" />',
            allowHTML: true
        });
    });
})();


//The formatting of the entry of the card number
$('#card_number').keyup(function() {
  let $currentValue = $(this).val().split(" ").join(""); 
  if ($currentValue.length > 0) {
    $currentValue = $currentValue.match(new RegExp('.{1,4}', 'g')).join(" ");
  }
  $(this).val($currentValue);
});