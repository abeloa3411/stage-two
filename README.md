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
    "name": "accent chair",
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
    "price": 25,
    "name": "accent chair",
    "image": "img url",
    "description": "deleted person description",
    "category": "home"
}

*/
```

### update a person

```js
fetch("/:id", {
  method: "PUT",
  body: JSON.stringify({
    title: "updated person",
    price: 30,
    description: "updated person description",
    image: "img url",
    category: "electronics",
  }),
})
  .then((res) => res.json())
  .then((json) => console.log(json));

/* response
{

    "price": 30,
    "name": "updated person",
    "image": "img url",
    "description": "updated person description",
    "category": "electrinics",

}

Note: The update will not occur on the database
*/
```

#### This are the available routes

#### persons

```js
//request body

{
  price: Number,
  name:String,
  image: String,
  description: String,
  category: String
  }

```

GET

/persons (get all persons)

/persons/:id (get a single person)

/persons/category/home (sort persons using category)

POST

/persons

PUT

/persons/:id

DELETE

/persons/:id

#### User

```js

{

  id:Number,
  full_name: String,
  email: String,
  password: String,
  telephone: Number,

}

```

GET

/user (get all users)
/user/:id (get a single user)

POST

/user (add a user)

DELETE

/user/:id (remove a user)

PATCH

/user/:id (update a user)

#### Auth

```js
//login fields
{
  email: String;
  password: String;
}
```

POST

/auth/login

```js
//sign in fields
{
  full_name: String,
  email: String,
  password: String,
  telephone: Number,

}
```

/auth/signup

Enjoy and feel free to contribute.
