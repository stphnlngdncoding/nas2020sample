const validate = (values) => {
  const errors = {}
  if (!values.title) {
    errors.title = "Required"
  } else if (values.title.length < 6) {
    errors.title = "Title must be greater than 6 characters"
  }

  if (!values.content) {
    errors.content = "Required"
  }

  if (!values.subtitle) {
    errors.subtitle = "Required"
  }

  if (!values.author) {
    errors.author = "Require"
  }
  return errors
}

export default validate;