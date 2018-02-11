### Create A New Admin/User

Create A New Admin/User 🆕 **Admin Privilege Required**


```endpoint
POST /users/create
```

Property | Description
---|---
`username` | (required) Username
`password` | (required) Password
`admin` | (required) Is Admin? (Boolean)

#### Example response

```json
{
    "success": true,
    "response": {
        "_id": "{Obj Id}",
        "username": "{Username}",
        "password": "{Hashed Password}",
        "admin": "{true|false}",
        "__v": 0
    }
}
```
### Login

Login and return coookie

```endpoint
POST /users/login
```

Property | Description
---|---
`username` | (required) Username
`password` | (required) Password

#### Example response

```json
{
    "success": true
}
//Cookie Name:"token"
```

### Check Login Status

Check Login Status

```endpoint
GET /users/status
```

#### Example response

```json
{
    "success": true,
    "response": {
        "username": "{username}",
        "admin": "{true|false}",
        "uid": "{Obj Id}",
        "iat": "{Signed Timestamp}"
    }
}
```

### Delete A User/Admin

Create A New Admin/User 🆕 **Admin Privilege Required**


```endpoint
DELETE /users/delete
```

Property | Description
---|---
`uid` | (required) Object Id

#### Example response

```json
{
  "success":true,
   "response":{
    "n":1,
    "ok":1
   }
}
```

### Get All Users

Fetch All Users by page&limit **Admin Privilege Required**

```endpoint
GET /users/list?page={page}&limit={limit}
```

#### Example response

```json
{
    "success": true,
    "response": [
        {
            "_id": "{Obj Id}",
            "username": "{username}",
            "admin": "{true|false}"
        }
        //...
    ]
}
```

### Update User

Update User **Admin Privilege Required**

```endpoint
PATCH /users/update
```

Property | Description
---|---
`uid` | (required) Object Id
`username` | (required) Username
`password` | (required) Password
`admin` | (required) Is Admin? (Boolean)

#### Example response

```json
{
    "success": true,
    "response": {
        "n": 1,
        "nModified": 1,
        "ok": 1
    }
}
```

### Get User Info

Get User Info by Object Id

```endpoint
GET /user/info?uid={ObjID}
```

#### Example response
```json
{
    "success": true,
    "response": {
        "_id": "{Obj Id}",
        "username": "{username}",
        "admin":"{true|false}"
    }
}
```

