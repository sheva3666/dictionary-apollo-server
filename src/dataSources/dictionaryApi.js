const { RESTDataSource } = require("apollo-datasource-rest");

class DictionaryAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:8082/";
  }
  getWords(user, language, translateLanguage) {
    return this.get(`words/${user}/${language}/${translateLanguage}`);
  }
}
module.exports = DictionaryAPI;