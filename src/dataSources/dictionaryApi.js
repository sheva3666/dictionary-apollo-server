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

  getWords(user, language, translateLanguage) {
    return this.get(`words/${user}/${language}/${translateLanguage}/u`);
  }

  getUser(user, password) {
    return this.get(`users/${user}/${password}`);
  }

  createUser(user) {
    return this.post("users", JSON.stringify(user), {
      headers: {
        "Content-type": "application/json",
      },
    });
  }

  updateUser(id, user) {
    return this.put(`users/${id}`, JSON.stringify(user), {
      headers: {
        "Content-type": "application/json",
      },
    });
  }
}
module.exports = DictionaryAPI;
