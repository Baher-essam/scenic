//animation library
AOS.init();


/*start of projects filter */
$(document).ready(function(){
  //defult active list *all*
  $('.list').first().addClass('active');
  
  $('.list').click(function(){
    const projectList = $(this).attr('data-filter');
    if(projectList == 'all')
    {
      $('.portfolio-item').show('300');
    }
    else
    {
      $('.portfolio-item').not('.'+projectList).hide('300' ,function(){
      $('.portfolio-item').filter('.'+projectList).show('300');
    });
    
    }
  })
  // add active class on selected button
  $('.list').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
  })
})
/*end of projects filter */