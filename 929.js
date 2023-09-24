// 929: Unique Email Addresses
// Tested successfully

// Algorithm: 
// Step 1: Filter the original emails
// Step 2: create a set of the filtered emails


let emails1 = ["test.emailalex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"];
let emails2 = ["a@leetcode.com","b@leetcode.com","c@leetcode.com"];



function uniqueEmailAddresses(emails)
{
    let results = [];
    for (let i = 0; i < emails.length; i++)
    {
        let [firstPart, secondPart] = emails[i].split('@');
        firstPart = firstPart.replace(/\./g, '');
        if (firstPart.indexOf('+') > 0)
        {
            firstPart = firstPart.slice(0, firstPart.indexOf('+'))
        }
        results.push(firstPart + '@' + secondPart);
    }

    results = new Set(results);

    return results.length;
}


console.log(uniqueEmailAddresses(emails1));
console.log(uniqueEmailAddresses(emails2));