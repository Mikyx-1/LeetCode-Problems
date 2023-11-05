// 71. Simplify Path
// Tested successfully

let path1 = "/home/", path2 = "/../", path3 = "/home//foo/";

let path = "/a//b////c/d//././/.."

function simplifyPath(path)
{

    let paths = path.split("/");
    let idxes = [];
    let idx = 0;
    while(idx < paths.length)
    {
        let stayFlag = false;
        if(paths[idx].includes("..") && paths[idx].length==2) 
        {
            paths.splice(idx, 1)
            stayFlag = true;
        }

        else if(paths[idx].includes(".") && paths[idx].length==1) 
        {
            paths.splice(idx, 1)
            stayFlag = true;
        }
        if (stayFlag==false) idx++;
    }
    let result = "/";
    for (let path of paths)
    {
        if(path != "") result = result + path + "/"
    }
    return result.slice(0, -1);
}

console.log(simplifyPath("/a//b////c/d//././/.."));