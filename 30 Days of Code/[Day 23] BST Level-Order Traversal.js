        // Add your code here
        // To print values separated by spaces use process.stdout.write(someValue + ' ')
        var queue = [root];     
        var LO = "";

        while (queue.length) {
            var shift = queue.shift();
            LO += shift.data + ' ';
            
            if (shift.left)
                queue.push(shift.left);
            
            if (shift.right)
                queue.push(shift.right);
        }
        console.log(LO);