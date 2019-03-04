
alert("Js here!");

function scroll(name)
{
  var target = document.querySelector('a[name*=name]');
  target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
}

var anchorAboutUs = document.querySelector('a[href*="#aboutUs"]');
var anchorsMedia = document.querySelector('a[href*="#media"]');
var anchorContacts = document.querySelector('a[href*="#contacts"]');

anchorAboutUs.addEventListener('click',function(e)
{
  e.preventDefault();
  scroll(aboutUs);
  console.log(target);
});

anchorAboutUs.addEventListener('click',function(e)
{
  e.preventDefault();
  scroll();
  console.log(target);
});
