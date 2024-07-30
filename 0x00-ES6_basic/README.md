# ES6 Basics

This repository contains tasks aimed at understanding and applying the new features introduced in ECMAScript 6 (ES6). The tasks cover various aspects of ES6, including variables, functions, parameter defaults, rest and spread operators, string templating, object creation, and iterators.

## Learning Objectives

By the end of this project, you should be able to:

- Understand what ES6 is and the new features it introduces.
- Differentiate between constants and variables.
- Use block-scoped variables with `let` and `const`.
- Utilize arrow functions and function parameters defaulting.
- Apply rest and spread function parameters.
- Implement string templating in ES6.
- Create objects and their properties in ES6.
- Use iterators and for-of loops.

## Requirements

- All files are executed on Ubuntu 18.04 LTS using NodeJS 12.11.x.
- Editors allowed: `vi`, `vim`, `emacs`, `Visual Studio Code`.
- All files should end with a new line.
- A `README.md` file is mandatory.
- The code should use the `.js` extension.
- The code is tested using the Jest Testing Framework.
- The code is analyzed using ESLint with specific rules provided.
- All functions must be exported.

## Setup

### Install NodeJS 12.11.x

In your home directory, run:

```sh
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y

### Verify the installation:

```sh
nodejs -v
# v12.11.1

npm -v
# 6.11.3

### Install Jest, Babel, and ESLint

In your project directory, install Jest, Babel, and ESLint by using the supplied package.json and run:

sh

npm install

### Configuration Files

Ensure you have the following configuration files in your project directory:

    package.json
    babel.config.js
    .eslintrc.js

Run npm install from the terminal of your project folder to install all necessary project dependencies.

### Tasks
0. Const or let?

Modify functions to use const and let.
1. Block Scope

Modify variables inside the function taskBlock to avoid being overwritten inside the conditional block.
2. Arrow functions

Rewrite the standard function using ES6’s arrow syntax.
3. Parameter defaults

Condense the function using default parameter values.
4. Rest parameter syntax for functions

Return the number of arguments passed using the rest parameter syntax.
5. The wonders of spread syntax

Concatenate arrays and string characters using the spread syntax.
6. Take advantage of template literals

Rewrite the return statement using a template literal.
7. Object property value shorthand syntax

Simplify the object’s properties using shorthand syntax.
8. No need to create empty objects before adding in properties

Use ES6 computed property names for the budget object.
9. ES6 method properties

Rewrite the object using ES6 method properties.
10. For...of Loops

Rewrite the function using ES6’s for...of operator.
11. Iterator

Create an object with a department name and a list of employees.
12. Let's create a report object

Create a report object with the key allEmployees and a method property getNumberOfDepartments.
