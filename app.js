let friends = ["John", "Jack", "James", "Joe", "Jarod"];

for (let i = 0; i < friends.length; i++) {
    for (let j = 99; j > 0; j--) {
        if (j === 1) {
            console.log(j + " Line of code in the in the file " + j + " Line of Code! " + friends[i] +" Strikes one out, clears it all out. No more lines of Code in the file!")
        } else {
            console.log(j + " Lines of code in the file! " + j + " Lines of Code! " + friends[i] + " Strikes one out, clears it all out, " + ( j - 1) + " Lines of code in the file...");
        }  
    }
}
