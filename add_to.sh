#!/bin/bash

# Initialize git repository if not already initialized
if [ ! -d ".git" ]; then
  git init
fi

# Add files and commit with messages
git add 0-promise.js
git commit -m "Add 0-promise.js"

git add 1-promise.js
git commit -m "Add 1-promise.js"

git add 100-await.js
git commit -m "Add 100-await.js"

git add 2-then.js
git commit -m "Add 2-then.js"

git add 3-all.js
git commit -m "Add 3-all.js"

git add 4-user-promise.js
git commit -m "Add 4-user-promise.js"

git add 5-photo-reject.js
git commit -m "Add 5-photo-reject.js"

git add 6-final-user.js
git commit -m "Add 6-final-user.js"

git add 7-load_balancer.js
git commit -m "Add 7-load_balancer.js"

git add 8-try.js
git commit -m "Add 8-try.js"

git add 9-try.js
git commit -m "Add 9-try.js"

git add README.md
git commit -m "Add README.md"

git add utils.js
git commit -m "Add utils.js"

git add package.json
git commit -m "Add package.json"

git add babel.config.js
git commit -m "Add babel.config.js"

git add nodesource_setup.sh
git commit -m "Add nodesource_setup.sh"

git add package-lock.json
git commit -m "Add package-lock.json"

# Push changes to the repository (assumes remote repository is already set up)
git push origin main
