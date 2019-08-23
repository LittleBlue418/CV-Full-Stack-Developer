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

![Milestone 1 importance graph](https://github.com/LittleBlue418/Milestone1/blob/master/assets/wireframes/M1-importance-graph.png "graph of problems against viability and Importance")

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
You can view the mobile wireframes [here](https://github.com/LittleBlue418/Milestone1/blob/master/assets/wireframes/Mobile%20Wireframes.pdf) and the desktop wireframes [here](https://github.com/LittleBlue418/Milestone1/blob/master/assets/wireframes/Desktop%20Wireframes.pdf). 

### Surface
I decided to build the 'brand' for the website about my existing github profile, matching the profile image of the teapot and carrying through the same colour. I was careful to create a downloadable CV that also matched the same image and the same blue of the site. Similarly i echoed the round skill circles from the website in the Downloadable CV. 

<img src="https://github.com/LittleBlue418/Milestone1/blob/master/assets/wireframes/colour-profile.jpg" width="200" height="170" alt="colour profile for website" title="colour profile for website"/>

### Design Decisions
During the UX design process I made two specific design decisions that I want to explain. 

**To keep the nav bar as a 'hamburger' icon on both the traditional smaller screen, but also on a larger desktop screen.** 
The target audience for this site, both the Employer and potential collaborators, will have a degree of computer litteracy. Given that this site is a display of my personality and skill I made the call not to expand out the navbar and show the menu items along the top on a larger screen as I felt that this would give the screen a cluttered feel. I trust that the users I am styling this site towards will recognize the 'hamburger' nav icon. Despite feedback from peers that this is not the way that they personally would have done it, I am happy with my decision, and backed up by the exact same design choice in the example 'top marks' website provided as assesment criteria. 

**To keep the section head icons as simple icons, rather than including text**
The argument for this decision is much the same as above, a design decision with the aim of keeping the website looking as clean and minimal as possible. I trust that the users I am styling this site towards will either recognize that the icons are buttons by their promenance (and lack of any other general page content) OR that they will recognize the 'on hover' function (desktop only) OR that when they first use the nav icon they will realize that the icons are hiding sections below them. If they user does not recognize that the icon is a button, they may always use the menu from any point on the screen to achieve the same effect.

***

## Features
I wanted to display a range of features in this project, but not to overwhelm the user on first view. 
* **Navbar** - Is a static menu to allow users to instantly access all of the sites content from anywhere on the page. 
* **Drop Down Sections** - As part of the UX decision to present a 'clean' web page each of the key sections on the page is hidden from the user on the initial view. Each section has an icon with an on hover function, as well as being listed in the navbar. On 'onclick' of either, the section will open
* **Scroll to top** When a section has been expanded a JavaScript function will scroll the browser window to the top of that section, to imediately bring the user to their desired contnet.
* **Inner Drop Down Section** - Following on from the decision to present the user with information in bite sized chunks each section has a second inner drop down (with the exception of the contact form). These sections are nested behind the universally recognized *drop down arrow*, and contain information that is not important, but that gives more of a picture of my personality. The idea is to allow the user to choose to read more if they are interested, but present them first with the key information. 
* **The Skill Circles** - These are visual representations of my skill levels, designed to be imediately appealing for the user to look at, but more importantly to allow them to quickly guage my skill level. 
* **The Work History Timeline** - I wanted a very visual timeline of my work history, again to be visually appealing and as clear as possible to the user, so rather than simply list out my previous jobs I created a timeline.  
* **Download CV** This feature, accessable from three sreas on the page (the menu, the work history section and the footer) allow the user to quickly download a copy of my CV and skill summary as a 'take away'. 


### Features Left to Implement 
* In the future I would like to add more projects that i have worked on, to display a greater range of skills. This will be possible once i have more projects to display.  
* I would like to re-code the skill circles. Currently their size is not very customizable and they stretch to fill the column, while not an issue i would like to be able to have them take up less space on the page. I would also like to impliment some animation on the skills circles, perhapse to have them 'filling up'. 

***
## Technologies Used
* [HTML](https://en.wikipedia.org/wiki/HTML) - Main language used to structure the page.
* [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) - Providing styling for the site.
* [Bootstrap](https://getbootstrap.com/) - Core structural elements such as the grid layout, button functionality and menu.
* [JavaScript](https://en.wikipedia.org/wiki/JavaScript) - Adding functionality to the skill circles, as well as 'on click', 'hidden' and 'scroll'. 
* [JQuery](https://jquery.com/) - Supporting library for much of the JavaScript functionality. 
* [Font Awesome](https://fontawesome.com/) - Page icons
* [Flat Icon](https://www.flaticon.com/) - Page icons
* [Photoshop / Illustrator](https://www.adobe.com/se/creativecloud.html?gclid=CjwKCAjw1_PqBRBIEiwA71rmtVqgSn2vcdRcH6n_2tweCJ9feZvicaaHlyuOlJio4ZYG_y4iyvk9IBoCrLMQAvD_BwE&sdid=8JD95K3M&mv=search&ef_id=CjwKCAjw1_PqBRBIEiwA71rmtVqgSn2vcdRcH6n_2tweCJ9feZvicaaHlyuOlJio4ZYG_y4iyvk9IBoCrLMQAvD_BwE:G:s&s_kwcid=AL!3085!3!281036364465!e!!g!!adobe%20creative%20suite) - Photo editing, creating graphics, creating wireframes 

***
## Testing 
During the initial stages of the project I used **Chrome developer tools** for testing my site. Using the device toolbar to continually check that my structure and content worked on the mobile and desktop screen as intended. I frequently tested the different classes and rules that were applying to different elements to bug test on things that weren't behaving as they should, but also to test out possible solutions before moving those solutions into my code. 

Within **Visual Studio Code** I have used both the Debug feature, and several plugins to ensure that my code was as clean and correct as possible. Removing excess white spaces, highlighting any tags that may not have opening or closing tags to match and checking syntax.

During the build process I have been **manualy testing**; ensuring that each button, link and icon that should perform an action would complete that action. I have tested on different screens and devices to ensure that everything looks and scales as it should. 

I ran the colours on the site through a **web accesability contrast checker** to ensure that everything would be of a high enough contrast to be easily visible. 

I ran the HTML and the CSS through **W3C Validation services** to ensure that the code that i have written does not have any syntax errors. 

I have tested the site in a range of **browsers** Chrome, Opera, Firefox, Microsoft edge and Internet explorer. 

Other people have tested the site for me, including my Mentor, friends and family, and my peers on the slack peer-code-review channel. You can red the **feedback**, as well as the steps that I have taken and implementations made as a result in [this document](https://github.com/LittleBlue418/Milestone1/blob/master/assets/wireframes/m1-feedback.docx). 

In the final stages of the project I used **Audit** within the **Chrome developer tools** to check the code for:
* Performance 
* Accessibility 
* Best Practices
* SEO

This was particularly useful in signposting me to small mistakes or things that i had missed that could improve accessibility or SEO significantly. 

![Audit Results](https://github.com/LittleBlue418/Milestone1/blob/master/assets/wireframes/audit-report.png)

#### Interesting bugs
* By far the most challenging section of this code was the nav bar, looking through my commits I can see that I re-wrote the whole section of code four times, and have made more 'tweaks' to that section than any other. I started with some code from a previous CI example, and then tried to write my own. The final version is mostly bootstrap design with the bootstrap data toggle 'collapse', with the JavaScript 'scroll top' called on the collapse. 

* A known bug is a slight 'up and down' effect when the JavaScript function 'scroll to top' is called for a longer section. The code works as it should, but because the section is so long it takes the browser a minute to scroll to the right place. This is particularly evident in the 'work history' section. A fix would be to remove the scroll to top (which would open a section out of the users sight, and cause confusion as there would be no visible feedback from their click) or to nest more of the content. I may decide to nest the information about previous jobs, but this would add another layer of nesting (and another click for the user) so I would do a lot more user testing before making that call.  

* A fun bug with the JavaScript 'scroll to top' was that in first instance of writing, the drop down arrows would cause the function to run. As such the user would click the drop down arrow for more information and would be immediately taken back to the top of that section. It was fixed with a single line of code, an if statement to filter out any elements calling the collapse function that were not page sections. 

* A small side 'bug', which is less of a bug and more of an interesting discovery, was finding that bootstrap columns have a min-width which is almost impossible to over-rule with custom styling. For the single Github icon in the portfolio section (under the Octopus game) the inherited min-width for the column it was in meant that the icon was off center. After poking around in the chrome developer tools I was unable to re-size the column, so instead simply centered the icon within the coulmn.  

* Internet explorer could not load or format the image in the header correctly. After some research I realized that rather than have the image embedded directly into the HTML the best way around this would be to set it as a background image on the parent container. After further testing the scaling teapot image now works corectly on all browsers. 

***
## Deployment
This site is hosted using Github pages, and is deployed directly from the master branch. You can view the website [here](https://littleblue418.github.io/Milestone1/.). 

### Deployment Process
To deploy this site to Github you can follow these steps. 
1. In your Github profile create a new repository, make sure to give it a unique name.
1. Copy the remot repository URL from the Quick setup page.
1. Open your Terminal aplication
 1. `cd` untill you are in the folder that contains your project. 
 1. `git init` to create a .git file (make sure that you also have a README file).
 1. `git add .` will add all of your code and files
 1. `git commit -m "initial commit` Leave a commit message
 1. `git remote add origin [https://...]` Paste in the remot repository URL from the Quick setup page in your new Github repository
 1. `git push -u origin master` will push everything to your new repository 
1. In the settings tab of your new repository scroll down untill you see the Github pages setting and select 'master'. 
1. You can now see the link to your Github pages, make sure to paste it into your README file! 


You can read more at this [Github help page](https://help.github.com/en/articles/adding-an-existing-project-to-github-using-the-command-line) 
 
### Local Development
To host this site locally, or work on the code yourself, you can clone or download the repository. 
1. You can find the repository page [here](https://github.com/LittleBlue418/Milestone1)
1. Click on the "clone or download" button at the top right
1. Copy the URL
1. Go to your Terminal aplication
 1. `cd` Change the current working directory to the location where you want your clone directory to be made
 1. Type `git clone` and paste in the URL
 1. Press enter
1. The local clone will now be created

You can read more at this [Github help page](https://help.github.com/en/articles/cloning-a-repository) 

 
***

## Credits
### Content
The text for this site was written by me.

### Websites
* [Visual Studio Code](https://code.visualstudio.com/) - IDE and bug testing
* [Git bash](https://git-scm.com/downloads) - Terminal for git commands
* [Github](https://github.com/LittleBlue418) - Code repository, website hosting & deployment
* [Trello](https://trello.com/en) - Tracking tasks & bugs 
* [WebAIM](https://webaim.org/resources/contrastchecker/) - Checking and adjusting colours to meet accesability requirements
* [Coolors](https://coolors.co/) - Extracting colours from photograph of teapot and helping to build a colour scheme

### Media
#### Flat Icons 
Icons credited as asked for by the site. All colours changed to match site scheme.
* [Book](https://www.flaticon.com/free-icon/open-magazine_88179#term=book&page=1&position=14) Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"             title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
* [Bouncer](https://www.flaticon.com/free-icon/bouncer_542122#term=bouncer&page=1&position=6) Icons made by <a href="https://www.flaticon.com/authors/creaticca-creative-agency" title="Creaticca Creative Agency">Creaticca Creative Agency</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"             title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
* [Clown](https://www.flaticon.com/free-icon/clown_106517#term=clown&page=1&position=15)
Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"             title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
* [Gears](https://www.flaticon.com/free-icon/settings-gears_60473#term=gear&page=1&position=4) (*Icon used on downloadable CV*) Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"             title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
* [Handshake](https://www.flaticon.com/free-icon/hand-shake_1342#term=handshake&page=1&position=7) (*Icon used on downloadable CV*) Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"             title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
* [Lifeguard](https://www.flaticon.com/free-icon/rescuer_94067#term=lifeguard&page=1&position=85) Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"             title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
* [Plane](https://www.flaticon.com/free-icon/light-aircraft_1006329) Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"             title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
* [Surf](https://www.flaticon.com/free-icon/beach_1752946#term=surf&page=1&position=37) Icons made by <a href="https://www.flaticon.com/authors/darius-dan" title="Darius Dan">Darius Dan</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"             title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
* [Teapot](https://www.flaticon.com/free-icon/porcelain-teapot_2049#term=teapot&page=1&position=42) Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"             title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>

#### Other Media
[Site Image](https://github.com/LittleBlue418/Milestone1/blob/master/assets/images/LittleBlue418TransparentBackground2.png) was taken by me, and edited by me in Photoshop (origional [here](https://github.com/LittleBlue418/Milestone1/blob/master/assets/wireframes/20190821_111906.jpg)).

### Work Based On Other Code
* The work history timeline code is based on the code from the Code Institute CV mini project. It has been modified to have larger 'balls' and be a colour that is more in-keeping with the site. It has also been given more padding. 

* The skills section circles code has come from [bootstrapious](https://bootstrapious.com/p/circular-progress-bar), a free service that provides bootstrap templates. I have modified the code to remove some unwanted styling and lettering, and to add my own styling and formatting. The JavaScript that runs the code has not been changed.  

* The Javascript to close the navbar automatically after a selection has been made has come from [stack overflow](https://stackoverflow.com/questions/14248194/close-responsive-navbar-automatically) and has not been changed. 

* The 'scroll to top' JavaScript code (that enables the section opening AND the section to scroll to top functionality to work together) was written by me, BUT I recieved a lot of help from [another programmer](https://github.com/parmus), so it is origional *collaborative* code.  


### Acknowledgements 
* Thank you to my mentor Dick Vlaanderen, for reviewing the concept and for testing the site with me. 
* Thank you to the leads on Slack, particularly [Anthony O'Brien](https://github.com/auxfuse) who spent a very long call answering questions about the README file and assessment criteria. 
* Thank you to [Martin Parm](https://github.com/parmus) who helped me with the JavaScript, and finding bugs. 
