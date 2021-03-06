require.config({ paths: { 'vs': 'https://unpkg.com/monaco-editor@0.12.0/min/vs' }});
window.MonacoEnvironment = { getWorkerUrl: () => proxy };

let proxy = URL.createObjectURL(new Blob([`
	self.MonacoEnvironment = {
		baseUrl: 'https://unpkg.com/monaco-editor@0.12.0/min/'
	};
	importScripts('https://unpkg.com/monaco-editor@0.12.0/min/vs/base/worker/workerMain.js');
`], { type: 'text/javascript' }));

require(["vs/editor/editor.main"], function () {
    let editor = monaco.editor.create(document.getElementById('code_r'), {
        value: [
            'package myjavacode;\n' +
            'public class MyClass {\n' +
            '}',
        ].join('\n'),
        language: 'java',
        theme: 'vs-dark'
    });

    // editor.addListener('didType', () => {
    //     console.log(editor.getValue());
    // });
});
