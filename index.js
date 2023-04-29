// BpmnJS is the BPMN viewer instance
const viewer = new BpmnJS({ container: '#canvas' });

function fetchDiagram(url) {
    return fetch(url).then(response => response.text());
}

async function run() {
    debugger
    const diagram = await fetchDiagram('https://raw.githubusercontent.com/camunda/camunda-platform-get-started/main/process/send-email.bpmn');

    try {
        await viewer.importXML(diagram);
        // ...
    } catch (err) {
        // ...
    }
}

document.getElementById('btn-visualize').addEventListener('click',()=>{
    xml = document.getElementById('txt-xml').value;
    viewer.importXML(xml)
})


