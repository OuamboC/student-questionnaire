## Student Questionnaire

**Description:**

This repository hosts a student questionnaire designed for software engineering undergraduates. The purpose of this project is to collect feedback from students anonymously to improve our course, journey, and faculty. The questionnaire is built using HTML5, CSS3, and JavaScript, and is deployed using GitHub Pages.

**Features:**
- **Responsive Design:** Ensures that the questionnaire is accessible on various devices.
- **Anonymous Responses:** Allows students to provide honest feedback without revealing their identities.
- **Interactive Form:** Utilises JavaScript for form handling and validation.
- **Easy Deployment:** Deployed using GitHub Pages for easy access and sharing.

**Technologies Used:**
- HTML5
- CSS3
- JavaScript
- GitHub Pages

## Sep up the project
bash 
``` 
npm init -y
```
## Install Express and body-parser
bash
```
npm install express body-parser
````
## Run the server
bash
```
node server.js
``````
## Set up a New Request
1. Open Postman and create a new new request
2.Set the request type such as POST
3.Enter the URL for your server endpoint :http://localhost:3000/submit

## Set up the Request Body
1.Clieck on the Body tab
2.Select raw and then JSON (application/json)
3. Enter a example form data in JSON format 
bash 
````
{
    "q1": "yes",
    "q1-comment": "I enjoyed the course but faced some challenges.",
    "q2": "no",
    "q2-comment": "I didn't find the materials engaging.",
    "q3": "neutral",
    "q3-comment": "The course was okay but could be improved.",
    "q4": "yes",
    "q4-comment": "The course was okay but could be improved.",
}
````
## Send the Request 
1. Click on the Send button

## Review the Response
1.Check the response from the server in the Response section.

You should see a message confirming that the data was received and saved. This process mimics what your form will do when it is submitted by a user.

### Here's a quick summary of the steps:

1.Open Postman and create a new POST request.

2.Enter the URL http://localhost:3000/submit.

3.Select Body -> raw -> JSON and enter your JSON data.

4.Click Send.

5.Review the server's response


## Update to Latest versions
bash 
```
npm update
```
## Identify and fix any security vulnerabilities in your dependencies
bash 
```
npm audit fix
```
## Funding Dependencies 
npm fund






**How to Use:**
1. Clone the repository: `git clone https://github.com/your-username/student-questionnaire.git`
2. Navigate to the project directory: `cd student-questionnaire`
3. Open `index.html` in your web browser to view and interact with the questionnaire.

**Links:**
- [Discord](https://discord.com/users/917045074590838784)
- [LinkedIn]([https://linkedin.com](https://www.linkedin.com/in/canis-ouambo-203264234/))
- [GitHub]([https://github.com](https://github.com/OuamboC))

You can illustrate tHE questionnaire  by clicking the link [here](https://ouamboc.github.io/student-questionnaire/)
**Contributing:** 
Feel free to open issues or submit pull requests if you have any suggestions or improvements.
