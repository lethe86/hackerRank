function Solution(){
    //Write your code here
    var stack = []
    var queue = []
    
    this.pushCharacter = (c) => stack.push(c)
    this.enqueueCharacter = (c) => queue.push(c)
    this.popCharacter = () => stack.pop()
    this.dequeueCharacter = () => queue.shift()
    
    return this
}