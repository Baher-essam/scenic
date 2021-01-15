$(document).ready(function(){
  //defult active list *all*
  $('.list').first().addClass('active');
  
  $('.list').click(function(){
    const projectList = $(this).attr('data-filter');
    if(projectList == 'all')
    {
      $('.protfolio-item').show('300');
    }
    else
    {
      $('.protfolio-item').not('.'+projectList).hide('300' ,function(){
        $('.protfolio-item').filter('.'+projectList).show('300');
      });
    
    }
  })
  // add active class on selected button
  $('.list').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
  })
})

AOS.init();