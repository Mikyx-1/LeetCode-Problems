// 2114. Maximum Number of Words Found in Sentences
// Tested successfully

let sentences1 = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"];
let sentences2 = ["please wait", "continue to fight", "continue to win"];


function maximumNumberOfWordsFoundInSentences(sentences){
    
    let maxWords = sentences[0].split(" ").length;
    for (let i = 1; i < sentences.length; i++)
    {
        let sentenceLength = sentences[i].split(" ").length;
        if(sentenceLength > maxWords) maxWords = sentenceLength;
    }

    return maxWords;
}

console.log(maximumNumberOfWordsFoundInSentences(sentences1));
console.log(maximumNumberOfWordsFoundInSentences(sentences2));