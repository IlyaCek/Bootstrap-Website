$(document).ready(function () {
   $('.nav-button').click(function () {
      $('.nav-button').toggleClass('change')
   });

   $('.gallery-list-item').click(function () {
      let value = $(this).attr('data-filter');
      if (value === 'all') {
         $('.filter').show(300);
      } else {
         $('.filter').not('.' + value).hide(300);
         $('.filter').filter('.' + value).show(300);
      }
   });

   $('.gallery-list-item').click(function () {
      $(this).addClass('active-item').siblings().removeClass('active-item');
   });

   $(window).scroll(function () {
      let position = $(this).scrollTop();
      if (position >= 4300) {
         $('.card-1').addClass('movefromLeft')
         $('.card-2').addClass('movefromBottom')
         $('.card-3').addClass('movefromRight')
      }
      else {
         $('.card-1').removeClass('movefromLeft')
         $('.card-2').removeClass('movefromBottom')
         $('.card-3').removeClass('movefromRight')
      }
   });


   const months = document.querySelector('#months')
   const days = document.querySelector('#days')

   months.addEventListener('change', () => {
      const currentMonth = months.value
      let daysNumber = 0
      switch(currentMonth) {
         case 'January':
         case 'March':
         case 'May':
         case 'July':
         case 'August':
         case 'October':
         case 'December':
            daysNumber = 31
            break
         case 'Febuary':
            daysNumber = 29
            break
         default:
            daysNumber = 30
      }

      days.innerHTML = ''
      for (let i = 0; i < daysNumber; i++) {
         const optionElement = document.createElement('option')
         optionElement.innerText = i + 1
         days.appendChild(optionElement)
      }
   })

   

});


























































