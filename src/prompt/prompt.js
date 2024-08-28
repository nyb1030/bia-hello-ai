import BuiltInAIGenerator from "./../util/builtInAIGenerator.js"

const builtInAiGenerator = new BuiltInAIGenerator("assistant");
const modelStatus = await builtInAiGenerator.checkModelStatus();

const promptText = document.querySelector("#prompt-text").textContent;
const aiButton = document.querySelector("#ai-button");
const outputHTML = document.querySelector("#ai-output");
const validateModel = document.querySelector("#validate-model");
const modelWrapper = document.querySelector("#model-wrapper")
const loadingPlaceholder = document.querySelector(".loading-wrapper")

// Render template


// Run the model
if (modelStatus.available == "readily") {
  
  aiButton.addEventListener("click", runPrompt);
} else if (window.ai && modelStatus.available == "readily") {
  validateModel.innerHTML = `<p>Please wait... the model is downloading...</p>`;
} else {
  modelWrapper.style.display = "none";
  validateModel.innerHTML = `
    <h1> Please use Chrome Canary or Chrome Dev and follow the steps below to enable.</h1>
    <ol>
      <li>Open a new tab in Chrome, go to chrome://flags/#optimization-guide-on-device-model and select Enabled BypassPerfRequirement</li>
      <li>Go to chrome://flags/#prompt-api-for-gemini-nano</li>
      <li>Select Enabled</li>
      <li>Relaunch Chrome.</li>
    </ol>
`;
}

async function runPrompt () {
  loadingPlaceholder.style.display = "block"
  outputHTML.innerHTML = "";

  const result = await builtInAiGenerator.generateSession(promptText);
  outputHTML.innerHTML = result;

  loadingPlaceholder.style.display = "none"
}
