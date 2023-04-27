# Notion Flash Cards

> A front-end interface for a spaced repitition flash card system. Cards are created and managed using a Notion Database which is connected to using the Notion API.

A spaced repitition system is possilbe in Notion natively, but has some draw backs. This app aims to solve these problems: 
1. The UI for testing is not good.
2. The method for setting the next test date for a card is a little "hacky" and involves using the "last edited" property. If the card is editted subsquent to the last test then the next test date is messed up.
## Todo
### Stage 1
- [x] Connect to Notion database and load cards
  - [x] For develpment use .env file for secrets
  - [x] Use Netlify SDK
- [x] Display cards in a grid
### Stage 2
- [x] Set up project to work with `netlify dev`
  - [x] Write Netlify function to retrieve data and integrate with App
  - [x] Improve Netlify function to also fetch page content
    - [x] use Promise.all() to chain async fetches of seperate pages together
- [x] Basic UI
  - [x] Display active card back onClick
    - [x] Add dismiss functionality
### Stage 3
- [ ] Spaced repitition functionality
- [ ] Categories functionality

## Setup
```shell
# Run local server (with access to Netlify Serverless functions - used to conntect with Netlify API)
$ netlify dev
```