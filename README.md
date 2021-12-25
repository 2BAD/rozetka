# rozetka

Unofficial REST API client for rozetka.ua

### Tests

Running tests requires `--experimental-vm-modules` flag
example: `NODE_OPTIONS=--experimental-vm-modules npm run test`

### Note

Sometimes catalog categories may have wrong `category_id` and `top_category_id` (e.g. 80025), first is mitigated by extracting correct `category_id` from the link, second one should not be relied upon and replaced with warning message `NOT_RELIABLE_SEE_README`.
