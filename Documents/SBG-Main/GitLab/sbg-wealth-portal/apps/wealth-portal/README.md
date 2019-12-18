# Advisor Portal

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.1.

## Development server

Run `start` for a dev server with live services. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `start-local` for a dev server with mock data. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## How to install a packaged project (GMM)

1. Ensure you are on the `master` branch and the branch is up to date (if not, run `git pull`)
2. Create a new branch and give it a descriptive name (e.g. `update_GMM_to_0.0.64`)
3. In the root `package.json` file, update GMM dependency e.g. `"@sbg/grow-my-money": "0.0.5"`
4. Run `npm install` to get the latest GMM artefact from `https://tools.standardbank.co.za/nexus/service/rest/repository/browse/npm-internal/%40sbg/grow-my-money/`
5. Save, Commit, Push changes
6. Create a Pull Request

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Manual Deployment

//////////////////////////////DEPLOYMENT to PRODUCTION START/////////////////////////////////////////////////////

To manually deploy to PRODUCTION, follow the steps below:

-> Pull the latest `master` branch from the `advisor-portal-cli` repository: https://tools.standardbank.co.za/bitbucket/projects/WP/repos/advisor-portal-cli/browse
-> run `npm install` (if package.json has changed since the last merge)
-> `ng build --aot --prod` (build artifact with Ahead of Time compilation)
-> Navigate to the `dist` folder within the project
-> Run `tar -czvf app.tar.gz .` (compress artifact)

///////////////////////////////////////////////////////////////////////////
/////// NB!! Ensure you make a backup copy of the dist app.tar.gz /////////
///////////////////////////////////////////////////////////////////////////

-> Naviagate to `sbg-wealth-portal-http-server` (in chef-repo)
-> run `git pull` (get latest changes)
-> Copy the `app.tar.gz` file from the project repo (dist folder) into `sbg-wealth-portal-http-server/files`
-> Increase version in the `metadata.rb` file by 1 (to 0.6.475)
-> run `git add -A`
-> run `git commit -m "Update artifact and bump up version"`
-> run `git push`
-> run `knife cookbook upload sbg-wealth-portal-http-server` to upload the cookbook to `Chef`

/////// CHEF-REPO INSTALLATION (START)////////

**IF no chef-repo**
-> Go to to chef manage (`https://pchfsvr1v.standardbank.co.za`)
-> On the tabs at the top, click on `Administration`
-> Select your `Organisation` (it should be `chopchop`)
-> After doing that there will be an option on the left called `Starter Kit`..
-> Click on it and it will download a zip file to your machine
-> Inside the zip file, you will find a file called `chef-repo`
this is the file you need to cd into and execute your chef commands
**IF using MacOS**
-> Download chefdk (https://downloads.chef.io/chefdk) and install it
-> Run `knife cookbook upload sbg-wealth-portal-http-server` again

/////// CHEF-REPO INSTALLATION (END)////////

-> Go to `https://pchfsvr1v.standardbank.co.za` (Chef manage)
-> Login with C number and password (domain)
-> Select `Policy` and then `Environments`
-> Search for `advisor`
-> Click on `sbg-wealth-advisor-web-portal-prod` and then `Edit`
-> Update `sbg-wealth-portal-http-server` to match the uploaded metadata.rb version number

/////// DEPLOYMENT PROCESS AS OF 02-JULY-2019////////

-> In order to do a deployment to PROD for advisor portal you need to run a chef job on the production nodes.
-> There are 2 nodes in production `pwaiweb1v` & `pwaiweb2v`
-> To run a job on one you will need to run the following command inside your chef-repo folder:
`knife job start chef-client pwaiweb1v`
-> To run it on the other node, all you need to do is change the node name so:
`knife job start chef-client pwaiweb2v`
-> The strategy we will use for our deployment is to first run the chef job on one node, wait for it to complete and if it is successful run it on the other node
-> if it is not successful on the 1st or second run, we’ll try and debug to see why it is failing.
-> If we are not able to remedy the cause then we fallback and deploy using the original cookbook.
-> If the fall back fails then we are in the worse case scenario which will normally mean killing the broken node so it does not affect end users.

Original cookbook:
-> Navigate to `https://tools.standardbank.co.za/bamboo/browse/SWP`
-> Run the `Advisor Portal CLI - Build Pipeline` build plan

//////////////////////////////DEPLOYMENT to PRODUCTION END/////////////////////////////

///////////////////////////////////// FYI-START ////////////////////////////////////////

https://pchfsvr1v.standardbank.co.za/organizations/chopchop/nodes (Chef Manage)

https://tools.standardbank.co.za/bitbucket/projects/SWA/repos/sbg-advisor_portal/browse (Artifact repo)

///////////////////////////////////// FYI-END ////////////////////////////////////////

////////////////////////// DEPLOYMENT to SIT START //////////////////////////////////////

To automatically deploy to SIT, follow the steps below:

Phase 1 - Build and Deploy

1. Commit to Master (triggers build and deployment to DEV)
2. Go to https://tools.standardbank.co.za/bamboo/browse/GWF-WAP-316
3. Manually trigger deployment to SIT
   a. Click the `play` button and tick SIT env

IF deployment fails:

1. Click `Run` and select `Rerun failed/incomplete` jobs only

To resume with the rest of the builds

1. Click the `Play` button and tick SIT env (triggers deployment to SIT)

Once all Build passed (green) - app should be live on SIT (https://test.wealthportal.standardbank.co.za/)

**_ CAUTION _**
Never trigger `Re-run ALL` - this will re-deploy all already passed builds!

////////////////////////// DEPLOYMENT to SIT START /////////////////////////////////////////////////

Phase2 - Compare SHA commits

To ensure that the just deployed artefact is the same as the last commit to master, follow the below instructions:

1. Go to https://test.wealthportal.standardbank.co.za/version.html and note the sha: number
2. Go to the project repo and ensure you're on the master branch
3. Compare sha number (e.g. 48c4ffa0c15) with the one noted above (version.html)
4. IF sha numbers are not the same - call Riaz / Acquim (devOps team) for assistance
5. Once fixed, double-check the sha commits again as per above.
6. IF they are the same - move to Phase 3

Phase 3 - Update Confluence Page

1. Go to current sprint board (e.g. https://tools.standardbank.co.za/jira/secure/RapidBoard.jspa?rapidView=3843&projectKey=WI&view=detail&selectedIssue=WI-11981&sprint=8056)
2. Copy Jira tasks that are marked "Ready to Test"
   a. Click popup menu and select "Better Excel" to start the csv download
3. Go to https://tools.standardbank.co.za/confluence/display/MC/PI3+Sprint+1
   a. Click overflow menu and select "Copy"
   b. Supply a page name (e.g. TeamPI3 Sprint 2)
   c. Copy and paste "Better Excel" content from step 2 above.
4. Click `Save`
5. Notify stakeholders of the Deployment and Release Notes

# Download PROD artifact

1. Go to https://pchfsvr1v.standardbank.co.za/organizations/chopchop/cookbooks/sbg-wealth-portal-http-server/0.6.464/content
2. Click Content tab
3. Expand `Files` tab
4. Click the artifact to start download

# Understanding deployment releases

1. Read this: https://confluence.atlassian.com/bamboo/understanding-deployment-releases-357335182.html
