window.onload = function () {
  // create an HTML header
  const heading = document.createElement('h1');
  const heading_text = document.createTextNode('Big Head!');
  heading.appendChild(heading_text);
  document.body.appendChild(heading);
};
