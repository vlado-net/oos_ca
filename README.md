# CREW APPLICATION

Simple application which represents dashboard with candidates.

### Running locally
`yarn install`

`yarn start`

App will be available on http://localhost:3000


### Running App in docker
`docker build -t crew-app .`

`docker run -it --rm -p 5000:5000 --name crew-container crew-app`

App will be available on http://localhost:5000

### Running Tests in docker
`docker run -it -v $PWD:/e2e -w /e2e cypress/included:3.4.1`
# runs Cypress tests from the current folder

### Show Cypress version
`docker run -it -v $PWD:/e2e -w /e2e --entrypoint cypress cypress/included:3.4.1 --version`
Cypress package version: 3.4.1
Cypress binary version: 3.4.1

### E2E testing 
Powered by [Cypress](https://github.com/cypress-io/cypress).

All e2e tests is collected in `oos_ca/tests` folder. 
Preparing env:
```
$ cd tests
$ npm ci
```
### Available test commands:

Keep in mind that:
* `test` command start running tests in CLI (headless mode)
* `open` command open Cypress GUI for testing

**Local env**:
```
npm run test
npm run open
```


