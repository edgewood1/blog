GET - an array of representations

POST - The response body contains a representation of the resource.

PATCH - a representation of the resource OR 





- PUT replaces a resource (even if that resource doesn’t yet exist), while POST usually adds a new resource. They can both be used to Create new resources, but PUT is mainly used to Update existing resources.
- PATCH is used to Update part of a resource, whereas PUT is only used to Update an entire resource (by replacing it).
- POST is processed “according to the resource’s own specific semantics” (per the RFC), making it something of a catch-all. It can even have Update functionality, like when sent to an `/updates/` subresource.