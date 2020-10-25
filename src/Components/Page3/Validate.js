const required = value => (value || typeof value === 'number' ? undefined : 'Required')

const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined

const maxLength15 = maxLength(15)

const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined

const minLength2 = minLength(2)

const number = value =>
  value && isNaN(Number(value)) ? 'Must be a number' : undefined

const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined

const minValue13 = minValue(13)

const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined


  export { required, maxLength15, minLength2, number, minValue13, email }
