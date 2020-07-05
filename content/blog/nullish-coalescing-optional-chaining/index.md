---
title: Javascript (ES2020) Nullish Coalescing ( ?? ) and Optional Chaining ( ?. )Explained
date: "2020-07-06T22:40:32.169Z"
readTime: 6 min read
description: ES2020 two new cool features explained for everyday use
---

### Nullish Coalescing operator ( ?? )

It is a logical operator that **returns** its **right-hand side operand** when its **left-hand side operand** is [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null) or [undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined), and otherwise returns its left-hand side operand.

let's see some use-cases that you might encounter frequently, where the _( ?? )_ operator can make your life easier :)

![](https://cdn-images-1.medium.com/max/600/1*h3I66WNSusebivPHYGRgJA.png)

Code snippet — 1.1

The most common use-case is accessing a value from a nested _Object_ in javascript.

In Code snippet-1.1 you can see that we are trying to access the key ‘_name’_ from the data object, which is a nested object, and it gives us the expected result.

![](https://cdn-images-1.medium.com/max/600/1*NtTSfQPqHDY6uzexcaSXCw.png)

Code snippet — 1.2

In Code snippet-1.2 you can see that now the nested data object doesn't contain the _‘name’_ key. And when we try to access the _‘name’ key from it, we get undefined._

Getting an undefined value is often _not desirable_. You might want to set a default value if the key that you are trying to access is sometimes undefined.

This can be tackled using the logical ‘_OR_’ operator ( || ), like this:

```javascript
console.log(data.profile.name || ‘John Doe’)
```

This makes sure that if _data.profile.name_ is _undefined_ then _‘John Doe’_ is shown. But this is still not perfect*,* lets have a look why,

![](https://cdn-images-1.medium.com/max/600/1*Mbglk3_u5Wg7-CBW4xf7vg.png)

Code snippet —1. 3

What if the initial value of the _key_ ‘_age’_ is 0 (which is actually a valid age). In this case, we would get 21 as the output. Which is again not the desired behavior.

This happens because **0** in javascript is considered a **falsy** value.

So, until now what we had to do is:

```javascript
if(data.profile.name == undefined || data.profile.name == null )

 { keep the value of name as ‘John Doe’}

 else{ keep the provided value of name}
```

This makes your code unnecessarily long, and many inexperienced programmers (including me when I was starting! 🤓 ) introduce bugs unknowingly.

> _#Tip: Incomplete knowledge is more dangerous than no knowledge._

But now with the introduction of **Nullish Coalescing Operator _( ?? )_** in _ES2020,_ we can save a lot of time and bugs!

![](https://cdn-images-1.medium.com/max/600/1*NyJkHrjshn0EGz7EqQW9Bw.png)

Code snippet —1. 4

All we have to do is use the **( ?? )** operator in the place of ( || ), as simple as that! And that's all you have to do.

Now this will log 21 only when the value of age is **_null_** or **_undefined._** Which is what we expect.

---

### Optional Chaining operator ( ?. )

The **optional chaining** operator `?.` permits reading the value of a property located deep within a chain of connected objects without having to validate that each reference in the chain is valid.

let's understand this with the help of an example,

![](https://cdn-images-1.medium.com/max/600/1*D0l6eaZZllt3HnbSkstfaQ.png)

Code snippet — 2.1

We know from our previous experiences that if we try to access a key that doesn't exist inside an object, we get undefined. _( see Code snippet-2.1)_

We are trying to access _age_ (which is not present) from the _data_ object. Hence we get undefined.

![](https://cdn-images-1.medium.com/max/600/1*2vWYxoBGsIjxkTG3r0anGA.png)

Code snippet — 2.2 🔗 [check out the codesandbox](https://codesandbox.io/s/nested-object-error-example-x3z8n)

Now, what if we try to access a nested _key_ that doesn't exist.

As you can see in the Code snippet — 2.2 that we would get an error.

So if we have two levels of undefined, then we get an error.

This issue can be resolved using the logical _‘AND’_ (&&) operator, like this:

> console.log(data && data.profile && data.profile.age);

When translated to words it means — if _data_ exists — then extract _data.profile _— and if _data.profile_ exists — extract _data.profile.age_

And now we would not get an error. So problem solved? well, wait a sec!

⚠️ Now, this is an okay workaround to solve this issue, but this gets very nasty, very fast. Just imagine if you have a deeply nested _object_ and you want to access a key that is very deep into this object, how many times would you have to use the && operator!

Thus to simplify this we can now use the ES2020 **_optional chaining operator,_**

![](https://cdn-images-1.medium.com/max/600/1*ceKg02_1ln7CEmPWYVlIlA.png)

Code snippet — 2.3

In Code snippet-2.3 you can see how concise and easy to read our code is, which otherwise would have taken several lines.

Another observation to make is that we get the output as _undefined_. Which is still much better than getting an error and now we can also handle this by merging our learning of [**_Nullish coalescing ( ?? )_**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator) and [**_Optional chaining ( ?. )_**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) operator!

**Comment the answer** to the problem below! or [**tweet me**](https://twitter.com/vikrantbhat1022)**🐦** any questions you have!

---

Thanks for reading and if you liked this blog then please consider following for more posts like this!
