### Resources

person:

### Usage

You can fetch datausing any methods you know ie fetch, axios etc

### get all person

```js
fetch("")
  .then((res) => res.json())
  .then((json) => console.log(json));
```

### get a single person

```js
fetch("/:id")
  .then((res) => res.json())
  .then((json) => console.log(json));
```

### Create a person

```js
fetch("", {
  method: "POST",
  body: JSON.stringify({
    name: "new person",
    age: 22,
    track: "backend
  }),
})
  .then((res) => res.json())
  .then((json) => console.log(json));

/* response
{
    name: "updated person name",
    age: 30,
    track: "updated person track",
}
*/
```

### delete a person

```js
fetch("/:id", {
  method: "DELETE",
});

/*
the response

{
    name: "deleted person name",
    age: 30,
    track: "deleted person track",
}

*/
```

### update a person

```js
fetch("/:id", {
  method: "PUT",
  body: JSON.stringify({
    name: "updated person name",
    age: 30,
    track: "updated person track",
  }),
})
  .then((res) => res.json())
  .then((json) => console.log(json));

/* response
{

    "name": "updated person name",
    "age": 22,
    "track": "updated person track",

}
*/
```
