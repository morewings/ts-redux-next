## TemplateName

Tba

## Selectors

### `useTemplateNameLoadingState`

Returns request loading state from the store. 

```javascript
import {useTemplateNameLoadingState} from 'features/templateName';

// Needs to be run from inside React component or other hook.
const {isLoading, hasError, isFulfilled} = useTemplateNameLoadingState();
```

### `useTemplateName`

Returns random number value from the store

```javascript
import {useTemplateName} from 'features/templateName';

// Needs to be run from inside React component or other hook.
const number = useTemplateName();
```

## Action creators

### `useGetTemplateNameQuery`

Performs AJAX query to get TemplateName.

```javascript
import {useGetTemplateNameQuery} from 'features/templateName';

// Needs to be run from inside React component or other hook.
const getTemplateName = useGetTemplateNameQuery();
const handleClick = () => {
  getTemplateName();
}
```

