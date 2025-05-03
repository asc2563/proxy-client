function launch() {
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

    // Add all views to content
    content.appendChild(proxyView);
    content.appendChild(notesView);
    content.appendChild(calculatorView);
    content.appendChild(consoleView);

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

    // View switching functionality
    proxyButton.addEventListener('click', () => {
        proxyView.style.display = 'flex';
        notesView.style.display = 'none';
        calculatorView.style.display = 'none';
        consoleView.style.display = 'none';
        setActiveButton(proxyButton);
    });

    notesButton.addEventListener('click', () => {
        proxyView.style.display = 'none';
        notesView.style.display = 'block';
        calculatorView.style.display = 'none';
        consoleView.style.display = 'none';
        setActiveButton(notesButton);
    });

    calculatorButton.addEventListener('click', () => {
        proxyView.style.display = 'none';
        notesView.style.display = 'none';
        calculatorView.style.display = 'block';
        consoleView.style.display = 'none';
        setActiveButton(calculatorButton);
        initCalculator();
    });

    consoleButton.addEventListener('click', () => {
        proxyView.style.display = 'none';
        notesView.style.display = 'none';
        calculatorView.style.display = 'none';
        consoleView.style.display = 'block';
        setActiveButton(consoleButton);
    });

    function setActiveButton(activeButton) {
        [proxyButton, notesButton, calculatorButton, consoleButton].forEach(btn => {
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
            if (window.proxyFrame && window.proxyFrame.style.display === 'none') {
                window.proxyFrame.style.display = 'flex';
            }
        }
    });

    console.log('Application launched successfully. Press backslash (\\) to show if hidden.');
}
