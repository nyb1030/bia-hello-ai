export default class BuiltInAIGenerator {
  constructor(taskType){
    this.taskType = taskType;
  };

  async checkModelStatus (){
    let modelStatus;
    switch(this.taskType) {
      case "summarization":
        modelStatus = await ai.summarizer.capabilities();
        break;
      case "assistant":
        modelStatus = await ai.assistant.capabilities();
        break;
      case "write":
        modelStatus = await ai.writer.capabilities();
        break;
    }
    return modelStatus;
  }

  async generateSession(userInput, isStreaming = false) {
    let builtInAiSession;
    let result;

    switch(this.taskType) {
      case "summarization":
        builtInAiSession = await ai.summarizer.create();
        result = await builtInAiSession.summarize(userInput);
        break;
      case "assistant":
        builtInAiSession = await ai.assistant.create();
        result = await builtInAiSession.prompt(userInput);
        break;
      case "write":
        builtInAiSession = await ai.write.create();
        break;
    }
    return result;
  }

  async destroySession () {

  }
}