export const SET_USERS = "SET_USERS";

export const setUsers = (users) => ({
  type: SET_USERS,
  payload: users,
});

export const getUsers = () => async (dispatch) => {
    try {
        let res = await fetch("http://domer.tech:9999/users/");
        const data = await res.json();
        dispatch(setUsers(data));
    } catch (e) {
        console.log(e);
    }
};

