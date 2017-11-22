function main() {
    var i = 4
    var d = 4.0
    var s = "HackerRank "

    // Declare second integer, double, and String variables.
    var j = readLine();
    var u = readLine();
    var k = readLine();

    // Read and save an integer, double, and String to your variables.
    var sum = parseInt(j) + i;
    var double = (parseFloat(u) + d).toFixed(1);
    var string = s + k;

    // Print the sum of both integer variables on a new line.
    console.log(sum);

    // Print the sum of the double variables on a new line.
    console.log(double);

    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.
    console.log(string);
}