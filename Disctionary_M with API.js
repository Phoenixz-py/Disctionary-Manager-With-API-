//without API one

console.log('Welcome to the dictionary manager By Phoenix');
let dictionary = ['test']

const { properties } = require('prompt');
const prompt = require('prompt')

let b = () => {
    prompt.start()
    prompt
        .get({
            properties: {
                word: {
                    description: 'Press 1 to push word, Press 2 to search word in array',
                },
                hemlo: {
                    description: 'Enter',
                },    
            },
        })
         .catch((err) => {
            console.log('An error be noice ' + err);
      })
 .then((res) => {
  if(res['word'] == 1) {
   dictionary.push(res['hemlo'])
   console.log(('The word has been added: ') + res['word'])
    console.log(dictionary)  
 } 
    else {
   if(dictionary.includes(res['hemlo'] ) ) {
                                    
   console.log('The word has been found');
    }
    else {
     console.log('Word has not been found')
  }
    }
})
            }        
b();

//Below is APi one last step for backend

const express = require('express');
const app = express()

const prompt = require('prompt');
const nemo = (nems) => {
  prompt.start()
  prompt
      .get({
          properties: {
              word: {
                  description: 'Press 1 to push word, Press 2 to search word in array',
              },
              hemlo: {
                  description: 'Enter',
              },    
          },
      })
       .catch((err) => {
          console.log('An error be noice ' + err);
    })
.then((res) => {
      
if(res['word'] == 1) {
 dictionary.push(res['hemlo'])
 console.log(('The word has been added: ') + res['word'])
  console.log(dictionary)  
} 
  else {
 if(dictionary.includes(res['hemlo'] ) ) {
                                  
 console.log('The word has been found');
  }
  else {
   console.log('Word has not been found')
}
  }
})
  }
 app.get('/nemo', (req, res) => { res.send(nemo())
 }
);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening to ${port}...`))
