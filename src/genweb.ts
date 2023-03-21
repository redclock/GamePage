// Import types from Node.js
import fs from 'fs';
import * as Handlebars from 'handlebars';

// Define the interface for the app configuration
interface AppConfig {
  name: string;
  icon: string;
  description: string;
  appStoreLink: string;
}

// Define the interface for the config JSON file
interface Config {
  apps: AppConfig[];
}

// Read the config JSON file
const config: Config = JSON.parse(fs.readFileSync('config.json', 'utf8'));
const template = fs.readFileSync('templates/index.hbs', 'utf8');
const navBarTemplate = fs.readFileSync('templates/navbar.hbs', 'utf8');

Handlebars.registerPartial('navbar', navBarTemplate);
// 编译模板
const compiledTemplate = Handlebars.compile(template);
// Write the generated HTML to a file
const outputHTML: string = compiledTemplate(config);
fs.writeFileSync('index.html', outputHTML);

// generate privacy.html
const privacyTemplate = fs.readFileSync('templates/privacy.hbs', 'utf8');
const privacyCompiledTemplate = Handlebars.compile(privacyTemplate);
const privacyOutputHTML: string = privacyCompiledTemplate({});
fs.writeFileSync('privacy.html', privacyOutputHTML);
