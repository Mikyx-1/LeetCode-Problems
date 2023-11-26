// Assign Cookies
// Tested successfully

let g1 = [1,2,3], s1 = [1,1];
let g2 = [1,2], s2 = [1,2,3];


function assignCookies(g, s)
{
    let cnt = 0;
    for (let i = 0; i < g.length; i++)
    {
        for(let j = 0; j < s.length; j++)
        {
            if(s[j] >= g[i]) {
                s.splice(j, 1);
                cnt++;
                break;
            } 
        }
    }
    return cnt;
}

console.log(assignCookies(g1, s1));
console.log(assignCookies(g2, s2));