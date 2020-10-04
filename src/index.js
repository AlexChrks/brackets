module.exports = function check(str, bracketsConfig) {
    let openedStack = [];

    if (str.length % 2 !== 0) {
        return false;
    }

        for (let i = 0; i < str.length; i++) {

            for (let item of bracketsConfig) {

                if (str[i] == item[1] && openedStack[openedStack.length - 1] == item[0]) {
                    openedStack.pop();
                }

                else if (str[i] == item[0]) {
                    openedStack.push(str[i]);
                }

            }
            
        }
    
    if (openedStack.length == 0) {
        return true;
    }
    else {
        return false;
    }
  
}


