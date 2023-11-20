// 824. Goat Latin
// tested successfully

let sentence1 = "I speak Goat Latin", sentence2 = "The quick brown fox jumped over the lazy dog";


function goatLatin(sentence)
{
    let sentence_ = sentence.split(" ");
    let vowels = {"u":true, "e":true, "o":true, "a":true, "i":true};
    for (let i = 0; i < sentence_.length; i++)
    {
        if(vowels[sentence_[i][0]] != null)
        {
            sentence_[i] = sentence_[i] + "ma" + "a".repeat(i+1);
        }
        else{
            sentence_[i] = sentence_[i].slice(1, ) + sentence_[i][0] + "ma" + "a".repeat(i+1);
        }
    }
    return sentence_.join(" ");
}

console.log(goatLatin(sentence1));
console.log(goatLatin(sentence2));