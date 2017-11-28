this.removeDuplicates=function(head){
    //Write your code here        
    if (!head || !head.next) {
        return head;
    }
    
    var currentNode = head;
    var nextNode = currentNode.next;
    
    while (nextNode) {
        if (currentNode.data == nextNode.data) {
            currentNode.next = nextNode.next;                
        } else {
            currentNode = nextNode;
        }
        nextNode = nextNode.next;
    }
    
    return head;
};