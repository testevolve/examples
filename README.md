# Examples
Monorepo for examples projects for multiple languages used when creating new default TE projects e.g. through Flare.

## Running the linter
To run the linter for a particular language's Project examples:

### ./Javascript
run
```
    cd ./Javascript/template
    npx eslint
```

### ./Python
To run Python tests:

`cd` to ./Python/template, then run:
```
pipenv --rm
rm Pipfile.lock
pipenv install
pipenv shell
```
to reset and start a virtual environment

ensure the .Pipfile has the correct path for spark-py if you are testing a local version
ensure that any config and feature files are in the correct directory structure for testing

To run all tests:
`pipenv run behave`

To run a single test tag:
`pipenv run behave --tags=test`

To run multiple test tags:
`pipenv run behave --tags="@test1 or @test2"`

To prevent printing skipped test information to the logs, add the `--no-skipped` tag, e.g.:
`pipenv run behave --tags=test --no-skipped`

### ./Ruby
run `rubocop`

### ./Ruby Free
run `rubocop`

### ./Typescript
run
```
    cd ./Typescript/template
    npx eslint
```