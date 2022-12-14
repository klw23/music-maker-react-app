import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {profileThunk} from "./music-users-thunk";

const CurrentUser = ({children}) => {
    // const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(profileThunk())
    })
    return(children)
}
export default CurrentUser