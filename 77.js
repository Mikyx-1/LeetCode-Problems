// 77. Combinations



let n = 4;
let k = 2;

function combinations(n, k)
{
    let ans = [];
    function dfs(s, path)
    {
        if(path.length == k)
        {
            ans.push([...path]);
            return true;
        }

        for(let i = s; i < n+1; i++)
        {
            path.push(i);
            dfs(i+1, path);
            path.pop();
        }
    }
    dfs(1, []);
    return ans;
}

console.log(combinations(n, k+1));
