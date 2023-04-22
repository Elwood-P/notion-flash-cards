# Notion Flash Cards

> A front-end interface for a spaced repitition flash card system. Cards are created and managed using a Notion Database which is connected to using the Notion API.

A spaced repitition system is possilbe in Notion natively, but has some draw backs. This app aims to solve these problems: 
1. The UI for testing is not good.
2. The method for setting the next test date for a card is a little "hacky" and involves using the "last edited" property. If the card is editted subsquent to the last test then the next test date is messed up.
## Todo
### Stage 1
- [ ] Connect to Notion database and load cards
  - [ ] For develpment use .env file for secrets
  - [ ] Use Axios over Netlify SDK to gain experience with it
- [ ] Display cards in a grid