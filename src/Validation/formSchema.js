import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required("Please enter a name for your pizza")
        .min(2, "name must be at least 2 characters"),
    size: yup
        .string()
        .required("Please select a size"),
    sauce: yup
        .string()
        .required("Please choose a sauce"),
    glutenFree: yup
        .boolean(),
    pepperoni: yup
        .boolean(),
    sausage: yup
        .boolean(),
    canBacon: yup
        .boolean(),
    onions: yup
        .boolean(),
    special: yup
        .string()
        .trim()
        .max(200, "too much")
});
export default formSchema;