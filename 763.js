// 763: Partition Labels
// Tested successfully




let string1 = 'ababcbacadefegdehijhklij'
let string2 = 'eccbbbbdec'



// Test check duplicates

results = ["a", 'b']
char = 'a';
function checkDuplicates(results, char)
{   let break_flag = false;
    let final_results = [];
    for (let i = 0; i < results.length; i++){
        for (let j = 0; j < results[i].length; j++)
        {
            if(results[i][j] == char){
                final_results = [...results.slice(0, i), results.slice(i, ).join("")+char]  
                return final_results;
                
            }
        }
    
    }
    return '';
}


// console.log(checkDuplicates(results, char));

function partitionLabels(string){
    let results = [];

    let results_idx = 0;
    let result = '';
    for(let i = 0; i < string.length; i++){
        if(checkDuplicates(results, string[i]).length > 0)
        {
            results = checkDuplicates(results, string[i])
        }
        else{
            results.push(string[i])

        }

    }

    let final_result = [];
    for (r of results){
        final_result.push(r.length);
    }
    return final_result;
}

console.log(partitionLabels(string1))