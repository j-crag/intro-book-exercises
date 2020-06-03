6. Will this program produce an error when run? Why or why not?

const FOO = 'bar';
{
const FOO = 'qux';
}

console.log(FOO);

---

There won't be an error. The variables are declared in two seperate scopes, so there isn't any confilct between them.
