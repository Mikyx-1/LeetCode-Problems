// 79. Word Search
// Havent understood the backtracking algorithm


function exist(board, word)
{
    let num_rows = board.length;
    let num_cols = board[0].length;

    function dfs(i, j, s)
    {
        if (i < 0 || i == num_rows || j < 0 || j==num_cols) return false;

        if(board[i][j] != word[s] || board[i][j] == '*') return false;

        if(s == word.length-1) return true;

        cache = board[i][j];
        board[i][j] = '*';

        let isExist = (dfs(i, j-1, s+1) || dfs(i-1, j, s+1) || dfs(i, j+1, s+1) || dfs(i+1, j, s+1))

        board[i][j] = cache
        return isExist;
    }
    for (let i = 0; i < num_rows; i++)
    {
        for(let j = 0; j < num_cols; j++)
        {
            if (dfs(i, j, 0)) return true;
        }
    }
    return false;
}




let board1 = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
let word1 = 'ABCCED'

let board2 = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
let word2 = 'ABCB'


console.log(exist(board1, word1));