const core = require("@actions/core");
const fs = require("fs");
const yaml = require("js-yaml");

try {
  // Get the YAML file path from the input
  const yamlFilePath = core.getInput("file_path");

  // Read the YAML file
  const yamlContent = fs.readFileSync(yamlFilePath, "utf8");

  // Parse the YAML content
  const parsedYaml = yaml.load(yamlContent);

  console.log(parsedYaml);

  // Set the output using core.setOutput
  core.setOutput("parsed-yaml", JSON.stringify(parsedYaml));
} catch (error) {
  // Handle any errors
  core.setFailed(error.message);
}
