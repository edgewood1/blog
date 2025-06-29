GitHub actions

Runner - a server that runs your workflows when they are triggered.  It picks up the workflow and executes the defined actions.

workflow file
	•	YAML files (.GitHub/workflows)
	•	define workflows: automated processes that can include actions and checks (validations). 

Trigger - an event that can start a workflow
	•	purrs (when code is pushed)
	•	PR ( when PR created, updated, or merged)
	•	schedule ( uses crown syntax)
	•	create ( triggered when new branch or tag created)
	•	issue_comment: when comment added to issue or PR

Checks - action that performs validation, ie tests, security, listing. 

Status - the results of these checks. 

Action - a reuseable unit of code that performs a specific task within a workflow.  They are referenced and invoked via the keyword uses.

Pre-build actions
	•	actions/setup-node

3 kinds of actions
	•	JS actions (like actions/setup-node).  These have an index.js file as the main entry point and an action.yaml to define the acts metadata. 
	•	docker container actions - run inside a docker container.  References Dockerfile
	•	composite actions - combine multiple workflow steps in a single action. 
	•	Custom actions - stored in .github/actions.  These are usually repeated in multiple workflows. 

Keywords / directives
	•	uses ~ tells workflow to use a specific action (kind of like “imports)
	•	name ~ name of workflwo
	•	on ~ specifies the event that triggers workflow
	•	jobs ~ defines a set of jobs that will run
	•	runs-on: type of machine to use
	•	needs: dependencies 
	•	
