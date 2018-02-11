### Create A New Post

Create A New Post 🆕 **Admin Privilege Required**


```endpoint
POST /post/create
```

Property | Description
---|---
`title` | (required) Post Title
`content` | (required) Post Content
`summary` | (required) Post Summary
`tags` | (Optional) Post Tags


#### Example response

```json
{
    "success": true,
    "response": {
        "tags": [
            "{tags}"
            //...
        ],
        "created": "{timestamp}",
        "file": [],
        "_id": "{Obj Id}",
        "title": "{title}",
        "content": "{Content}",
        "summary": "{summary}",
        "author_id": "{Author Obj Id}",
        "__v": 0
    }
}
```

### Delete A Post

Delete Post **Admin Privilege Required**

```endpoint
DELETE /post/delete
```
Property | Description
---|---
`uid` | (required) Post Object Id

#### Example response

```json
{
    "success": true,
    "response": {
        "n": 1,
        "ok": 1
    }
}
```

### List All Post

Get all post by page & limit 

```endpoint
GET /post/list?page={page}&limit={limit}
```

#### Example response

```json
{
    "success": true,
    "response": [
        {
            "_id": "{Obj Id}",
            "title": "{title}",
            "summary": "{Summary}"
        }
        //...
    ]
}
```

### Get A Post Detail

Get a post detail by Object Id

```endpoint
GET /post/detail?uid={ObjId}
```

#### Example response

```json
{
        "tags": [
            "{tags}"
            //...
        ],
        "created": "{timestamp}",
        "file": [],
        "_id": "{Obj Id}",
        "title": "{title}",
        "content": "{Content}",
        "summary": "{summary}",
        "author_id": "{Author Obj Id}",
        "__v": 0
}
```