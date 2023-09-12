### Resources

person:https://hng2-vg6j.onrender.com/api
Link to UML diagrams: https://drive.google.com/file/d/1-FSfW8tQ068q6p8RnJ6tKQ3xIibuWonN/view?usp=sharing

### Usage

You can fetch datausing any methods you know ie fetch, axios etc

### get a person

```js
fetch("https://hng2-vg6j.onrender.com/api/:id")
  .then((res) => res.json())
  .then((json) => console.log(json));

/*

{
    name: "person name",
    age: 30,
    track: "updated person track",
}

  */
```

### Create a person

```js
fetch("https://hng2-vg6j.onrender.com/api", {
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
fetch("https://hng2-vg6j.onrender.com/api/:id", {
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
fetch("https://hng2-vg6j.onrender.com/api/:id", {
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
