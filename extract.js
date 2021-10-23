function extract(text){
    if(!text) return ''

    /**************************************           Remove punctuations                   ************************************/

    let punctuations =['!','@','#','$','%','^','&','+','-','*','_','=','(',')',"'",'"','.',',','<','>',':',';','?','/','\\']





    /*********************************        Trim, Tokenize, and convert to Lower case        *************************/

    text = text.trim().split('').filter(character => !punctuations.includes(character)).join('')
    let words = text.toLowerCase().split(' ')






    /*********************************             trim each word             ************************/

    let tokens=[]
    words.forEach(word=>{
        if(word && word.trim() && word.trim().length){
            tokens.push(word.trim())
        }
    })






    /****************       Declare articles, conjunctions, prepositions, auxiliary verbs     *****************/

    let articles = ['a','an','the']
    let conjunctions = [
        'and',
        'for',
        'nor',
        'but',
        'or',
        'yet',
        'so',
        'after',
        'although',
        'as',
        'as if',
        'as long as',
        'as much as',
        'as soon as',
        'as though',
        'because',
        'before',
        'by the time',
        'even if',
        'if',
        'in case',
        'lest',
        'once',
        'only if',
        'since',
        'so that',
        'than',
        'that',
        'though',
        'till',
        'unless',
        'until',
        'when',
        'whenever',
        'where',
        'wherever',
        'while',
        'until',
        'both',
        'either',
        'neither',
        'but only',
        'whether']
    let prepositions = [
        "a",
        "abaft",
        "aboard",
        "about",
        "above",
        "absent",
        "across",
        "afore",
        "after",
        "against",
        "along",
        "alongside",
        "amid",
        "amidst",
        "among",
        "amongst",
        "an",
        "anenst",
        "apropos",
        "apud",
        "around",
        "as",
        "aside",
        "astride",
        "at",
        "athwart",
        "atop",
        "barring",
        "before",
        "behind",
        "below",
        "beneath",
        "beside",
        "besides",
        "between",
        "beyond",
        "but",
        "by",
        "circa",
        "concerning",
        "despite",
        "down",
        "during",
        "except",
        "excluding",
        "failing",
        "following",
        "for",
        "forenenst",
        "from",
        "given",
        "in",
        "including",
        "inside",
        "into",
        "lest",
        "like",
        "mid",
        "midst",
        "minus",
        "modulo",
        "near",
        "next",
        "notwithstanding",
        "of",
        "off",
        "on",
        "onto",
        "opposite",
        "out",
        "outside",
        "over",
        "pace",
        "past",
        "per",
        "plus",
        "pro",
        "qua",
        "regarding",
        "round",
        "sans",
        "save",
        "since",
        "than",
        "the",
        "through",
        "throughout",
        "till",
        "times",
        "to",
        "toward",
        "towards",
        "under",
        "underneath",
        "unlike",
        "until",
        "unto",
        "up",
        "upon",
        "via",
        "vice",
        "with",
        "within",
        "without"
    ]

    let auxiliaryVerbs =[
        'do',
        'does',
        'did',
        'has',
        'have',
        'had',
        'is',
        'am',
        'are',
        'was',
        'were',
        'be',
        'being',
        'been',
        'may',
        'must',
        'might',
        'should',
        'could',
        'would',
        'shall',
        'will',
        'can'
    ]

    // let pronouns = [
    //     'I',
    //     'you',
    //     'my',
    //     'mine',
    //     'myself',
    //     'we',
    //     'us',
    //     'our',
    //     'ours',
    //     'ourselves',
    //     'you',
    //     'you',
    //     'your',
    //     'yours',
    //     'yourself',
    //     'you',
    //     'you',
    //     'your',
    //     'your',
    //     'yourselves',
    //     'he',
    //     'him',
    //     'his',
    //     'his',
    //     'himself',
    //     'she',
    //     'her',
    //     'her',
    //     'her',
    //     'herself',
    //     'it',
    //     'it',
    //     'its',
    //     'itself',
    //     'they',
    //     'them',
    //     'their',
    //     'theirs',
    //     'themself',
    //     'they',
    //     'them',
    //     'their',
    //     'theirs',
    //     'themselves'
    // ]



    /***********************       Remove articles, conjunctions, prepositions, auxiliary verbs     *********************/

    let filteredTokens = tokens.filter(tokenItem => !(
        articles.includes(tokenItem) ||
        conjunctions.includes(tokenItem) ||
        prepositions.includes(tokenItem) ||
        auxiliaryVerbs.includes(tokenItem)
        ))

    // console.log('filteredTokens -> ',filteredTokens)

    // let sorted = filteredTokens.sort()

    // console.log('sorted -> ',sorted)
    
    return filteredTokens.join(' ')
}