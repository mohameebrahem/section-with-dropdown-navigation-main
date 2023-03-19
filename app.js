const featuresElement = document.querySelector('nav ul li');
const featuresList = document.querySelector('.features-list');
const companyElement = document.querySelector('.company');
const companyList = document.querySelector('.company-list');
const imageArrowDown = 'images/icon-arrow-down.svg';
const imageArrowUp = 'images/icon-arrow-up.svg';
const featuresElementMob = document.querySelector('.mobile-menu ul li');
const featuresListMob = document.querySelector('.mobile-menu .features-list');
const companyElementMob = document.querySelector('.mobile-menu .company');
const companyListMob = document.querySelector('.mobile-menu .company-list');
const desktopList = document.querySelector('.list-img img');
desktopList.addEventListener('click', () => {
  document.querySelector('.mobile-menu').style.display = 'block';
  document.querySelector('.drop').style.display = 'block';
  document.querySelector('.close-img').style.display = 'block';
});
document.querySelector('.drop').addEventListener('click', () => {
  document.querySelector('.mobile-menu').style.display = 'none';
  document.querySelector('.drop').style.display = 'none';
  document.querySelector('.close-img').style.display = 'none';
});
document.querySelector('.close-img').addEventListener('click', () => {
  document.querySelector('.mobile-menu').style.display = 'none';
  document.querySelector('.drop').style.display = 'none';
  document.querySelector('.close-img').style.display = 'none';
});

featuresElement.addEventListener('mouseover', () => {
  if (featuresList.style.display == 'none') {
    featuresList.style.display = 'block';
    featuresElement.querySelector('img').src = imageArrowUp;
  } else {
    featuresList.style.display = 'none';
    featuresElement.querySelector('img').src = imageArrowDown;
  }
});
featuresElement.addEventListener('mouseout', () => {
  if (featuresList.style.display == 'block') {
    featuresList.style.display = 'none';
    featuresElement.querySelector('img').src = imageArrowDown;
  }
});
companyElement.addEventListener('mouseover', () => {
  if (companyList.style.display == 'none') {
    companyList.style.display = 'block';
    companyElement.querySelector('img').src = imageArrowUp;
  } else {
    companyList.style.display = 'none';
    companyElement.querySelector('img').src = imageArrowDown;
  }
});
companyElement.addEventListener('mouseout', () => {
  if (companyList.style.display == 'block') {
    companyList.style.display = 'none';
    companyElement.querySelector('img').src = imageArrowDown;
  }
});

featuresElementMob.addEventListener('mouseover', () => {
  if (featuresListMob.style.display == 'none') {
    featuresListMob.style.display = 'block';
    featuresElementMob.querySelector('img').src = imageArrowUp;
  } else {
    featuresListMob.style.display = 'none';
    featuresElementMob.querySelector('img').src = imageArrowDown;
  }
});
featuresElementMob.addEventListener('mouseout', () => {
  if (featuresListMob.style.display == 'block') {
    featuresListMob.style.display = 'none';
    featuresElementMob.querySelector('img').src = imageArrowDown;
  }
});
companyElementMob.addEventListener('mouseover', () => {
  if (companyListMob.style.display == 'none') {
    companyListMob.style.display = 'block';
    companyElementMob.querySelector('img').src = imageArrowUp;
  } else {
    companyListMob.style.display = 'none';
    companyElementMob.querySelector('img').src = imageArrowDown;
  }
});
companyElementMob.addEventListener('mouseout', () => {
  if (companyListMob.style.display == 'block') {
    companyListMob.style.display = 'none';
    companyElementMob.querySelector('img').src = imageArrowDown;
  }
});
