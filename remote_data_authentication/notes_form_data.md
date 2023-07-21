# FormData

Form Data is an object that let's us send forms using `fetch`.

```javascript
let formData = new FormData([form]);
```

```html
<form id="formElem">
  <input type="text" name="name" value="John" />
  <input type="text" name="surnname" value="Smith" />
  <input type="submit" />
</form>

<script>
  formElem.onsubmit = async (e) => {
    e.preventDefault();

    let response = await fetch("/article/formdata/post/user", {
      method: "POST",
      body: new FormData(formElem),
    });

    let result = await response.json();

    alert(result.message);
  };
</script>
```

### Methods

- `formData.append(name, value)`: adds a form field with a given name and value.
- `formData.append(name, blob, fileName)`: add a field as `<input type="file" />`.
- `formData.delete(name)`: deletes a form field with the giver `name`.
- `formData.get(name)`: get the value of the filed with the given `name`.
- `formData.has(name)`: returns a bool if a field with given `name` exists.
- `formData.set(name, value)`: similar to append but overwrites all existing fields to make sure that there is a single field.
- `formData.set(name, blob, filename)`: same as append but with same overwrites.

We can also iterate through a `formData` using a `for... of` loop.

```javascript
let formData = new FormData();

formData.append("key1", "value1");
formData.append("key2", "value2");

for (let [key, value] of formData) {
  alert(`${key} = ${value}`); // key1 = value1, key2 = value2
}
```

### Sending a form with a file

The form is always sent as a `Content-Type: multiplart/form-data`, this encoding allows us to send files.
