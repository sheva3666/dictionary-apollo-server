const { RESTDataSource } = require("apollo-datasource-rest");

class DictionaryAPI extends RESTDataSource {
  constructor(options) {
    super(options);
    this.baseURL = "http://localhost:8082/";
  }

  willSendRequest(request) {
    request.headers.set(
      "authorization",
      this.context.request.headers.authorization
    );
    request.headers.set("Accept", "application/json");
    request.headers.set(
      "user-agent",
      this.context.request.headers["user-agent"]
    );
  }

  getWords(user, language, translateLanguage, page, searchString) {
    return this.get(
      `words/${user}/${language}/${translateLanguage}/${page}/${searchString}`
    );
  }

  getRandomWord(user, language, translateLanguage) {
    return this.get(`words/random/${user}/${language}/${translateLanguage}`);
  }

  addWord(word) {
    return this.post("words", JSON.stringify(word), {
      headers: {
        "Content-type": "application/json",
      },
    });
  }

  getUser(user) {
    return this.get(`users/${user}`);
  }

  updatePassword(user, password, newPassword) {
    return this.put(`users/${user}/${password}/${newPassword}/change`, {
      headers: {
        "Content-type": "application/json",
      },
    });
  }

  createUser(user) {
    return this.post("users", JSON.stringify(user), {
      headers: {
        "Content-type": "application/json",
      },
    });
  }

  updateUser(user) {
    return this.put(`users/${user.email}`, JSON.stringify(user), {
      headers: {
        "Content-type": "application/json",
      },
    });
  }

  loginUser(user, password) {
    return this.post(`auth/${user}/${password}`);
  }

  getTranslatedWords(user, languageForLearn, language) {
    return this.get(`translate/${user}/${languageForLearn}/${language}`);
  }

  getScore(userEmail, language) {
    return this.get(`score/${userEmail}/${language}`);
  }

  updateScore(score) {
    return this.put(`score`, JSON.stringify(score), {
      headers: {
        "Content-type": "application/json",
      },
    });
  }
}
module.exports = DictionaryAPI;
