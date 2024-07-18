function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export function getAsciiQuote() {
  const quotesAscii = [
    `___                                                       _                                                                                                                     __          
 |   _     |_ |_     _  _   _     _   _  |      |_   _   (_  _       _   _|   .  _     _   _   _    _  |  _   _  _ .   |_ |_   _    _  _   _|  _       __   /  \  _   _ |  _   |__)  _  |_  
 |  |  |_| |_ | )   (_ (_| | )   (_) | ) | \/   |_) (-   |  (_) |_| | ) (_|   | | )   (_) | ) (-   |_) | (_| (_ (- .   |_ | ) (-   (_ (_) (_| (- .          \__/ | ) (_ | (-   |__) (_) |_) 
                                           /                                                       |                                                                                        
`,
    `  ___                                                          _                                                       
   |  |_   _    _   _  |           _       |_  _     _   _    (_  _   _ |_     .  _   |_  _     _   _         _ | |    
   |  | ) (-   (_) | ) | \/   \)/ (_| \/   |_ (_)   (_) (_)   |  (_| _) |_ ,   | _)   |_ (_)   (_) (_)   \)/ (- | | .  
                         /            /             _/                                         _/                      
`,
    ` __                                                                                                                                                                                                     
/   |  _  _   _     _  _   _|  _    _  |      _      _   |  _   _  |   _   | . |   _   . |_        _   _        _ . |_ |_  _  _    |_        _  _   _   _  _   _   _       |_   _     _  _   _  _  _    
\__ | (- (_| | )   (_ (_) (_| (-   (_| | \)/ (_| \/ _)   | (_) (_) |( _)   | | |( (-   | |_   \)/ (_| _)   \)/ |  | |_ |_ (- | )   |_) \/   _) (_) ||| (- (_) | ) (-   \)/ | ) (_)   (_ (_| |  (- _) .  
                                                 /                                                                                     /                                                                
`,
    `                                                     _                                                    
| |_   .  _    _   _  |_    _  _   _       _  |_    (_  _   _    _  _   _|  _   |_  _         _   _ |     
| |_   | _)   | ) (_) |_   (- | ) (_) |_| (_) | )   |  (_) |    (_ (_) (_| (-   |_ (_)   \)/ (_) |  |( .  
                                          _/                                                              
`,
    `                                                                                                                                        
|  | |_   _  _        _         _  _  _    _  _   _   _   _  _  |_  _  _|  __  _      |_    _  _   _|  _      _|  _ |  _ |_  _   . |_ | 
|/\| | ) (- | )   \/ (_) |_|   _) (- (-   (_ (_) ||| ||| (- | ) |_ (- (_|     (_) |_| |_   (_ (_) (_| (- ,   (_| (- | (- |_ (-   | |_ . 
                  /                                                                                                                     
`,
  ];
  const quotes = [
    `"Truth can only be found in one place, the code"`,
    `"The only way to go fast, is to go well"`,
    `"Clean code always looks like it was written by someone who cares`,
    `"It is not enough for code to work"`,
    `"When you see commented-out code, delete it!"`,
  ];
  return quotes[getRandomInt(quotes.length)];
}
