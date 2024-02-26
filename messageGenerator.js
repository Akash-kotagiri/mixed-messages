// arrays containing different messages
const themes = ['Astrology','inspirational','jokes'];
const messages = ['message1','message2','message3'];
const endMessages = ['Good Luck Have fun!','Good game','What a play!','Laugh and live','stay discplined and work hard','Get Better!'];

// Function to generate random messages
const messageGenerator = () => {
    // generating random indexes to select random elements from the arrays 
    const themeIndex = Math.floor(Math.random() * themes.length);
    const messageIndex = Math.floor(Math.random() * messages.length);
    const endIndex = Math.floor(Math.random() * endMessages.length);

    //after getting radom indices set the elements to the desires message and combine them
    const theme = themes[themeIndex];
    const message = messages[messageIndex];
    const endMessage = endMessages[endIndex];

    const randomMessage = `${theme}: ${message}: ${endMessage}`;

    //return the random message
    return randomMessage;
}

console.log(messageGenerator());