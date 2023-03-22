const r = document.querySelector(':root');
const themeEl = document.querySelector('#theme-color');
const primaryColorEl = document.getElementById('primary-color');
const btnTextColorEl = document.getElementById('btn-text-color');
const btnHoverTextColorEl = document.getElementById('btn-hover-text-color');
const backgroundColorEl = document.getElementById('btn-background-color');
const backgroundColorTransparencyEl = document.getElementById('btn-background-transparency');
const btnBorderColorEl = document.getElementById('btn-border-color');
const btnBorderSizeEl = document.getElementById('btn-border-size');
const btnBorderRadiusEl = document.getElementById('btn-border-radius');
const disableBtnBorder = document.getElementById('disableBorder');
const btnWidthEl = document.getElementById('btn-width');
const btnHeightEl = document.getElementById('btn-height');
const btnFontSizeEl = document.getElementById('btn-font-size');
const neonStyleDropdown = document.querySelector('#neon-style');
const cssButtonCode = document.querySelector('.css-style-code');
const copyCodeBtn = document.querySelector('.copy-btn');
const copyMsg = document.querySelector('.copy-msg ');

// Default values
let backgroundColor = '#00000000';
let borderProperty = '2px solid #00ffff';
let borderRadiusProperty = '0px';
let btnWidth = '150px';
let btnHeight = '50px';
let btnFontSize = '16px';
let topPos = '50%';
let leftPos = '50%';
let transX = '-50%';
let transY = '-50%';
let startWidth = '100%';
let startHeight = '0';
let endWidth = '100%';
let endHeight = '100%';

function setThemeColor() {
  applyColors(themeEl, '--theme-background-color');
}

function setPrimaryColor() {
  applyColors(primaryColorEl, '--primary-color');
}

function setBtnTextColor() {
  applyColors(btnTextColorEl, '--btn-text-color');
}

function setBtnHoverTextColor() {
  applyColors(btnHoverTextColorEl, '--btn-hover-text-color');
}

function setBtnBackgroundColor() {
  const color = backgroundColorEl.value;
  const opacity = backgroundColorTransparencyEl.value;
  backgroundColor = addTransparency(color,opacity);
  r.style.setProperty('--btn-background-color', backgroundColor);
  return backgroundColor;
}

function setBtnBorder() {
  if(!disableBtnBorder.checked) {
    const color = btnBorderColorEl.value;
    const size = btnBorderSizeEl.value;
    const borderRadius = btnBorderRadiusEl.value;
    borderProperty = `${size}px solid ${color}`;
    borderRadiusProperty = `${borderRadius}px`;
    btnBorderColorEl.disabled = false;
    btnBorderSizeEl.disabled = false;
  }
  else {
    borderProperty = 'none';
    borderRadiusProperty = '0px'
    btnBorderColorEl.disabled = true;
    btnBorderSizeEl.disabled = true;
    
  }
    r.style.setProperty('--btn-border', borderProperty);
    r.style.setProperty('--btn-border-radius', borderRadiusProperty);
    return borderProperty, borderRadiusProperty;
}

function setNeonStyle() {
  const selectedStyle = neonStyleDropdown.value;
    if(selectedStyle === 'default') {
      topPos = '50%';
      leftPos = '50%';
      transX = '-50%';
      transY = '-50%';
      startWidth = '100%';
      startHeight = '0';
      endWidth = '100%';
      endHeight = '100%';
    }
    if(selectedStyle === 'middle-sides') {
      topPos = '50%';
      leftPos = '50%';
      transX = '-50%';
      transY = '-50%';
      startWidth = '0';
      startHeight = '100%';
      endWidth = '100%';
      endHeight = '100%';
    }
    if(selectedStyle === 'middle-grow') {
      topPos = '50%';
      leftPos = '50%';
      transX = '-50%';
      transY = '-50%';
      startWidth = '0';
      startHeight = '0';
      endWidth = '100%';
      endHeight = '100%';
    }
    if(selectedStyle === 'top-bottom') {
      topPos = '0';
      leftPos = '0';
      transX = '0';
      transY = '0';
      startWidth = '100%';
      startHeight = '0';
      endWidth = '100%';
      endHeight = '100%';
    }
    if(selectedStyle === 'bottom-top') {
      topPos = '100%';
      leftPos = '0';
      transX = '0';
      transY = '-100%';
      startWidth = '100%';
      startHeight = '0';
      endWidth = '100%';
      endHeight = '100%';
    }
    if(selectedStyle === 'left-right') {
      topPos = '0';
      leftPos = '0';
      transX = '0';
      transY = '0';
      startWidth = '0';
      startHeight = '100%';
      endWidth = '100%';
      endHeight = '100%';
    }

    if(selectedStyle === 'right-left') {
      topPos = '0';
      leftPos = '100%';
      transX = '-100%';
      transY = '0';
      startWidth = '0';
      startHeight = '100%';
      endWidth = '100%';
      endHeight = '100%';
    }

    if(selectedStyle === 'no-effect') {
      topPos = '0';
      leftPos = '0';
      transX = '0';
      transY = '0';
      startWidth = '0%';
      startHeight = '0%';
      endWidth = '0%';
      endHeight = '0%';
    }

    r.style.setProperty('--neon-pos-top', `${topPos}`);
    r.style.setProperty('--neon-pos-left', `${leftPos}`);
    r.style.setProperty('--neon-translate-x', `${transX}`);
    r.style.setProperty('--neon-translate-y', `${transY}`);
    r.style.setProperty('--neon-width', `${startWidth}`);
    r.style.setProperty('--neon-height', `${startHeight}`);
    r.style.setProperty('--neon-hover-width', `${endWidth}`);
    r.style.setProperty('--neon-hover-height', `${endHeight}`);

    return topPos, leftPos, transX, transY, startWidth, startHeight, endWidth, endHeight;
}

function setBtnWidth() {
  const width = btnWidthEl.value;
  btnWidth = `${width}px`;
  r.style.setProperty('--btn-width', btnWidth)
  return btnWidth;
}

function setBtnHeight() {
  const height = btnHeightEl.value;
  btnHeight = `${height}px`;
  r.style.setProperty('--btn-height', btnHeight)
  return btnHeight;
}

function setBtnFontSize() {
  const fontSize = btnFontSizeEl.value;
  btnFontSize = `${fontSize}px`;
  r.style.setProperty('--btn-font-size', btnFontSize);
  return btnFontSize;
}

function applyColors(element, property) {
  const color = element.value;
  r.style.setProperty(property, color);
}

function addTransparency(color, opacity) {
  const _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
  return color + _opacity.toString(16).toUpperCase();
}


function getCssStyleCode() {
  let cssCode = `:root {
    --primary-color: ${primaryColorEl.value};<br>
    --btn-background-color: ${backgroundColor};<br>
    --btn-text-color: ${btnTextColorEl.value};<br>
    --btn-hover-text-color: ${btnHoverTextColorEl.value};<br>
    --btn-border: ${borderProperty};<br>
    --btn-border-radius: ${borderRadiusProperty};<br>
    --btn-width: ${btnWidth};<br>
    --btn-height: ${btnHeight};<br>
    --btn-font-size: ${btnFontSize};<br>
    --neon-pos-top: ${topPos};<br>
    --neon-pos-left: ${leftPos};<br>
    --neon-translate-x: ${transX};<br>
    --neon-translate-y: ${transY};<br>
    --neon-width: ${startWidth};<br>
    --neon-height: ${startHeight};<br>
    --neon-hover-width: ${endWidth};<br>
    --neon-hover-height: ${endHeight};<br>
    }<br>`;
  let cssRules = document.styleSheets[0].cssRules;

  for(let i=0; i < cssRules.length; i++) {
  if(['.button', '.button:hover', '.button::before', '.button:hover::before'].includes(cssRules[i].selectorText)) {
  cssCode += cssRules[i].cssText + '<br>';
  }
  }
  cssButtonCode.innerHTML = cssCode;
}


copyCodeBtn.addEventListener('click', ()=> {
  if(!cssButtonCode.innerText) {
    copyMsg.innerText = 'Please Get CSS Code first!';
    toggleMsg(copyMsg, 'error');
  }
  else {
    navigator.clipboard.writeText(cssButtonCode.innerText);
    copyMsg.innerText = 'Copy Code Successful!';
    toggleMsg(copyMsg, 'success');
  }
})

function toggleMsg(msg, state) {
  msg.classList.add(state);
  setTimeout(() => {
    msg.classList.remove(state);
  }, 2000)
}