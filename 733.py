# 733: Flood Fill
# Tested successfully

image1 = [[1,1,1],[1,1,0],[1,0,1]]
sr1 = 1
sc1 = 1
color1 = 2

image2 = [[0,0,0],[0,0,0]]
sr2 = 0
sc2 = 0
color2 = 0


def floodFill(image, sr, sc, color):
    numRows = len(image)
    numCols = len(image[0])
    
    def run(image, sr, sc, color):
        
        cache = image[sr][sc]
        image[sr][sc] = color

        if (sr-1 >= 0 and 0 < sc < numCols and image[sr-1][sc]==cache):
            run(image, sr-1, sc, color)
        if(sr+1 < numRows and 0 < sc < numCols and image[sr+1][sc] == cache):
            run(image, sr+1, sc, color)

        if(sc-1 >= 0 and 0 < sr < numRows and image[sr][sc-1] == cache):
            run(image, sr, sc-1, color)
        if(sc+1 < numCols and 0 < sr < numRows and image[sr][sc+1] == cache):
            run(image, sr, sc+1, color)

        

        

    run(image, sr, sc, color)
    return image

print(floodFill(image1, sr1, sc1, color1))
print(floodFill(image2, sr2, sc2, color2))
        