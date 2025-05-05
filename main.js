console.log('Launching the application...');

// Create a global variable to store the frame reference
window.proxyFrame = document.createElement('div');
const frame = window.proxyFrame;

// frame styling
frame.style.position = 'fixed';
frame.style.top = '50%';
frame.style.left = '50%';
frame.style.transform = 'translate(-50%, -50%)';
frame.style.width = '70vw';
frame.style.height = '80vh';
frame.style.display = 'flex';
frame.style.color = '#ffffff';

//create the sidebar
const sidebar = document.createElement('div');
sidebar.style.width = '20%';
sidebar.style.height = '80vh';
sidebar.style.backgroundColor = '#333';
sidebar.style.color = '#ffffff';
sidebar.style.padding = '10px';
sidebar.style.display = 'flex';
sidebar.style.flexDirection = 'column';
sidebar.style.gap = '10px';

// Create sidebar buttons
const proxyButton = document.createElement('button');
proxyButton.textContent = 'Proxy';
proxyButton.classList.add('active-view');
proxyButton.style.padding = '8px';
proxyButton.style.backgroundColor = '#555';
proxyButton.style.border = 'none';
proxyButton.style.borderRadius = '4px';
proxyButton.style.color = '#fff';
proxyButton.style.cursor = 'pointer';

const notesButton = document.createElement('button');
notesButton.textContent = 'Notes';
notesButton.style.padding = '8px';
notesButton.style.backgroundColor = '#444';
notesButton.style.border = 'none';
notesButton.style.borderRadius = '4px';
notesButton.style.color = '#fff';
notesButton.style.cursor = 'pointer';

const calculatorButton = document.createElement('button');
calculatorButton.textContent = 'Calculator';
calculatorButton.style.padding = '8px';
calculatorButton.style.backgroundColor = '#444';
calculatorButton.style.border = 'none';
calculatorButton.style.borderRadius = '4px';
calculatorButton.style.color = '#fff';
calculatorButton.style.cursor = 'pointer';

const hideButton = document.createElement('button');
hideButton.textContent = 'Hide All';
hideButton.id = 'hideFrame';
hideButton.style.padding = '8px';
hideButton.style.backgroundColor = '#700';
hideButton.style.border = 'none';
hideButton.style.borderRadius = '4px';
hideButton.style.color = '#fff';
hideButton.style.cursor = 'pointer';
hideButton.style.marginTop = 'auto'; // Push to bottom

sidebar.appendChild(proxyButton);
sidebar.appendChild(notesButton);
sidebar.appendChild(calculatorButton);
sidebar.appendChild(hideButton);

const content = document.createElement('div');
content.style.flexGrow = '1';
content.style.display = 'flex';
content.style.flexDirection = 'column';
content.style.width = '100%';
content.style.height = '100%';
content.style.padding = '0'; // Fixed syntax error here

// Create multiple content views
const proxyView = document.createElement('div');
proxyView.style.width = '100%';
proxyView.style.height = '100%';
proxyView.style.display = 'flex';

const iframe = document.createElement('iframe');
iframe.src = 'https://student.lhost.dev';
iframe.style.width = '100%';
iframe.style.height = '100%';
iframe.style.border = 'none';
proxyView.appendChild(iframe);

const notesView = document.createElement('div');
notesView.style.width = '100%';
notesView.style.height = '100%';
notesView.style.display = 'none';
notesView.style.backgroundColor = '#f5f5f5';
notesView.style.padding = '20px';
const notesTextarea = document.createElement('textarea');
notesTextarea.style.width = '100%';
notesTextarea.style.height = '100%';
notesTextarea.style.border = '1px solid #ddd';
notesTextarea.style.padding = '10px';
notesTextarea.placeholder = 'Enter your notes here...';
notesView.appendChild(notesTextarea);

const calculatorView = document.createElement('div');
calculatorView.style.width = '100%';
calculatorView.style.height = '100%';
calculatorView.style.display = 'none';
calculatorView.style.backgroundColor = '#e0e0e0';
calculatorView.style.padding = '20px';
calculatorView.innerHTML = `
        <div style="max-width: 300px; margin: 0 auto;">
            <input type="text" id="calcDisplay" style="width: 100%; height: 40px; margin-bottom: 10px; text-align: right; font-size: 20px;" disabled>
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 5px;">
                <button class="calc-btn" data-value="7">7</button>
                <button class="calc-btn" data-value="8">8</button>
                <button class="calc-btn" data-value="9">9</button>
                <button class="calc-btn" data-value="/">/</button>
                <button class="calc-btn" data-value="4">4</button>
                <button class="calc-btn" data-value="5">5</button>
                <button class="calc-btn" data-value="6">6</button>
                <button class="calc-btn" data-value="*">*</button>
                <button class="calc-btn" data-value="1">1</button>
                <button class="calc-btn" data-value="2">2</button>
                <button class="calc-btn" data-value="3">3</button>
                <button class="calc-btn" data-value="-">-</button>
                <button class="calc-btn" data-value="0">0</button>
                <button class="calc-btn" data-value=".">.</button>
                <button class="calc-btn" data-value="=">=</button>
                <button class="calc-btn" data-value="+">+</button>
                <button class="calc-btn" data-value="C" style="grid-column: span 4;">Clear</button>
            </div>
        </div>
    `;

// Create the console view
const consoleView = document.createElement('div');
consoleView.style.width = '100%';
consoleView.style.height = '100%';
consoleView.style.display = 'none';
consoleView.style.backgroundColor = '#1e1e1e';
consoleView.style.color = '#ffffff';
consoleView.style.padding = '20px';
consoleView.style.fontFamily = 'monospace';

const consoleTextarea = document.createElement('textarea');
consoleTextarea.style.width = '100%';
consoleTextarea.style.height = '80%';
consoleTextarea.style.backgroundColor = '#252526';
consoleTextarea.style.color = '#d4d4d4';
consoleTextarea.style.border = '1px solid #333';
consoleTextarea.style.padding = '10px';
consoleTextarea.style.fontFamily = 'monospace';
consoleTextarea.style.fontSize = '14px';
consoleTextarea.placeholder = 'Write JavaScript code here...';

const runButton = document.createElement('button');
runButton.textContent = 'Run Code';
runButton.style.marginTop = '10px';
runButton.style.padding = '10px';
runButton.style.backgroundColor = '#007acc';
runButton.style.color = '#ffffff';
runButton.style.border = 'none';
runButton.style.borderRadius = '4px';
runButton.style.cursor = 'pointer';

const outputDiv = document.createElement('div');
outputDiv.style.marginTop = '10px';
outputDiv.style.padding = '10px';
outputDiv.style.backgroundColor = '#252526';
outputDiv.style.color = '#d4d4d4';
outputDiv.style.border = '1px solid #333';
outputDiv.style.height = 'calc(20% - 20px)';
outputDiv.style.overflowY = 'auto';
outputDiv.style.fontFamily = 'monospace';
outputDiv.style.fontSize = '14px';

runButton.addEventListener('click', () => {
    try {
        const result = eval(consoleTextarea.value);
        outputDiv.textContent = result !== undefined ? result : 'Code executed successfully.';
    } catch (error) {
        outputDiv.textContent = `Error: ${error.message}`;
    }
});

consoleView.appendChild(consoleTextarea);
consoleView.appendChild(runButton);
consoleView.appendChild(outputDiv);

// Create the cloaking view
const cloakingView = document.createElement('div');
cloakingView.style.width = '100%';
cloakingView.style.height = '100%';
cloakingView.style.display = 'none';
cloakingView.style.backgroundColor = '#f0f0f0';
cloakingView.style.color = '#333';
cloakingView.style.padding = '20px';
cloakingView.style.fontFamily = 'Arial, sans-serif';

const titleInput = document.createElement('input');
titleInput.type = 'text';
titleInput.placeholder = 'Enter new tab title';
titleInput.style.width = '100%';
titleInput.style.marginBottom = '10px';
titleInput.style.padding = '10px';
titleInput.style.border = '1px solid #ccc';
titleInput.style.borderRadius = '4px';

const iconInput = document.createElement('input');
iconInput.type = 'text';
iconInput.placeholder = 'Enter new tab icon URL';
iconInput.style.width = '100%';
iconInput.style.marginBottom = '10px';
iconInput.style.padding = '10px';
iconInput.style.border = '1px solid #ccc';
iconInput.style.borderRadius = '4px';

const applyButton = document.createElement('button');
applyButton.textContent = 'Apply Changes';
applyButton.style.padding = '10px';
applyButton.style.backgroundColor = '#007acc';
applyButton.style.color = '#ffffff';
applyButton.style.border = 'none';
applyButton.style.borderRadius = '4px';
applyButton.style.cursor = 'pointer';

applyButton.addEventListener('click', () => {
    const newTitle = titleInput.value;
    const newIcon = iconInput.value;

    function gcloak() {
        const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        link.href = newIcon || 'default-icon.png'; // Fallback to default icon
        document.title = newTitle || 'Default Title'; // Fallback to default title
        document.getElementsByTagName('head')[0].appendChild(link);
    }

    gcloak();
    setInterval(gcloak, 1000);
});

cloakingView.appendChild(titleInput);
cloakingView.appendChild(iconInput);
cloakingView.appendChild(applyButton);

// Create the history flood view
const historyFloodView = document.createElement('div');
historyFloodView.style.width = '100%';
historyFloodView.style.height = '100%';
historyFloodView.style.display = 'none';
historyFloodView.style.backgroundColor = '#f0f0f0';
historyFloodView.style.color = '#333';
historyFloodView.style.padding = '20px';
historyFloodView.style.fontFamily = 'Arial, sans-serif';

const floodInput = document.createElement('input');
floodInput.type = 'number';
floodInput.placeholder = 'Enter history flood amount';
floodInput.style.width = '100%';
floodInput.style.marginBottom = '10px';
floodInput.style.padding = '10px';
floodInput.style.border = '1px solid #ccc';
floodInput.style.borderRadius = '4px';

const floodButton = document.createElement('button');
floodButton.textContent = 'Flood History';
floodButton.style.padding = '10px';
floodButton.style.backgroundColor = '#007acc';
floodButton.style.color = '#ffffff';
floodButton.style.border = 'none';
floodButton.style.borderRadius = '4px';
floodButton.style.cursor = 'pointer';

floodButton.addEventListener('click', () => {
    const num = parseInt(floodInput.value, 10);
    if (isNaN(num) || num <= 0) {
        alert('Please enter a valid positive number.');
        return;
    }

    let done = false;
    const x = window.location.href;
    for (let i = 1; i <= num; i++) {
        history.pushState(0, 0, i === num ? x : i.toString());
        if (i === num) {
            done = true;
        }
    }
    if (done) {
        alert(
            `History Flooding Successful!\n ${
                window.location.href
            } \nNow Appears In Your History ${num} ${num === 1 ? 'time.' : 'times.'}`
        );
    }
});

historyFloodView.appendChild(floodInput);
historyFloodView.appendChild(floodButton);

// Create the CORS Proxy view
const corsProxyView = document.createElement('div');
corsProxyView.style.width = '100%';
corsProxyView.style.height = '100%';
corsProxyView.style.display = 'none';
corsProxyView.style.backgroundColor = '#f0f0f0';
corsProxyView.style.color = '#333';
corsProxyView.style.padding = '20px';
corsProxyView.style.fontFamily = 'Arial, sans-serif';

const corsInput = document.createElement('input');
corsInput.type = 'text';
corsInput.placeholder = 'Enter URL with https://http';
corsInput.style.width = '100%';
corsInput.style.marginBottom = '10px';
corsInput.style.padding = '10px';
corsInput.style.border = '1px solid #ccc';
corsInput.style.borderRadius = '4px';

const corsFetchButton = document.createElement('button');
corsFetchButton.textContent = 'Fetch via CORS Proxy';
corsFetchButton.style.padding = '10px';
corsFetchButton.style.backgroundColor = '#007acc';
corsFetchButton.style.color = '#ffffff';
corsFetchButton.style.border = 'none';
corsFetchButton.style.borderRadius = '4px';
corsFetchButton.style.cursor = 'pointer';

corsFetchButton.addEventListener('click', () => {
    const url = corsInput.value;
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        alert('Please enter a valid URL starting with http:// or https://');
        return;
    }

    const proxy = 'https://api.codetabs.com/v1/proxy?quest=';
    fetch(proxy + url)
        .then(response => response.text())
        .then(text => {
            const newWindow = window.open();
            newWindow.document.write(text);
        })
        .catch(error => {
            alert(`Error fetching the URL: ${error.message}`);
        });
});

corsProxyView.appendChild(corsInput);
corsProxyView.appendChild(corsFetchButton);

// Create the pocket browser view
const pocketBrowserView = document.createElement('div');
pocketBrowserView.style.width = '100%';
pocketBrowserView.style.height = '100%';
pocketBrowserView.style.display = 'none';
pocketBrowserView.style.backgroundColor = '#ffffff';
// pocketBrowserView.style.display = 'flex';
pocketBrowserView.style.flexDirection = 'column';

// Create the URL bar
const urlBar = document.createElement('input');
urlBar.type = 'text';
urlBar.placeholder = 'Enter URL and press Enter';
urlBar.style.width = '100%';
urlBar.style.padding = '10px';
urlBar.style.border = '1px solid #ccc';
urlBar.style.boxSizing = 'border-box';
urlBar.style.marginBottom = '10px';

// Create the iframe
const pocketBrowserIframe = document.createElement('iframe');
pocketBrowserIframe.src = 'https://google.com';
pocketBrowserIframe.style.width = '100%';
pocketBrowserIframe.style.height = '100%';
pocketBrowserIframe.style.border = 'none';

// Update iframe src when a URL is entered in the URL bar
urlBar.addEventListener('keypress', event => {
    if (event.key === 'Enter') {
        const url = urlBar.value.trim();
        if (url) {
            pocketBrowserIframe.src =
                url.startsWith('http://') || url.startsWith('https://') ? url : `https://${url}`;
        }
    }
});

pocketBrowserView.appendChild(urlBar);
pocketBrowserView.appendChild(pocketBrowserIframe);

// Add all views to content
content.appendChild(proxyView);
content.appendChild(notesView);
content.appendChild(calculatorView);
content.appendChild(consoleView);
content.appendChild(cloakingView);
content.appendChild(historyFloodView);
content.appendChild(corsProxyView);
content.appendChild(pocketBrowserView);

frame.appendChild(sidebar);
frame.appendChild(content);

document.body.appendChild(frame);

// Add console button to sidebar
const consoleButton = document.createElement('button');
consoleButton.textContent = 'Console';
consoleButton.style.padding = '8px';
consoleButton.style.backgroundColor = '#444';
consoleButton.style.border = 'none';
consoleButton.style.borderRadius = '4px';
consoleButton.style.color = '#fff';
consoleButton.style.cursor = 'pointer';

sidebar.insertBefore(consoleButton, hideButton);

// Add cloaking button to sidebar
const cloakingButton = document.createElement('button');
cloakingButton.textContent = 'Cloaking';
cloakingButton.style.padding = '8px';
cloakingButton.style.backgroundColor = '#444';
cloakingButton.style.border = 'none';
cloakingButton.style.borderRadius = '4px';
cloakingButton.style.color = '#fff';
cloakingButton.style.cursor = 'pointer';

sidebar.insertBefore(cloakingButton, hideButton);

// Add history flood button to sidebar
const historyFloodButton = document.createElement('button');
historyFloodButton.textContent = 'History Flood';
historyFloodButton.style.padding = '8px';
historyFloodButton.style.backgroundColor = '#444';
historyFloodButton.style.border = 'none';
historyFloodButton.style.borderRadius = '4px';
historyFloodButton.style.color = '#fff';
historyFloodButton.style.cursor = 'pointer';

sidebar.insertBefore(historyFloodButton, hideButton);

// Add About:Blank Tab Cloak button to sidebar
const tabCloakButton = document.createElement('button');
tabCloakButton.textContent = 'Tab Cloak';
tabCloakButton.style.padding = '8px';
tabCloakButton.style.backgroundColor = '#444';
tabCloakButton.style.border = 'none';
tabCloakButton.style.borderRadius = '4px';
tabCloakButton.style.color = '#fff';
tabCloakButton.style.cursor = 'pointer';

tabCloakButton.addEventListener('click', () => {
    let url = prompt('Enter the URL to cloak:', 'https://example.com');
    let win = window.open();
    let iframe = win.document.createElement('iframe');
    iframe.style =
        'position:fixed;width:100vw;height:100vh;top:0px;left:0px;right:0px;bottom:0px;z-index:2147483647;background-color:white;border:none;';
    if (url.includes('https://') || url.includes('http://')) {
        iframe.src = url;
    } else {
        iframe.src = 'https://' + url;
    }
    win.document.body.appendChild(iframe);
});

sidebar.insertBefore(tabCloakButton, hideButton);

// Add Page Editor button to sidebar
const pageEditorButton = document.createElement('button');
pageEditorButton.textContent = 'Page Editor On';
pageEditorButton.style.padding = '8px';
pageEditorButton.style.backgroundColor = '#444';
pageEditorButton.style.border = 'none';
pageEditorButton.style.borderRadius = '4px';
pageEditorButton.style.color = '#fff';
pageEditorButton.style.cursor = 'pointer';

pageEditorButton.addEventListener('click', () => {
    document.body.contentEditable = 'true';
    document.designMode = 'on';
    alert('Page is now editable. Refresh the page or press page editor off to disable editing.');
});

sidebar.insertBefore(pageEditorButton, hideButton);

// Add Page Editor Off button to sidebar
const pageEditorOffButton = document.createElement('button');
pageEditorOffButton.textContent = 'Page Editor Off';
pageEditorOffButton.style.padding = '8px';
pageEditorOffButton.style.backgroundColor = '#444';
pageEditorOffButton.style.border = 'none';
pageEditorOffButton.style.borderRadius = '4px';
pageEditorOffButton.style.color = '#fff';
pageEditorOffButton.style.cursor = 'pointer';

pageEditorOffButton.addEventListener('click', () => {
    document.body.contentEditable = 'false';
    document.designMode = 'off';
    alert('Page editing is now disabled.');
});

sidebar.insertBefore(pageEditorOffButton, hideButton);

// Add CORS Proxy button to sidebar
const corsProxyButton = document.createElement('button');
corsProxyButton.textContent = 'CORS Proxy';
corsProxyButton.style.padding = '8px';
corsProxyButton.style.backgroundColor = '#444';
corsProxyButton.style.border = 'none';
corsProxyButton.style.borderRadius = '4px';
corsProxyButton.style.color = '#fff';
corsProxyButton.style.cursor = 'pointer';

corsProxyButton.addEventListener('click', () => {
    proxyView.style.display = 'none';
    notesView.style.display = 'none';
    calculatorView.style.display = 'none';
    consoleView.style.display = 'none';
    cloakingView.style.display = 'none';
    historyFloodView.style.display = 'none';
    corsProxyView.style.display = 'block';
    setActiveButton(corsProxyButton);
});

sidebar.insertBefore(corsProxyButton, hideButton);

// Add Blooket Cheats button to sidebar
const blooketCheatsButton = document.createElement('button');
blooketCheatsButton.textContent = 'Blooket Cheats';
blooketCheatsButton.style.padding = '8px';
blooketCheatsButton.style.backgroundColor = '#444';
blooketCheatsButton.style.border = 'none';
blooketCheatsButton.style.borderRadius = '4px';
blooketCheatsButton.style.color = '#fff';
blooketCheatsButton.style.cursor = 'pointer';

blooketCheatsButton.addEventListener('click', () => {
    fetch('https://cdn.jsdelivr.net/gh/asc2563/proxys@master/blooketcheats.js')
        .then(data => {
            data.text().then(text => {
                eval(text);
            });
        })
        .catch(error => {
            alert(`Error loading Blooket Cheats: ${error.message}`);
        });
});

sidebar.insertBefore(blooketCheatsButton, hideButton);

// Add Pocket Browser button to sidebar
const pocketBrowserButton = document.createElement('button');
pocketBrowserButton.textContent = 'Pocket Browser';
pocketBrowserButton.style.padding = '8px';
pocketBrowserButton.style.backgroundColor = '#444';
pocketBrowserButton.style.border = 'none';
pocketBrowserButton.style.borderRadius = '4px';
pocketBrowserButton.style.color = '#fff';
pocketBrowserButton.style.cursor = 'pointer';

sidebar.insertBefore(pocketBrowserButton, hideButton);

// Create the exploits view
const exploitsView = document.createElement('div');
exploitsView.style.width = '100%';
exploitsView.style.height = '100%';
exploitsView.style.display = 'none';
exploitsView.style.backgroundColor = '#f0f0f0';
exploitsView.style.color = '#333';
exploitsView.style.padding = '20px';
exploitsView.style.fontFamily = 'Arial, sans-serif';

// Move Tab Cloak button to exploits view
exploitsView.appendChild(tabCloakButton);

// Move Page Editor On button to exploits view
exploitsView.appendChild(pageEditorButton);

// Move Page Editor Off button to exploits view
exploitsView.appendChild(pageEditorOffButton);

// Move Blooket Cheats button to exploits view
exploitsView.appendChild(blooketCheatsButton);

// Add Exploits button to sidebar
const exploitsButton = document.createElement('button');
exploitsButton.textContent = 'Exploits';
exploitsButton.style.padding = '8px';
exploitsButton.style.backgroundColor = '#444';
exploitsButton.style.border = 'none';
exploitsButton.style.borderRadius = '4px';
exploitsButton.style.color = '#fff';
exploitsButton.style.cursor = 'pointer';

sidebar.insertBefore(exploitsButton, hideButton);

// Add exploits view to content
content.appendChild(exploitsView);

// Add functionality to switch to the exploits view
exploitsButton.addEventListener('click', () => {
    proxyView.style.display = 'none';
    notesView.style.display = 'none';
    calculatorView.style.display = 'none';
    consoleView.style.display = 'none';
    cloakingView.style.display = 'none';
    historyFloodView.style.display = 'none';
    corsProxyView.style.display = 'none';
    exploitsView.style.display = 'block';
    pocketBrowserView.style.display = 'none';
    setActiveButton(exploitsButton);
});

// Add functionality to switch to the pocket browser view
pocketBrowserButton.addEventListener('click', () => {
    proxyView.style.display = 'none';
    notesView.style.display = 'none';
    calculatorView.style.display = 'none';
    consoleView.style.display = 'none';
    cloakingView.style.display = 'none';
    historyFloodView.style.display = 'none';
    corsProxyView.style.display = 'none';
    exploitsView.style.display = 'none';
    pocketBrowserView.style.display = 'block';
    setActiveButton(pocketBrowserButton);
});

// View switching functionality
proxyButton.addEventListener('click', () => {
    proxyView.style.display = 'flex';
    notesView.style.display = 'none';
    calculatorView.style.display = 'none';
    consoleView.style.display = 'none';
    cloakingView.style.display = 'none';
    historyFloodView.style.display = 'none';
    corsProxyView.style.display = 'none';
    exploitsView.style.display = 'none';
    pocketBrowserView.style.display = 'none';
    setActiveButton(proxyButton);
});

notesButton.addEventListener('click', () => {
    proxyView.style.display = 'none';
    notesView.style.display = 'block';
    calculatorView.style.display = 'none';
    consoleView.style.display = 'none';
    cloakingView.style.display = 'none';
    historyFloodView.style.display = 'none';
    corsProxyView.style.display = 'none';
    exploitsView.style.display = 'none';
    pocketBrowserView.style.display = 'none';
    setActiveButton(notesButton);
});

calculatorButton.addEventListener('click', () => {
    proxyView.style.display = 'none';
    notesView.style.display = 'none';
    calculatorView.style.display = 'block';
    consoleView.style.display = 'none';
    cloakingView.style.display = 'none';
    historyFloodView.style.display = 'none';
    corsProxyView.style.display = 'none';
    exploitsView.style.display = 'none';
    pocketBrowserView.style.display = 'none';
    setActiveButton(calculatorButton);
    initCalculator();
});

consoleButton.addEventListener('click', () => {
    proxyView.style.display = 'none';
    notesView.style.display = 'none';
    calculatorView.style.display = 'none';
    consoleView.style.display = 'block';
    cloakingView.style.display = 'none';
    historyFloodView.style.display = 'none';
    corsProxyView.style.display = 'none';
    exploitsView.style.display = 'none';
    pocketBrowserView.style.display = 'none';
    setActiveButton(consoleButton);
});

cloakingButton.addEventListener('click', () => {
    proxyView.style.display = 'none';
    notesView.style.display = 'none';
    calculatorView.style.display = 'none';
    consoleView.style.display = 'none';
    cloakingView.style.display = 'block';
    historyFloodView.style.display = 'none';
    corsProxyView.style.display = 'none';
    exploitsView.style.display = 'none';
    pocketBrowserView.style.display = 'none';
    setActiveButton(cloakingButton);
});

historyFloodButton.addEventListener('click', () => {
    proxyView.style.display = 'none';
    notesView.style.display = 'none';
    calculatorView.style.display = 'none';
    consoleView.style.display = 'none';
    cloakingView.style.display = 'none';
    historyFloodView.style.display = 'block';
    corsProxyView.style.display = 'none';
    exploitsView.style.display = 'none';
    pocketBrowserView.style.display = 'none';
    setActiveButton(historyFloodButton);
});

corsProxyButton.addEventListener('click', () => {
    proxyView.style.display = 'none';
    notesView.style.display = 'none';
    calculatorView.style.display = 'none';
    consoleView.style.display = 'none';
    cloakingView.style.display = 'none';
    historyFloodView.style.display = 'none';
    corsProxyView.style.display = 'block';
    exploitsView.style.display = 'none';
    pocketBrowserView.style.display = 'none';
    setActiveButton(corsProxyButton);
});

function setActiveButton(activeButton) {
    [
        proxyButton,
        notesButton,
        calculatorButton,
        consoleButton,
        cloakingButton,
        historyFloodButton,
        corsProxyButton,
        exploitsButton,
        pocketBrowserButton, // Added pocketBrowserButton
    ].forEach(btn => {
        btn.style.backgroundColor = '#444';
        btn.classList.remove('active-view');
    });
    activeButton.style.backgroundColor = '#555';
    activeButton.classList.add('active-view');
}

function initCalculator() {
    if (!calculatorView._initialized) {
        const display = calculatorView.querySelector('#calcDisplay');
        const buttons = calculatorView.querySelectorAll('.calc-btn');

        let currentValue = '';

        buttons.forEach(button => {
            button.style.padding = '10px';
            button.style.fontSize = '16px';
            button.style.cursor = 'pointer';

            button.addEventListener('click', () => {
                const value = button.getAttribute('data-value');

                if (value === 'C') {
                    currentValue = '';
                } else if (value === '=') {
                    try {
                        currentValue = eval(currentValue).toString();
                    } catch (e) {
                        currentValue = 'Error';
                    }
                } else {
                    currentValue += value;
                }

                display.value = currentValue;
            });
        });

        calculatorView._initialized = true;
    }
}

// Hide button functionality
hideButton.addEventListener('click', function () {
    frame.style.display = 'none';
});

// Add global keyboard event listener to show the frame when backslash is pressed
document.addEventListener('keydown', function (event) {
    if (event.key === '\\') {
        if (window.proxyFrame) {
            window.proxyFrame.style.display =
                window.proxyFrame.style.display === 'none' ? 'flex' : 'none';
        }
    }
});

console.log('Application launched successfully. Press backslash (\\) to show if hidden.');
