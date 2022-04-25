// Start dark mode if it's after 6:59:59pm
if (new Date().getHours() > 18) {
  //alert(new Date().getHours());
  const html = document.querySelector('html');
  html.style.backgroundColor = '#303030';
  html.style.color = 'white';
}

if (new Date().getHours() > 18) {
  const PageHeader = document.querySelector('header');
  PageHeader.style.backgroundColor = '#303030';
  PageHeader.style.color = 'white';
}

if (new Date().getHours() > 18) {
  const NavUlLi = document.querySelectorAll('nav ul li');
  NavUlLi[0].style.backgroundColor = '#586A72';
  NavUlLi[0].style.color = 'white';
  NavUlLi[0].style.borderColor = '#586A72';
  NavUlLi[1].style.backgroundColor = '#586A72';
  NavUlLi[1].style.color = 'white';
  NavUlLi[1].style.borderColor = '#586A72';
  NavUlLi[2].style.backgroundColor = '#586A72';
  NavUlLi[2].style.color = 'white';
  NavUlLi[2].style.borderColor = '#586A72';
  }

  if (new Date().getHours() > 18) {
    const PageFooter = document.querySelectorAll('footer');
    PageFooter[0].style.backgroundColor = '#586A72';
    PageFooter[0].style.color = 'white';
  }


if (new Date().getHours() > 18) {
  const wrapperBody = document.getElementsByClassName('wrapper');
  wrapperBody[0].style.backgroundColor = '#5e5e5e';
  wrapperBody[0].style.color = 'white';
  wrapperBody[0].style.borderColor = '#586A72';
}

if (new Date().getHours() > 18) {
  const ServContainer = document.getElementsByClassName('service_container');
  ServContainer[0].style.backgroundColor = '#1A1A1A';
  ServContainer[0].style.color = 'white';
  ServContainer[0].style.borderColor = '#586A72';
}

if (new Date().getHours() > 18) {
  const ContactContainer = document.getElementsByClassName('contact_container');
  ContactContainer[0].style.backgroundColor = '#1A1A1A';
  ContactContainer[0].style.color = 'white';
  ContactContainer[0].style.borderColor = '#586A72';
}
