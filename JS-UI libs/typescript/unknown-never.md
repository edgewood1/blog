### Unknown

```typescript
let user: any = 4;
user = 'hi';
let user2: unknown = 5;
user2 = 'hi';
let user3: string = 'hi';
user = user3 // ok
user3 = user2 // error: can't assign a non-unknown type to a defined type without type check
user3 = typeof user2 == 'string' ? user2 : JSON.stringify(user2);
```

### Never

```typescript
function ge(message: string) {
    throw { message }
}
ge('hi');
```