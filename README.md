# Tretton37 Code Assignment
> Create a new and improved page for displaying all the ninjas of tretton37. Visit the site [tretton37.mansdahlstrom.se](https://tretton37.mansdahlstrom.se/)

## Usage
To run the project

1. clone or download this repo `git clone git@github.com:mansdahlstrom1/tretton37-assignment.git`
2. Install dependencies `npm install`
3. Run the project using `npm run dev`

## Features

### _design/accessability

- Fancy animations (1pt)
- A modern Design (1pt)
- Responsive Design (2pt)

### _functionality

- Sort by name and office (1pt)
- Filter by name and office (1pt)

### _testing/QA

- Works in Chrome, Firefox, Edge (1pt)
- Unit tests? (2pt)

## Process

First, I started of just setting up the project to my liking, I choose to use [Next.js](https://nextjs.org/) since I'm quite comfortable with this framework and since it seemed quite fitting for the task. Once this was done i setup eslint and create the basic design of each page, using the data from the API.

My first goal was just to get a base design and routes setup before i started to work more with the specific features. I chose to use [Semantic UI](https://react.semantic-ui.com/) as my UI framework to be able to get quick access to UI components, one of the key benefits here for me is that you get a lot of accessibility and responsive features for free when using a framework like Semantic UI.

After doing some digging into the API I quickly noted at the start of the project that the API had routes for getting a single ninja, but that there was no ID provided for each ninja by the API. So, one of my first task became solving the issue of a user landing on the `/ninja/:ninja_id` without needing that load all ninjas from the API. This seems quite inefficient to me so I decided to reverse engineer the ID in my API class to be able to use this endpoint also for the "single ninja" page.

Once the design was in an "okay" state and the routing and API stuff was mostly handled i started digging into the feature list to enable some more functionality. As stated above the features I had chosen where doing a filter bar at the top of the page with the ability to sort / filter between names and offices.

## Things i would change / would want to improve on

- Design ( i had a cool vision of rendering an SVG map as the background of each card to make the design feel a bit more alive). Unfortunately i did not have time to fix this in a good way, this pull request is the start of a node script the generates the PNG images based on the location of the offices from the API.
- Don't use Semantic UI. It uses `!important` a lot and is not very friendly with `css.modules`. I think it was good to stick with something i know for this task but i think there are better UI frameworks that i could try
- More animations + infinity scroll. I was really into the idea of creating more animations +  infinity scroll since it's quite fun to implement IMO. I instead spent more time in build a custom CI pipeline since this is something i've been wanting to do for my personal website that is also running on my server at home.
- Using [useContext](https://reactjs.org/docs/hooks-reference.html#usecontext). Or added some kinda of state management to not reload all ninjas every time you land of the start page. 

## Notable project features

- Website running on my Ubuntu Server at home.
- Fully working custom built CI pipeline. Website will deploy the prod branch on my ubuntu server at home when something is pushed to the prod branch.
- Custom subdomain and ssl Certificates 

 