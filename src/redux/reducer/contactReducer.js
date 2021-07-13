const initialState = [

        { id: 0, name: 'abcd', email: 'abc@g.com', phone: 1234567890 },
        { id: 1, name: 'efgh', email: 'efg@g.com', phone: 9876543210 },

]

const ContactReducer = (state = initialState, action) => {
        switch (action.type) {

                case "ADD_CONTACT":
                        return [...state, action.payload]
                case "UPDATE_CONTACT":
                        const updateState = state.map((item) => item.id === action.payload.id ? action.payload : item)
                        state = updateState
                        return state
                case "DELETE_CONTACT":
                        const deleteItem = state.filter((item) => item.id !== action.payload && item)
                        state = deleteItem
                        return state

                default:
                        return state;
        }
}

export default ContactReducer