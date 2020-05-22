const global = {

    validate: values => {
        const errors = {}
        const requiredFields = [
            'otp',
            'email'
        ]
        requiredFields.forEach(field => {
            if (!values[field]) {
                errors[field] = 'Required'
            }
        })
        if (
            values.email &&
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
            errors.email = 'Invalid email address'
        }
        return errors
    },
    debounce : (func, delay) => { 
        let debounceTimer 
        return function() { 
            const context = this
            const args = arguments 
                clearTimeout(debounceTimer) 
                    debounceTimer 
                = setTimeout(() => func.apply(context, args), delay) 
        } 
    } 
}

export default global;