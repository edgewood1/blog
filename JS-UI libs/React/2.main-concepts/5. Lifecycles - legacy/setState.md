We can't modify the state directly

This doesn't work (React wouldn't be aware of it, and so it wouldn't update the view:)

```javascript
handleIncrement = () => {
    this.state.count++;
}
```

So use a Component method setState(), which will explicitly tell React what has changed. The argument will either be added to state or overwrite them:

```javascript
handleIncrement = () => {
    this.setState({ count: this.state.count + 1});
}
```

What happens when state changes? 

1. when we call this.setState, we are telling React that the state of a component will change.  
2. React will then schedule a call to the render().  Because this is an asynch call, this call could happen at anytime in the near future - it's hard to say when.  
3. render() will return a new react element, which is our <div>, which has two children, <span> and <button>.  

*The virtual DOM*

Our virtual DOM is a tree with three elements <div> <span>/<button>

But then we suggest a new tree with our render() call.  
React compares the two trees in the virtual DOM to see what has been modified.  
It may realize that only <span> is different, so it will then only adjust <span> in the real browser DOM.  Nothing else will be updated.  

reactHoo

