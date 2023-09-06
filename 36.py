# 36. Valid Sudoku
# Tested successfully

board1 =[["5","3",".",".","7",".",".",".","."]
        ,["6",".",".","1","9","5",".",".","."]
        ,[".","9","8",".",".",".",".","6","."]
        ,["8",".",".",".","6",".",".",".","3"]
        ,["4",".",".","8",".","3",".",".","1"]
        ,["7",".",".",".","2",".",".",".","6"]
        ,[".","6",".",".",".",".","2","8","."]
        ,[".",".",".","4","1","9",".",".","5"]
        ,[".",".",".",".","8",".",".","7","9"]]

board2 = [["8","3",".",".","7",".",".",".","."]
        ,["6",".",".","1","9","5",".",".","."]
        ,[".","9","8",".",".",".",".","6","."]
        ,["8",".",".",".","6",".",".",".","3"]
        ,["4",".",".","8",".","3",".",".","1"]
        ,["7",".",".",".","2",".",".",".","6"]
        ,[".","6",".",".",".",".","2","8","."]
        ,[".",".",".","4","1","9",".",".","5"]
        ,[".",".",".",".","8",".",".","7","9"]]


# Rule1: Check the square within
# Rule2: Check row + col


def checkRowAndCol(board, x, y):
    value = board[x][y]
    
    for i in range(len(board)):
        if board[i][y] == value and i != x:
            return False
        
    for j in range(len(board[0])):
        if board[x][i] == value and i != y:
            return False
        
    return True

def checkRule1(board):  # checked
    num_rows = len(board)
    num_cols = len(board[0])
    for i in range(num_rows):
        for j in range(num_cols):
            if board[i][j] != ".":
                if checkRowAndCol(board, i, j) == False:
                    return False
                
    return True

def extract_patch(board, x, y):
    start_x = (x//3)*3
    start_y = (y//3)*3
    res = []
    for i in range(start_x, start_x+3):
        for j in range(start_y, start_y+3):
            if i != x or j != y:
                res.append(board[i][j])

    return res

def checkRule2(board):
    num_rows = len(board)
    num_cols = len(board[0])

    for i in range(num_rows):
        for j in range(num_cols):
            if(board[i][j] != "."):
                patch = extract_patch(board, i, j)
                
                if (board[i][j] in patch):
                    
                    return False
                
    return True


print(checkRule2(board2))