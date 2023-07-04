# SoftUni JS Applications

Exercises and notes from the JavaScript applications course in SoftUni.

## Lecture 2: Asynchronous Programming

### Lab Exercises

1. XHR

Write a js function that loads the github repo asynchronously with AJAX.

Create a XmlHttpRequest and attach an onreadystatechange event to it.

Create a GET request to https://api.github.com/users/testnakov/repos when the user
clicks the load repos button.

2. Github Repos

Your task is to write a JS function that executes an AJAX request with Fetch API and loads all user github repositories by a given username (taken from an input field with id "username") into a list with id "repos". Use the properties full_name and html_url of the returned
objects to create a link to each repo’s GitHub page. If an error occurs (like 404 “Not Found”), append to the list a list-item with text the current instead. Clear the contents of the list before any new content is appended. See the highlighted lines of the skeleton for formatting details of each list item.
