/// <reference types="@workadventure/iframe-api-typings" />


console.log('Script started successfully');

const noteTextArea = document.getElementById("noteTextArea") as HTMLTextAreaElement;

// Waiting for the API to be ready
WA.onInit().then(() => {

    noteTextArea.value = (WA.state.noteText ?? "") as string;

}).catch(e => console.error(e));

export {};