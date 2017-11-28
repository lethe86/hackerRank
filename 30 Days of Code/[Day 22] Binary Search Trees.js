        // Add your code here        
        if (root == null) {            
            return -1;        
        }

        let max = Math.max(this.getHeight(root.right), this.getHeight(root.left));

        return max + 1;