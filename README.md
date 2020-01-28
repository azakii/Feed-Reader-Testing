# Project Overview

In this project i am given a web-based application that reads RSS feeds included [Jasmine](http://jasmine.github.io/).


## Why this Project?

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development." This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.


## What will I learn?

I learned how to use Jasmine to write a number of tests against a pre-existing application. These will test the underlying business logic of the application as well as the event handling and DOM manipulation.


## How will this help my career?

Writing effective tests requires analyzing multiple aspects of an application including the HTML, CSS and JavaScript - an extremely important skill when changing teams or joining a new company.

Good tests give you the ability to quickly analyze whether new code breaks an existing feature within your codebase, without having to manually test all of the functionality.


# Development Strategy


Our Strategy for testing to follow up:

## 1. Test RSS Feeds to make sure that all feeds defined and existed

   * Test RSS Feeds that already existed. 
   * Test RSS Feeds URL defined. 
   * Test RSS Feeds Name defined.

## 2. Test The Menu 

   * first i need to check the menu already hidden.
   * finally i need to check that the menu is working when i click on burger icon

## 3. Test Initial Entries 

   * i create function and inside it create beforeEach to asynchronous loadFeed function and passed 1 as 'index' entry then i expected that it will be greater than 3
   * secondly i started that the feed not has entries then i checked the first Entry and save it in the feedContainer as innerHtml and another one to ensure it done to be expect the first entry not the same other one.



# Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.
