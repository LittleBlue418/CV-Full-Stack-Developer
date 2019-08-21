# Milestone Project 1

## Project Summary

This is my online CV for my role as a Full-stack Web Developer, built as my firts milestone project for the Code Institute Full-Stack developer course. 

This portfolio is designed to be shown to potential employers and collaborators, with a view to both applying for work, and encouraging collaboration with other developers. The portfolio highlights the skills that I have gained on this course, as well as other skills that I have developed in previous roles and soft skills that I can bring to the table. 

My goal with this project was to create a clean and minimal single page site, with drop down sections to enable the user to learn more about different aspects of me. The tone here was professional, aiming primarally at potential employers, but to also show a little of my personality. 

***
## Website

You can view the website [here](https://littleblue418.github.io/Milestone1/.)

***
## UX

### Strategy & Planning
My UX process centered on a mobile first, clean and responsive design. I wanted to keep the page as clean as possible, but easilly scale and respond to the user's needs and interest. As well as a clean design I wanted to keep both the site and the downloadable CV asset on 'brand'. I echoed the same image and icon from my Github profile, and used the same blue throughout to help with a consistent branded feel. My goal was to display my coding skill, but also other aspects that employers and collaborators would find appealing. 

#### User Stories
* As an Employer, I want to get an overview of the person's skills and work experience, as well as looking at whether they might be a good culture fit for my team and company.  
* As a collaborator, I want to get a good overview of where this person's skill level is, and a feel for the type of projects they have already worked on. If i can get a feel for the type of person they are to work with that would also be nice. 

#### Research & Prioritization

Informed by the user stories, I put together a strategy; focussing primarally on the 'Employer'. Below are the key problems I wanted to solve, and their score on the priority matrix. 

Opportunity / Problem | Importance | Viability / Feasibility
----------------------|-------------|----------------------
A - Create an online programmer presence | 5 | 5 
B - Update my CV with descriptions more relevant to programming | 4 | 3
C - Showcase a range of well made Github projects | 4 | 1
D - Increase recruiter interest and interaction | 4 | 3
E - Generate interest from collaborators | 2 | 1

![Milestone 1 importance graph](https://github.com/LittleBlue418/Milestone1/blob/master/assets/wireframes/M1-importance-graph.png)

### Scope 
##### Initial Scope
* An 'about me' section where employers and collaborators can get an idea of the kind of person / employee i am
* A 'work history' section where previous roles are clearly definaed
* A skill summary, possibly seporated out from the work history, where my key skills are highlighted
* A link to my portfolio (at minimum a clear link to github)
* Some way to contact me (at minimum some information on a downloadable CV)
* A downloadable CV 

##### 'Nice to Have' Scape
* A more visualy appealing skill section to highlight things in a graphic way
* A portfolio section, with several projects highlighted as well as my github profile. 
* A contact form built into the site
* A beautifully styled CV that is 'on brand' with the site

### Structure
Looking at the overall strategy of a simple and clean layout, and the user's need to find information quickly in a visually appealing way without too much searching, I decided to build a single page website. Furthermore I decided to structure it with a linear style narrative in the form of expanding sections within the same page. I wanted to both give recruiters all the information in one place, but at the same time keep the screen as 'clean' of clutter at possible. 

Mindful of consistency and our 'learned language of the web' I decided to use a hamburger menu, as well as the onclick function for the different section headings. The menu and the icon would both perform the same function, and the onhover over the icon would further assist the user in learning the 'language' of the site. I was also careful to use a recognizable 'drop down arrow' within each section to signpost to users that more additional content was available if desired. 

Feedback for each action consists of many established traditions, such as a colour change on-hover for the menu items, a colour and size change on-hover for the heading icons and a slight colour change for the social icons in the footer onhover. I also added a scroll to top function for each section as it opened, to imediately takethe user to their desired location, and an acordian class to close unwanted sections for the user automatically. 

### Skeleton 

Following on from the Structure plane I carefully constructed wireframes for small and large screens, focussing on keeping the consistent look and feel for the site as clean and minimal as possible. For many of the sections the whole section would scale with the screen, but it was important that any areas where there were multiple columns in a row (such as the 'extra information' drop downs, or the skills section) would function responsively and drop to a single column layout on mobile. 

##### Wireframes & Diagrams 
You can view my wireframes and designs in this folder [here](https://github.com/LittleBlue418/Milestone1/tree/master/assets/wireframes)

### Surface
I decided to build the 'brand' for the website about my existing github profile, matching the profile image of the teapot and carrying through the same colour. I was careful to create a downloadable CV that also matched the same image and the same blue of the site. Similarly i echoed the round skill circles from the website in the Downloadable CV. 



***

## Features
I wanted to display a range of features in this project, but not to overwhelm the user on first view. 
* Navbar - Is a static menu to allow users to instantly access all of the sites content from anywhere on the page. 
* Drop Down Sections - As part of the UX decision to present a 'clean' web page each of the key sections on the page is hidden from the user on the initial view. Each section has an icon with an on hover function, as well as being listed in the navbar. On click of either, the section will open and the page scroll to imediately present the user with critical content. 
* Inner Drop Down Section - Following on from the decision to present the user with information in bite sized chunks each section has a second inner drop down (with the exception of the contact form). These sections are nested behind the universally recognized 'drop down' arrow, and contain information that is not important, but gives more of a picture of my personality. The idea is to allow the user to choose to read more if they are interested, but present them first with the key information. 
* The Skill Circles - These are visual representations of my skill levels, designed to be imediately appealing for the user to look at, but more importantly to allow them to quickly guage my skill level. 
* The Work History Timeline - I wanted a very visual timeline of my work history, again to be visually appealing and as clear as possible to the user, so rather than simply list out my previous jobs I created a timeline.  


### Features Left to Implement 
In the future I would like to add more projects that i ave worked on, to display a greater range of skills. I would also like to impliment some animation on the skills circles, perhapse to have them 'filling up'. 

***
## Technologies Used
* HTML - Main language used to structure the page.
* CSS - Providing styling for the site.
* Bootstrap (4.3.1) - Core structural elements such as the grid layout, button functionality and menu.
* JavaScript - Adding functionality to the skill circles, as well as 'on click', 'hidden' and 'scroll'. 
* JQuery (4.3.1) - Supporting library for much of the JavaScript functionality. 

***
## Testing 
During the initial stages of the project I used **Chrome developer tools** for testing my site. Using the device toolbar to continually check that my structure and content worked on the mobile and desktop screen as intended. I frequently tested the different classes and rules that were applying to different elements to bug test on things that weren't behaving as they should, but also to test out possible solutions before moving those solutions into my code. 

Within **Visual Studio Code** I have used both the Debug feature, and several plugins to ensure that my code was as clean and correct as possible. Removing excess white spaces, highlighting any tags that may not have opening or closing tags to match and checking syntax.

During the build process I have been **manualy testing**; ensuring that each button, link and icon that should perform an action would complete that action. 

colour contrast - web accesability
linux 

***
## Deployment
This site is hosted using Github pages, and is deployed directly from the master branch. You can view the website [here](https://littleblue418.github.io/Milestone1/.). 

You can also host the site locally if you clone or download the repository, but given the user stories I have been working with I plan to eventualy host the site 

***
## Credits
### Content

### Media

### Acknowledgements 

