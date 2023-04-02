const Ajv = require("ajv");
const ajv = new Ajv();
const note_schema = {
  type: "object",
  properties: {
    name: { type: "string", maxLength: 64 },
    text: { type: "string", maxLength: 5000 },
  },
  required: ["name", "text"],
  additionalProperties: false,
};

module.exports = (data) => {
  return ajv.validate(note_schema, data);
};
