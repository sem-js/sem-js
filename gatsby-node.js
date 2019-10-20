/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async ({ graphql, actions }) => {
  
    const path = require(`path`);
    const { createPage } = actions
    return new Promise((resolve, reject) => {
      graphql(`
      {
        meetupGroup {
          events {
            id,
            name
          }
        }
      }
      `).then(result => {
        result.data.meetupGroup.events.forEach(({id, name}) => {
            if (name.search(/STUDY GROUP/g) < 0) {
              createPage({
                path: `speaker/${id}`,
                component: path.resolve(`./src/templates/speaker.js`),
                context: {
                  eventId: id
                },
              })
            }
          })
        resolve()
      })
    }).catch(error => {
      console.log(error)
      reject()
    })
    
  };
