// 1678. Goal Parser Interpretation
// Tested successfully

// O(n)

let command1 = "G()(al)", command2 = "G()()()()(al)", command3 = "(al)G(al)()()G";

function goalParserInterpretation(command)
{
    let ans = "";

    for (let i = 0; i < command.length; i++)
    {
        if(command[i] == "(" && command[i+1] == ")")
        {
            ans = ans + "o";
            i++;
        } 
        else if (command[i] == "("&& command[i+1] != "(") continue;

        else if (command[i] == ")") continue;
        
        else ans = ans + command[i];
    }

    return ans;
}

console.log(goalParserInterpretation(command1));
console.log(goalParserInterpretation(command2));
console.log(goalParserInterpretation(command3));
console.log(goalParserInterpretation("()()()(al)Goal"));