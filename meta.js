module.exports = {
  "helpers": {
    "if_or": function (v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this);
      }

      return options.inverse(this);
    }
  },
  "prompts": {
    "iskkjs": {
      "type": "confirm",
      "message": "是否在应用中使用kkjs?"
    },
    "kkjsVersion": {
      "when": "iskkjs",
      "type": "list",
      "message": "选择一个kkjs版本",
      "choices": [
        {
          "name": "kkjs 1.2.28 (适用于kk版本5.2.6)",
          "value": "kkjs1228",
          "short": "kkjs1228"
        }
      ]
    }
  },
  "filters": {
  },
  "completeMessage": "To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install\n  npm run dev\n\nDocumentation can be found at https://vuejs-templates.github.io/webpack"
};
