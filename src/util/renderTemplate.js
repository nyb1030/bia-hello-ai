let _TEMPLATE_CONTENT_LIST = [
  { 
    "name": "prompt", 
    "title": "🐥 Hello World of AI 👋", 
    "textarea_content": "Write a short poem" 
  },
  { 
    "name": "summarization", 
    "title": "🐥 Summarize with AI 👋",
    "textarea_content": `Hiroshi chuckled as he took a sip of his green tea. It was a typical Monday morning in the life of a Chrome engineer, but the project on his desk was far from ordinary. He was tasked with developing the "isTeapot?" API, a quirky new feature for web developers that would return a HTTP 418 "I\'m a teapot" status code if the requested resource was, in fact, a teapot. The day began with a flurry of code reviews and discussions with his team. They debated the finer points of the API\'s design, including whether to support different teapot types like "kyusu" or "tetsubin". Hiroshi argued for a more inclusive approach, allowing developers to specify any teapot-like object in the request headers. After a lively debate, they settled on a flexible design that allowed for custom teapot definitions. Hiroshi dove into the implementation, his fingers dancing across the keyboard as he crafted the code that would bring this peculiar API to life. He added a few Easter eggs for developers who might stumble upon the feature, including a hidden reference to the Hyper Text Coffee Pot Control Protocol. By lunchtime, Hiroshi had a working prototype. He tested it with a few sample requests, grinning as the "418 I\'m a teapot" response popped up on his screen. He imagined the amusement it would bring to web developers who discovered this hidden gem. As the afternoon progressed, Hiroshi fine-tuned the API, adding documentation and examples to help developers get started. He envisioned a future where websites would display playful teapot animations when the "isTeapot?" API was triggered, adding a touch of whimsy to the internet. As the day wound down, Hiroshi pushed his code to the repository, a sense of satisfaction washing over him. The "isTeapot?" API was a small, quirky feature, but it brought a smile to his face. He knew that somewhere out there, a web developer was going to have a lot of fun with it.`
  }
]

const templateInsert = document.querySelector("#built-in-ai-section");
const template = document.querySelector("#built-in-ai-template");

const duplicateTemplate = template.content.cloneNode(true);;

let templateTitle = duplicateTemplate.querySelector(".template-title");
let templateTextArea = duplicateTemplate.querySelector(".template-prompt-textarea");

switch (true) {
  case window.location.pathname.toString().includes("prompt.html"):
    let promptPageData = _TEMPLATE_CONTENT_LIST.find(({ name }) => name === "prompt" );
    templateTitle.textContent = promptPageData.title;
    templateTextArea.textContent = promptPageData.textarea_content;
    break;

  case window.location.pathname.toString().includes("summarization.html"):
    let summarizationPageData = _TEMPLATE_CONTENT_LIST.find(({ name }) => name === "summarization" );

    console.log(summarizationPageData)
    templateTitle.textContent = summarizationPageData.title;
    templateTextArea.textContent = summarizationPageData.textarea_content;
    break;
}

templateInsert.appendChild(duplicateTemplate);